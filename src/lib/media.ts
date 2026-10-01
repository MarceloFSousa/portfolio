import fs from "node:fs";
import path from "node:path";

/**
 * Verifica, em tempo de build/execução no servidor, se um arquivo referenciado
 * em /public existe. Usado para exibir a imagem real quando disponível ou uma
 * capa ilustrativa (gradiente + ícone) quando o arquivo ainda não foi enviado.
 *
 * Assim, basta o usuário adicionar a imagem na pasta correta com o nome
 * configurado nos dados (projects.ts / site.ts) que ela passa
 * a ser exibida automaticamente — sem alterar nenhum componente.
 */
export function hasPublicImage(publicPath?: string): boolean {
  if (!publicPath) return false;
  try {
    const fullPath = path.join(process.cwd(), "public", publicPath);
    return fs.existsSync(fullPath);
  } catch {
    return false;
  }
}

/**
 * Resolve um caminho de imagem para uso em componentes client-side: retorna
 * o caminho apenas se o arquivo existir em /public, ou undefined caso
 * contrário. Deve ser chamado em Server Components (páginas/seções) para
 * que a checagem via "node:fs" nunca seja incluída no bundle do cliente.
 */
export function resolveImage(publicPath?: string): string | undefined {
  return hasPublicImage(publicPath) ? publicPath : undefined;
}

const aspectRatioCache = new Map<string, number | undefined>();

/**
 * Lê a largura/altura reais de um JPEG ou PNG a partir dos bytes do
 * cabeçalho (sem decodificar a imagem inteira). Usado para dimensionar a
 * capa (CoverImage) exatamente na proporção da foto original, evitando
 * cortes (object-cover) ou distorção (esticar) quando a proporção do
 * arquivo não bate com a do card.
 */
function readDimensions(buffer: Buffer): { width: number; height: number } | undefined {
  // PNG
  if (buffer.length >= 24 && buffer.readUInt32BE(0) === 0x89504e47) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }

  // JPEG: percorre os marcadores até achar um SOF (Start Of Frame)
  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buffer.length) {
      if (buffer[offset] !== 0xff) break;
      const marker = buffer[offset + 1];
      const isSOF =
        marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isSOF) {
        return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
      }
      offset += 2 + buffer.readUInt16BE(offset + 2);
    }
  }

  return undefined;
}

/**
 * Retorna a proporção (largura / altura) real de uma imagem em /public,
 * para que o container da capa possa ser dimensionado sem cortar nem
 * esticar a foto. Chame apenas a partir de Server Components.
 */
export function getImageAspectRatio(publicPath?: string): number | undefined {
  if (!publicPath) return undefined;
  if (aspectRatioCache.has(publicPath)) {
    return aspectRatioCache.get(publicPath);
  }

  let ratio: number | undefined;
  try {
    const fullPath = path.join(process.cwd(), "public", publicPath);
    const dims = readDimensions(fs.readFileSync(fullPath));
    ratio = dims ? dims.width / dims.height : undefined;
  } catch {
    ratio = undefined;
  }

  aspectRatioCache.set(publicPath, ratio);
  return ratio;
}
