<script setup lang="ts">
import { FEATURES_SECTION_ID } from '@/lib/constants/landing/landing'
import { landingContent } from '@/lib/content/landing/landing'

const content = landingContent.features
</script>

<template>
  <section
    :id="FEATURES_SECTION_ID"
    class="content-section feature-section"
    aria-labelledby="features-title"
  >
    <div class="page-container">
      <div class="section-heading">
        <h2 id="features-title">{{ content.heading }}</h2>
        <p>{{ content.supportingText }}</p>
      </div>

      <div class="feature-showcase">
        <div class="feature-grid">
          <article
            v-for="(feature, index) in content.items"
            :key="feature.title"
            class="feature-card"
            :class="`feature-card--${feature.tone}`"
          >
            <div class="feature-card__topline">
              <span class="feature-card__index">{{ String(index + 1).padStart(2, '0') }}</span>
              <div class="feature-card__icon" aria-hidden="true">
                <svg v-if="feature.icon === 'document'" viewBox="0 0 24 24">
                  <path d="M6 3.75h8.25L18 7.5v12.75H6zM14.25 3.75V7.5H18M8.5 11h7M8.5 14h5" />
                </svg>
                <svg v-else-if="feature.icon === 'validation'" viewBox="0 0 24 24">
                  <path d="M6 5.5h12v13H6zM9 3.5v4M15 3.5v4M6 9h12M9 14l1.75 1.75L15 11.5" />
                </svg>
                <svg v-else viewBox="0 0 24 24">
                  <path d="M12 14V4M8.5 7.5 12 4l3.5 3.5M5 13v6h14v-6" />
                </svg>
              </div>
            </div>
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.description }}</p>
            <span class="feature-card__line" aria-hidden="true"></span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
