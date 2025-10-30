import { z } from 'zod'

// Block Types
export const BlockTypeSchema = z.enum([
  'TEXT',
  'INPUT',
  'BUTTON',
  'CONDITION',
  'WEBHOOK',
])
export type BlockType = z.infer<typeof BlockTypeSchema>

// Position
export const PositionSchema = z.object({
  x: z.number(),
  y: z.number(),
})
export type Position = z.infer<typeof PositionSchema>

// Block Content Schemas
export const TextBlockContentSchema = z.object({
  text: z.string(),
  delay: z.number().optional(),
})

export const InputBlockContentSchema = z.object({
  placeholder: z.string(),
  variable: z.string(),
})

export const ButtonBlockContentSchema = z.object({
  buttons: z.array(
    z.object({
      text: z.string(),
      value: z.string(),
    })
  ),
})

export const ConditionBlockContentSchema = z.object({
  variable: z.string(),
  operator: z.enum(['equals', 'contains', 'greater_than', 'less_than']),
  value: z.string(),
})

export const WebhookBlockContentSchema = z.object({
  url: z.string(),
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE']),
  headers: z.record(z.string()).optional(),
  body: z.string().optional(),
})

// Block Schema
export const BlockSchema = z.object({
  id: z.string(),
  type: BlockTypeSchema,
  position: PositionSchema,
  content: z.union([
    TextBlockContentSchema,
    InputBlockContentSchema,
    ButtonBlockContentSchema,
    ConditionBlockContentSchema,
    WebhookBlockContentSchema,
  ]),
  order: z.number(),
})

export type Block = z.infer<typeof BlockSchema>

// Connection Schema
export const ConnectionSchema = z.object({
  id: z.string(),
  sourceBlockId: z.string(),
  targetBlockId: z.string(),
})

export type Connection = z.infer<typeof ConnectionSchema>

// Chatbot Schema
export const ChatbotSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  isPublished: z.boolean(),
  blocks: z.array(BlockSchema),
  connections: z.array(ConnectionSchema),
})

export type Chatbot = z.infer<typeof ChatbotSchema>
