export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const CONTACT_CONFIG = {
  // Número de teléfono en formato internacional sin '+', espacios ni guiones.
  // Configurado con el número del usuario; también admite VITE_WHATSAPP_PHONE en .env
  whatsappNumber: import.meta.env.VITE_WHATSAPP_PHONE || "59179540396",

  // Mensaje por defecto para el botón de chat directo rápido
  quickChatMessage: "Hola Codexys, quisiera información y una cotización sobre un proyecto de software.",

  // Generador del mensaje formateado para el formulario estructurado
  formatFormMessage: ({ name, email, message }: ContactFormData): string => {
    return [
      `¡Hola Codexys! Mi nombre es *${name.trim()}*.`,
      `📧 Email de contacto: ${email.trim()}`,
      "",
      "📝 *Detalles de mi proyecto:*",
      message.trim(),
    ].join("\n");
  },

  // Generador de la URL de WhatsApp wa.me
  buildWhatsAppUrl: (text: string, phone?: string): string => {
    const targetPhone = (phone || CONTACT_CONFIG.whatsappNumber).replace(/\D/g, "");
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${targetPhone}?text=${encodedText}`;
  },
};
