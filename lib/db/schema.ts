import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const stories = pgTable('stories', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  anonymous: boolean('anonymous').notNull().default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
