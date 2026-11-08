export const PHONE_DISPLAY = '(548) 888-9570'
export const PHONE_LINK = 'tel:+15488889570'
export const EMAIL = 'helpinghands.miranda@gmail.com'

export function buildMailto(subject, lines) {
  const body = lines.filter(Boolean).join('\n')
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
