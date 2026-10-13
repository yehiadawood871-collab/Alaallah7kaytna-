'use client'

import { useCallback, useRef, useState } from 'react'
import { StoryForm } from './story-form'
import { ProjectForm } from './project-form'

export function Submissions() {
  const [toast, setToast] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(''), 2500)
  }, [])

  return (
    <>
      <StoryForm onToast={showToast} />
      <ProjectForm onToast={showToast} />
      <div className={`toast${toast ? ' show' : ''}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  )
}
