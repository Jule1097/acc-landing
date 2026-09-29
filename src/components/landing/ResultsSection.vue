<script setup lang="ts">
import { RESULTS_SECTION_ID } from '@/lib/constants/landing/landing'
import { landingContent } from '@/lib/content/landing/landing'

const content = landingContent.results
</script>

<template>
  <section
    :id="RESULTS_SECTION_ID"
    class="content-section results-section"
    aria-labelledby="results-title"
  >
    <div class="page-container results-section__inner">
      <div class="section-heading section-heading--results">
        <h2 id="results-title">{{ content.heading }}</h2>
        <p>{{ content.supportingText }}</p>
      </div>
      <ul class="results-grid">
        <li v-for="result in content.items" :key="result.title" class="result-item">
          <span class="result-item__mark" aria-hidden="true"></span>
          <div>
            <h3>{{ result.title }}</h3>
            <p>{{ result.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
