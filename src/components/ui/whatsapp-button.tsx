import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  message,
  label = "Falar pelo WhatsApp",
  variant = "primary",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  const href = createWhatsAppLink(siteConfig.whatsapp, message);

  return (
    <Button href={href} variant={variant} size={size} className={className}>
      <MessageCircle size={18} />
      {label}
    </Button>
  );
}
