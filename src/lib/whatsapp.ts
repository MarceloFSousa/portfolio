/**
 * Gera um link do WhatsApp com mensagem pré-preenchida.
 *
 * @param phone Número no formato internacional, apenas dígitos (ex: "5511900000000")
 * @param message Mensagem a ser pré-preenchida
 */
export function createWhatsAppLink(phone: string, message: string): string {
  const sanitizedPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;
}
