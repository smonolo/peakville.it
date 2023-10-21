<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  title: "Peakville",
  meta: [
    {
      charset: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "keywords",
      content: "Peakville, FiveM",
    },
    {
      name: "author",
      content: "Peakville",
    },
    {
      name: "description",
      content: "70s vibes on FiveM",
    },
  ],
})

useSeoMeta({
  title: "Peakville - '70s vibes on FiveM",
  description: "Feel the '70s vibes on FiveM",
  ogTitle: "Peakville - '70s vibes on FiveM",
  ogDescription: "Feel the '70s vibes on FiveM",
  ogUrl: "https://www.peakville.it",
  ogSiteName: "Peakville",
})
</script>
