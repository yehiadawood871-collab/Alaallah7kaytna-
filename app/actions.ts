'use server'

import { db } from '@/lib/db'
import { projects, stories } from '@/lib/db/schema'
import { PROJECT_TYPES } from '@/lib/config'

type Result = { ok: true } | { ok: false; error: string }

const MAX_STORY = 5000
const MAX_NAME = 120
const MAX_DESC = 3000

export async function saveStory(input: { content: string; anonymous: boolean }): Promise<Result> {
  const content = String(input?.content ?? '').trim()
  if (!content) return { ok: false, error: 'اكتب الحكاية الأول' }
  if (content.length > MAX_STORY) return { ok: false, error: 'الحكاية طويلة جدًا' }

  try {
    await db.insert(stories).values({ content, anonymous: Boolean(input.anonymous) })
    return { ok: true }
  } catch (error) {
    console.error('saveStory failed', error)
    return { ok: false, error: 'حصلت مشكلة في الحفظ' }
  }
}

export async function saveProject(input: {
  name: string
  type: string
  description: string
}): Promise<Result> {
  const name = String(input?.name ?? '').trim()
  const type = String(input?.type ?? '').trim()
  const description = String(input?.description ?? '').trim()

  if (!name || !type || !description) return { ok: false, error: 'املأ كل البيانات من فضلك' }
  if (!PROJECT_TYPES.includes(type)) return { ok: false, error: 'نوع المشروع غير صحيح' }
  if (name.length > MAX_NAME || description.length > MAX_DESC) {
    return { ok: false, error: 'البيانات طويلة جدًا' }
  }

  try {
    await db.insert(projects).values({ name, type, description })
    return { ok: true }
  } catch (error) {
    console.error('saveProject failed', error)
    return { ok: false, error: 'حصلت مشكلة في الحفظ' }
  }
}
