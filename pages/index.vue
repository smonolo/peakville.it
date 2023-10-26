<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <img :src="logo" alt="Peakville" class="block w-60" :draggable="false" />
    <div class="mt-8 text-2xl font-bold">Feel the '70s vibes on FiveM</div>
    <div class="mt-3 flex w-fit items-center gap-4">
      <a
        v-for="social in socials"
        :key="social.key"
        :href="social.url"
        target="_blank"
        class="block text-p-black-100 no-underline transition-colors hover:text-p-cyan-500"
      >
        <i class="bi text-2xl" :class="`bi-${social.key}`" />
      </a>
    </div>
    <a
      :href="socials.find((s) => s.key === 'discord')?.url"
      target="_blank"
      class="mt-5 block w-fit"
    >
      <Button>Inizia a giocare</Button>
    </a>
  </div>
</template>

<script setup lang="ts">
import logo from "~/assets/img/logo.png"

type Social = {
  key: string
  name: string
  url: string
}

const socials: Social[] = [
  {
    key: "discord",
    name: "Discord",
    url: "https://discord.gg/peakville",
  },
  {
    key: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/peakville1970/",
  },
]
</script>
