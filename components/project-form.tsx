'use client'

import { useState, useTransition } from 'react'
import { saveProject } from '@/app/actions'
import { MESSAGES, PROJECT_TYPES, waLink } from '@/lib/config'
import { SendIcon } from './send-icon'

export function ProjectForm({ onToast }: { onToast: (msg: string) => void }) {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [pending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const n = name.trim()
    const d = description.trim()
    if (!n || !type || !d) return onToast('املأ كل البيانات من فضلك')

    const msg = `${MESSAGES.project}\n\nالاسم: ${n}\nالنوع: ${type}\nالوصف: ${d}`
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')

    startTransition(async () => {
      const result = await saveProject({ name: n, type, description: d })
      if (result.ok) {
        onToast('المشروع اتسجل، شكرًا ليك')
        setName('')
        setType('')
        setDescription('')
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
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <h3>عندي مشروع عايز أعرّف بيه</h3>
      </div>
      <p>مش هتدفع حاجة. مشروعك هيتنشر على صفحات البراند ويوصل لآلاف المتابعين المهتمين.</p>
      <div className="field-row">
        <div className="field">
          <label htmlFor="projectName">اسم المشروع</label>
          <input
            type="text"
            id="projectName"
            placeholder="مثلاً: كافيه السعادة"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="projectType">نوع المشروع</label>
          <select id="projectType" required value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">اختار النوع</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="projectDesc">وصف بسيط للمشروع</label>
        <textarea
          id="projectDesc"
          placeholder="قولي فكرة المشروع وإيه اللي بيميزه..."
          required
          maxLength={3000}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={pending}>
        <SendIcon />
        {pending ? 'جاري الحفظ...' : 'انشره عندكم'}
      </button>
    </form>
  )
}
