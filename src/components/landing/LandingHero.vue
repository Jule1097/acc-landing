<script setup lang="ts">
import { HOME_SECTION_ID } from '@/lib/constants/landing/landing'
import { landingContent } from '@/lib/content/landing/landing'

const content = landingContent.hero
</script>

<template>
  <section
    :id="HOME_SECTION_ID"
    class="hero-section"
    aria-labelledby="hero-title"
  >
    <div class="hero-section__inner page-container">
      <div class="hero-section__content">
        <h1 id="hero-title">{{ content.heading }}</h1>
      </div>

      <div class="hero-visual" aria-label="Alternativas visuales para el flujo de procesamiento">
        <div class="workflow-comparison">
          <section
            class="workflow-option workflow-option--route"
            aria-label="Flujo de documentos"
          >
            <div class="workflow-option__heading">
              <p>{{ content.workflow.description }}</p>
            </div>
            <div class="route-board">
              <ol class="route-board__track">
                <li v-for="(step, index) in landingContent.process.items" :key="step.label" class="route-node">
                  <span class="route-node__marker">{{ String(index + 1).padStart(2, '0') }}</span>
                  <h3>{{ step.label }}</h3>
                  <p>{{ step.description }}</p>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
