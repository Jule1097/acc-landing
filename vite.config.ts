import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'

import {
  CANONICAL_URL_ENV_NAME,
  CANONICAL_URL_RUNTIME_KEY,
  PRODUCTION_MODE,
  SYSTEM_URL_ENV_NAME,
  SYSTEM_URL_RUNTIME_KEY,
} from './src/lib/constants/config/config.ts'
import { validateProductionSystemUrl } from './src/lib/config/buildEnvironment.ts'
import { validateOptionalCanonicalUrl, validateSystemUrl } from './src/schemas/config/systemUrl.ts'

function resolveSystemUrl(mode: string, value: string | undefined): string {
  if (mode === PRODUCTION_MODE) {
    return validateProductionSystemUrl(value)
  }

  return value ? validateSystemUrl(value) : ''
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const systemUrl = resolveSystemUrl(mode, env[SYSTEM_URL_ENV_NAME])
  const canonicalUrl = validateOptionalCanonicalUrl(env[CANONICAL_URL_ENV_NAME])

  return {
    plugins: [vue(), tailwindcss()],
    define: {
      [SYSTEM_URL_RUNTIME_KEY]: JSON.stringify(systemUrl),
      [CANONICAL_URL_RUNTIME_KEY]: JSON.stringify(canonicalUrl ?? ''),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
