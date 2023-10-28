<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <img
      :src="logo"
      alt="Peakville"
      class="block w-40 md:w-52"
      :draggable="false"
    />
    <div class="mt-9 text-xl font-bold md:text-2xl">
      Gli anni 70 sono arrivati su FiveM
    </div>
    <div class="mt-3 flex w-fit items-center gap-4">
      <a
        v-for="social in socials"
        :key="social.key"
        :href="social.url"
        :title="social.name"
        target="_blank"
        class="block text-p-black-100 no-underline transition-colors hover:text-p-cyan-500"
      >
        <i class="bi text-2xl" :class="`bi-${social.key}`" />
      </a>
    </div>
    <div class="mt-7 flex w-fit flex-col gap-4 md:flex-row">
      <a
        v-for="(linkButton, index) in linkButtons"
        :key="`home-link-button-${index}`"
        :href="linkButton.url"
        target="_blank"
        class="block w-fit"
      >
        <Button :variant="linkButton.variant">{{ linkButton.text }}</Button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "~/assets/img/logo.png"
import type { ThemeColors } from "~/types/theme"

type Social = {
  key: string
  name: string
  url: string
}

type LinkButton = {
  url: string
  text: string
  variant?: ThemeColors
}

const discordUrl = "https://discord.gg/peakville"

const socials: Social[] = [
  {
    key: "discord",
    name: "Discord",
    url: discordUrl,
  },
  {
    key: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/peakville1970/",
  },
  {
    key: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com/@Peakville",
  },
]

const linkButtons: LinkButton[] = [
  {
    url: discordUrl,
    text: "Inizia a giocare",
  },
  {
    url: "https://www.youtube.com/watch?v=BG698njo8u0",
    text: "Guarda il trailer",
    variant: "p-orange",
  },
]
</script>
