import { PRODUCT_CATEGORY, PRODUCT_NAME } from '@/lib/constants/product/product'
import { productSchema } from '@/schemas/product/product'

export const product = productSchema.parse({
  name: PRODUCT_NAME,
  category: PRODUCT_CATEGORY,
})
