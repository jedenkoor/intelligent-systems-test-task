<template>
  <section class="ship">
    <BaseContainer>
      <h1 class="ship__title">{{ data.name }}</h1>
      <ul class="ship__info">
        <template v-for="(value, key) in data" :key="key">
          <li v-if="key !== 'name'" class="ship-info__item">
            <span>{{ key }}</span>
            <span>{{ value }}</span>
          </li>
        </template>
      </ul>
      <UiButton class="ship__back" link="/">Вернуться к базе</UiButton>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from "~/components/Base/Container/BaseContainer.vue";
import UiButton from "~/components/Ui/Button/UiButton.vue";

const route = useRoute()

const id = route.params.id
const { data, error } = await useFetch(`https://swapi.dev/api/starships/${id}`)

if (error.value && error.value.statusCode) {
  throw showError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}

useHead({
  title: data.value.name,
  meta: [
    { name: 'description', content: data.value.name },
    { property: 'og:title', content: data.value.name },
    { property: 'og:description', content: data.value.name }
  ]
})
</script>

<style scoped lang="scss">
@import "ship";
</style>