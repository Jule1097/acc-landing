import { z } from 'zod'

import { PRODUCT_TEXT_MIN_LENGTH } from '@/lib/constants/product/product'

export const productSchema = z.object({
  name: z.string().min(PRODUCT_TEXT_MIN_LENGTH),
  category: z.string().min(PRODUCT_TEXT_MIN_LENGTH),
})
