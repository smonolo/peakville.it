<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <img :src="logo" alt="Peakville" class="w-64 block" :draggable="false" />
  </div>
</template>

<script setup lang="ts">
import logo from "~/assets/img/logo.png"
</script>
