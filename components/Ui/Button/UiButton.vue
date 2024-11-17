<template>
  <NuxtLink v-if="link" :to="link" class="btn">
    <slot />
  </NuxtLink>
  <button v-else class="btn" @click="emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

defineProps({
  link: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
@import "ui-button";
</style>