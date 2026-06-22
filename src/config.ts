// ============================================================
//  ⚠️ EDIT-BEFORE-LAUNCH CONFIG — change these once, here only.
//  Every WhatsApp button on the site reads from this file.
// ============================================================

// Your WhatsApp number in international format, digits only, no "+".
// Portugal = 351. Example: "351912345678".
export const WHATSAPP_NUMBER = '351936134388';

// Pre-filled message the visitor sends you (URL-encoded automatically).
export const WHATSAPP_MESSAGE =
  "Hi Rasha! I'd like to join First Serve this summer.";

// Build a wa.me deep link (optionally override the pre-filled text).
export function waLink(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Social / external links shown in the footer.
// Leave any of these as '' to hide that link. Add more here over time.
// (The reel from your share link is now embedded in the "Why learn tennis?"
//  section. Put your Facebook *page* URL here when you want a footer link too.)
export const FACEBOOK_URL = '';  // 👉 your Facebook page URL, e.g. facebook.com/YourPage
export const INSTAGRAM_URL = ''; // 👉 add your Instagram handle URL when ready
export const TIKTOK_URL = '';    // 👉 spare slot for the future
