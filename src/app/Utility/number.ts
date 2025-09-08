 export function formatPrice(price: number): string {
  const formatted = price.toLocaleString("fa-IR");//عدد رو به فرمت محلی فارسی (fa-IR) تبدیل می‌کنه
  return formatted.replace(/٬/g, ",") + " ریال";//همه‌ی جداکننده‌های ٬ (U+066C) رو با , (کاما انگلیسی) جایگزین می‌کنیم
}