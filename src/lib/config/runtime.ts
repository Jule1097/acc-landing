import { validateOptionalCanonicalUrl, validateSystemUrl } from '@/schemas/config/systemUrl'

export function getSystemUrl(): string {
  return validateSystemUrl(globalThis.__ACC_SYSTEM_URL__)
}

export function getOptionalSystemUrl(): string | undefined {
  const value = globalThis.__ACC_SYSTEM_URL__

  return value ? validateSystemUrl(value) : undefined
}

export function getCanonicalUrl(): string | undefined {
  return validateOptionalCanonicalUrl(globalThis.__ACC_CANONICAL_URL__)
}
