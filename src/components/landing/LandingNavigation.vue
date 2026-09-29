<script setup lang="ts">
import { computed, ref } from 'vue'

import { landingContent } from '@/lib/content/landing/landing'

defineProps<{ systemUrl?: string }>()

const isMenuOpen = ref(false)
const menuButtonLabel = computed(() => (
  isMenuOpen.value
    ? landingContent.accessibility.closeMenuLabel
    : landingContent.accessibility.openMenuLabel
))

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner page-container">
      <a class="site-brand" href="#inicio" :aria-label="`${landingContent.brand.name}, ir al inicio`">
        <span class="site-brand__name">{{ landingContent.brand.name }}</span>
        <span class="site-brand__descriptor">{{ landingContent.brand.descriptor }}</span>
      </a>
      <nav class="site-nav" :aria-label="landingContent.accessibility.navigationLabel">
        <button
          class="site-nav__toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="primary-navigation"
          :aria-label="menuButtonLabel"
          @click="toggleMenu"
        >
          <span class="site-nav__toggle-line"></span>
          <span class="site-nav__toggle-line"></span>
          <span class="site-nav__toggle-line"></span>
        </button>
        <div
          id="primary-navigation"
          class="site-nav__list"
          :class="{ 'site-nav__list--open': isMenuOpen }"
        >
          <a
            v-for="navigationItem in landingContent.navigation"
            :key="navigationItem.href"
            class="site-nav__link"
            :href="navigationItem.href"
            @click="closeMenu"
          >
            {{ navigationItem.label }}
          </a>
          <a
            v-if="systemUrl"
            class="site-nav__cta site-nav__cta--mobile"
            :href="systemUrl"
            :aria-label="landingContent.accessibility.ctaLabel"
            @click="closeMenu"
          >
            {{ landingContent.hero.ctaLabel }}
          </a>
          <span
            v-else
            class="site-nav__cta site-nav__cta--mobile site-nav__cta--disabled"
            aria-disabled="true"
          >
            {{ landingContent.hero.ctaLabel }}
          </span>
        </div>
      </nav>
      <div class="site-header__actions">
        <a
          v-if="systemUrl"
          class="site-nav__cta"
          :href="systemUrl"
          :aria-label="landingContent.accessibility.ctaLabel"
        >
          {{ landingContent.hero.ctaLabel }}
        </a>
        <span
          v-else
          class="site-nav__cta site-nav__cta--disabled"
          aria-disabled="true"
        >
          {{ landingContent.hero.ctaLabel }}
        </span>
      </div>
    </div>
  </header>
</template>
