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
 * Monta a mensagem padrão de solicitação de teste para um produto.
 */
export function createProductTrialMessage(productName: string): string {
  return `Olá! Tenho interesse em testar o produto "${productName}". Gostaria de receber mais informações sobre o funcionamento e o período de teste.`;
}

/**
 * Monta a mensagem padrão de interesse em compra/contratação de um produto.
 */
export function createProductPurchaseMessage(productName: string): string {
  return `Olá! Tenho interesse em adquirir o produto "${productName}". Pode me passar mais detalhes sobre valores e formas de pagamento?`;
}
