<script setup lang="ts">
import { landingContent } from '@/lib/content/landing/landing'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="page-container site-footer__inner">
      <div class="site-footer__content">
        <p class="site-footer__closing">{{ landingContent.footer.description }}</p>
        <p class="site-footer__copyright">© {{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>
