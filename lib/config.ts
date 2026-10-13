export const SITE_NAME = 'على الله حكايتنا'
export const WHATSAPP_NUMBER = '201012297429'
export const LOGO_URL = 'https://i.ibb.co/s9vHSz43/1791854970359.jpg'

export const MESSAGES = {
  story: `أهلًا، أنا جاي من موقع "${SITE_NAME}"، وعايز احكي موقف حصل معاك.`,
  project: `أهلًا، أنا جاي من موقع "${SITE_NAME}"، وعايز أعرّف بمشروعي.`,
  contact: `أهلًا، أنا جاي من موقع "${SITE_NAME}"، وعايز أتواصل معاكم.`,
}

export const PROJECT_TYPES = [
  'كافيه أو مطعم',
  'محل تجاري',
  'خدمة',
  'منتج',
  'تطبيق أو موقع',
  'مشروع شخصي',
  'أخرى',
]

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
