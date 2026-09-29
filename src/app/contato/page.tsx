import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale comigo por WhatsApp, e-mail, Telegram, LinkedIn ou GitHub.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return <Contact />;
}
