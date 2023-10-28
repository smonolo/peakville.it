<template>
  <button
    class="block w-fit rounded-xl border-2 border-p-beige-100 px-8 py-3 font-heading text-p-beige-500 outline outline-2 transition-colors"
    :class="variants[variant ?? 'p-blue']"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ThemeColors } from "~/types/theme"

type Props = {
  variant?: ThemeColors
}

defineProps<Props>()

const variants: Partial<Record<ThemeColors, string>> = {
  "p-yellow": "bg-p-yellow-500 outline-p-yellow-900 hover:bg-p-yellow-900",
  "p-orange": "bg-p-orange-500 outline-p-orange-900 hover:bg-p-orange-900",
  "p-blue": "bg-p-blue-500 outline-p-blue-900 hover:bg-p-blue-900",
}
</script>
