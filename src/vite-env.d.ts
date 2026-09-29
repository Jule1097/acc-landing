interface ImportMetaEnv {
  readonly VITE_SYSTEM_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  var __ACC_SYSTEM_URL__: string | undefined
  var __ACC_CANONICAL_URL__: string | undefined
}

export {}
