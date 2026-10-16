import { profile } from './content.js'

export function createMailto({ name, replyTo, subject, message }) {
  const title = subject?.trim() || 'Portfolio orqali murojaat'
  const body = [
    message.trim(),
    '',
    `Ism: ${name.trim()}`,
    `Javob uchun: ${replyTo.trim()}`,
  ].join('\n')

  return `mailto:${profile.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
}
