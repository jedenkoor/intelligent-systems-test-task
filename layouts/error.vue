<template>
  <BaseWrapper>
    <BaseContent class="error">
      <BaseContainer class="error__container">
        <div class="error__title">
          {{ error.message.split(':')[0] }}
        </div>
        <UiButton class="error__btn" link="/">На главную</UiButton>
      </BaseContainer>
    </BaseContent>
  </BaseWrapper>
</template>

<script setup lang="ts">
import BaseWrapper from '~/components/Base/Wrapper/BaseWrapper.vue'
import BaseContent from '~/components/Base/Content/BaseContent.vue'
import BaseContainer from '~/components/Base/Container/BaseContainer.vue'
import UiButton from "~/components/Ui/Button/UiButton.vue";

const props = defineProps({
  error: {
    type: Object,
    default: () => {}
  }
})

useHead({
  title: props.error.message.split(':')[0]
})
</script>

<style scoped lang="scss">
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__title {
    margin-bottom: 2rem;
    font-size: 3rem;
    text-align: center;
  }
}
</style>