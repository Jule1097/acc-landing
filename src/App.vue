<script setup lang="ts">
import { product } from '@/lib/product/product'
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-white">
    <section class="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24 lg:px-8">
      <div class="max-w-3xl">
        <p class="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          {{ product.category }}
        </p>
        <h1 class="text-5xl font-semibold tracking-tight sm:text-7xl">
          Tus números, más claros.
        </h1>
        <p class="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          {{ product.name }} te ayuda a entender y administrar tu negocio desde un solo lugar.
        </p>
      </div>
    </section>
  </main>
</template>
