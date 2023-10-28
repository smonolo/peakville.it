<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import mixpanel from "mixpanel-browser"

useHead({
  title: "Peakville - '70s vibes on FiveM",
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

mixpanel.init("31d0c9ccc269c90a61c4cdffeb6e4861", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
})
</script>
