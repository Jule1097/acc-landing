<script setup lang="ts">
import LandingFooter from '@/components/landing/LandingFooter.vue'
import BackToTopButton from '@/components/landing/BackToTopButton.vue'
import FeatureSection from '@/components/landing/FeatureSection.vue'
import LandingHero from '@/components/landing/LandingHero.vue'
import LandingNavigation from '@/components/landing/LandingNavigation.vue'
import ResultsSection from '@/components/landing/ResultsSection.vue'
import { getOptionalSystemUrl } from '@/lib/config/runtime'

const props = defineProps<{ systemUrl?: string }>()
const systemUrl = props.systemUrl || getOptionalSystemUrl()
</script>

<template>
  <div class="landing-page">
    <LandingNavigation :system-url="systemUrl" />
    <main>
      <LandingHero />
      <FeatureSection />
      <ResultsSection />
    </main>
    <LandingFooter />
    <BackToTopButton />
  </div>
</template>
