import { createApp } from 'vue'

import App from '@/App.vue'
import { getCanonicalUrl } from '@/lib/config/runtime'
import { CANONICAL_RELATION, PAGE_DESCRIPTION_SELECTOR } from '@/lib/constants/landing/landing'
import { landingContent } from '@/lib/content/landing/landing'
import '@/style.css'

function setPageMetadata() {
  document.title = landingContent.seo.title
  const descriptionMeta = document.querySelector(PAGE_DESCRIPTION_SELECTOR)

  if (!descriptionMeta) {
    return
  }

  descriptionMeta.setAttribute('content', landingContent.seo.description)
}

function addCanonicalLink(url: string | undefined) {
  if (!url) {
    return
  }

  const canonicalLink = document.createElement('link')
  canonicalLink.rel = CANONICAL_RELATION
  canonicalLink.href = url
  document.head.appendChild(canonicalLink)
}

setPageMetadata()
addCanonicalLink(getCanonicalUrl())
createApp(App).mount('#app')
