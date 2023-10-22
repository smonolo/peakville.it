<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <img :src="logo" alt="Peakville" class="block w-60" :draggable="false" />
    <div class="mt-8 text-2xl font-bold">Feel the '70s vibes on FiveM</div>
    <div class="mt-3 flex w-fit items-center gap-4">
      <a
        v-for="social in socials"
        :key="social.icon"
        :href="social.url"
        target="_blank"
        class="block text-p-black-100 no-underline transition-colors hover:text-p-cyan-500"
      >
        <i class="bi text-2xl" :class="`bi-${social.icon}`" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "~/assets/img/logo.png"

type Social = {
  icon: string
  name: string
  url: string
}

const socials: Social[] = [
  {
    icon: "discord",
    name: "Discord",
    url: "https://discord.gg/peakville",
  },
  {
    icon: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/peakville1970/",
  },
]
</script>
