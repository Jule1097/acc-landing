import { z } from 'zod'

import { SYSTEM_URL_ERROR_MESSAGE, SYSTEM_URL_PROTOCOLS } from '../../lib/constants/config/config.ts'

export const systemUrlValueSchema = z.string().trim().min(1, SYSTEM_URL_ERROR_MESSAGE)
export const canonicalUrlValueSchema = z.string().trim().url(SYSTEM_URL_ERROR_MESSAGE)

function parseHttpUrl(value: string): URL | undefined {
  try {
    const parsedUrl = new URL(value)
    return SYSTEM_URL_PROTOCOLS.includes(parsedUrl.protocol) ? parsedUrl : undefined
  } catch {
    return undefined
  }
}

export function validateSystemUrl(value: string | undefined): string {
  const parsedValue = systemUrlValueSchema.safeParse(value)

  if (!parsedValue.success) {
    throw new Error(SYSTEM_URL_ERROR_MESSAGE)
  }

  const parsedUrl = parseHttpUrl(parsedValue.data)

  if (!parsedUrl) {
    throw new Error(SYSTEM_URL_ERROR_MESSAGE)
  }

  return parsedValue.data
}

export function validateOptionalCanonicalUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) {
    return undefined
  }

  const parsedValue = canonicalUrlValueSchema.safeParse(value)

  if (!parsedValue.success) {
    throw new Error(SYSTEM_URL_ERROR_MESSAGE)
  }

  return parsedValue.data
}
