export const CONTACT = {
  email: "hello@cloudshieldsa.co.za",
  whatsappNumber: "27821234567", // TODO: replace with the real WhatsApp number
  whatsappDisplay: "+27 82 123 4567",
  location: "Johannesburg, South Africa",
  linkedin: "https://www.linkedin.com/company/cloudshield-africa",
  facebook: "https://www.facebook.com/cloudsheldafrica",
  x: "https://x.com/cloudsheldafrica",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
