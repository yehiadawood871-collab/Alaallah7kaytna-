'use client'

import { useState, useTransition } from 'react'
import { saveStory } from '@/app/actions'
import { MESSAGES, waLink } from '@/lib/config'
import { SendIcon } from './send-icon'

export function StoryForm({ onToast }: { onToast: (msg: string) => void }) {
  const [text, setText] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [pending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const content = text.trim()
    if (!content) return onToast('اكتب الحكاية الأول')

    let msg = `${MESSAGES.story}\n\n${content}`
    if (anonymous) msg += '\n\n(الحكاية دي من غير اسم)'
    // Open synchronously so popup blockers allow it; saving runs in parallel.
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')

    startTransition(async () => {
      const result = await saveStory({ content, anonymous })
      if (result.ok) {
        onToast('الحكاية اتسجلت، شكرًا ليك')
        setText('')
        setAnonymous(false)
      } else {
        onToast(result.error)
      }
    })
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-card-head">
        <div className="form-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <line x1="8" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="13" y2="14" />
          </svg>
        </div>
        <h3>احكي موقف حصل معاك</h3>
      </div>
      <p>موقف حزين، فرحان، غريب، أو حتى موقف عادي بس محتاج يوصل للناس. احكيلنا بصوتك.</p>
      <div className="field">
        <label htmlFor="storyText">اكتب حكايتك هنا</label>
        <textarea
          id="storyText"
          placeholder="احكي الموقف اللي حصل معاك..."
          required
          maxLength={5000}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="checkbox-field">
        <input
          type="checkbox"
          id="storyAnonymous"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
        />
        <label htmlFor="storyAnonymous">أنا عايز الحكاية تفضل من غير اسمي</label>
      </div>
      <button type="submit" className="btn btn-primary" disabled={pending}>
        <SendIcon />
        {pending ? 'جاري الحفظ...' : 'ابعتها على واتساب'}
      </button>
    </form>
  )
}
