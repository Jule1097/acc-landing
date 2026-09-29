import {
  SYSTEM_URL_ERROR_MESSAGE,
} from '../constants/config/config.ts'
import { validateSystemUrl } from '../../schemas/config/systemUrl.ts'

export function validateProductionSystemUrl(value: string | undefined): string {
  try {
    return validateSystemUrl(value)
  } catch {
    throw new Error(SYSTEM_URL_ERROR_MESSAGE)
  }
}
