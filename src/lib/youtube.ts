/** Extrai o id de um link do YouTube (watch?v=, youtu.be/, /embed/, /shorts/). */
export function getYouTubeId(url: string): string | undefined {
  const match = url.match(/(?:v=|youtu\.be\/|\/embed\/|\/shorts\/)([\w-]{11})/);
  return match?.[1];
}

export function getYouTubeThumbnail(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
