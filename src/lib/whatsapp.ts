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

/**
 * Monta a mensagem padrão de dúvida sobre um produto (antes da compra).
 */
export function createProductQuestionMessage(productName: string): string {
  return `Olá! Vi o produto "${productName}" no seu site e tenho algumas dúvidas antes de comprar.`;
}

/**
 * Monta a mensagem padrão de interesse em compra/contratação de um produto.
 */
export function createProductPurchaseMessage(productName: string): string {
  return `Olá! Tenho interesse em adquirir o produto "${productName}". Pode me passar mais detalhes sobre valores e formas de pagamento?`;
}
