<template>
  <BaseWrapper>
    <BaseContent>
      <slot />
    </BaseContent>
  </BaseWrapper>
</template>

<script setup lang="ts">
import BaseWrapper from '~/components/Base/Wrapper/BaseWrapper.vue'
import BaseContent from '~/components/Base/Content/BaseContent.vue'
</script>
