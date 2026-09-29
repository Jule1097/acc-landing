<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import { BACK_TO_TOP_THRESHOLD, REDUCED_MOTION_MEDIA_QUERY } from '@/lib/constants/landing/landing'
import { landingContent } from '@/lib/content/landing/landing'

const isVisible = ref(false)

function updateVisibility() {
  isVisible.value = window.scrollY > BACK_TO_TOP_THRESHOLD
}

function scrollToTop() {
  const behavior = window.matchMedia(REDUCED_MOTION_MEDIA_QUERY).matches ? 'auto' : 'smooth'

  window.scrollTo({ top: 0, behavior })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateVisibility)
})
</script>

<template>
  <button
    v-if="isVisible"
    class="back-to-top"
    type="button"
    :aria-label="landingContent.accessibility.backToTopLabel"
    @click="scrollToTop"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />
    </svg>
  </button>
</template>
