import { describe, expect, it } from 'vitest'
import { createMailto } from './contact.js'
import { profile, navigation } from './content.js'

describe('portfolio contact flow', () => {
  it('creates an addressed email with encoded Uzbek text and reply details', () => {
    const url = createMailto({
      name: 'Sardor Aliyev',
      replyTo: '@sardor',
      subject: 'AI loyiha & maslahat',
      message: 'Assalomu alaykum! RAG tizimi haqida gaplashmoqchiman.',
    })
    expect(url.startsWith(`mailto:${profile.email}?`)).toBe(true)
    const query = new URLSearchParams(url.split('?')[1])
    expect(query.get('subject')).toBe('AI loyiha & maslahat')
    expect(query.get('body')).toContain('RAG tizimi haqida gaplashmoqchiman.')
    expect(query.get('body')).toContain('Ism: Sardor Aliyev')
    expect(query.get('body')).toContain('Javob uchun: @sardor')
  })

  it('uses a useful default subject when the optional subject is empty', () => {
    const url = createMailto({ name: 'Sardor', replyTo: 'sardor@example.org', subject: ' ', message: 'Loyiha haqida savolim bor' })
    expect(new URLSearchParams(url.split('?')[1]).get('subject')).toBe('Portfolio orqali murojaat')
  })

  it('has unique section targets and real owner contact links', () => {
    expect(new Set(navigation.map(({ id }) => id)).size).toBe(navigation.length)
    expect(profile.telegram).toBe('https://t.me/Ravshanbek_Isroilov')
    expect(profile.github).toBe('https://github.com/ravshanbekh')
    expect(profile.phone).toBe('+998957881803')
  })
})
