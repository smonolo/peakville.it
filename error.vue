<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <div class="font-heading text-2xl font-bold">Dove sei finito?</div>
    <div class="mt-2 text-lg">La pagina che stai cercando non esiste.</div>
    <NuxtLink to="/" class="mt-8 block w-fit">
      <Button>Torna alla home</Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "404 - Peakville" })
</script>
