<template>
  <section class="catalog">
    <BaseContainer>
      <h1 class="catalog__title">База космических кораблей</h1>
      <form action="#" class="catalog__search" @submit.prevent="handleSearch">
        <input
          v-model="currentSearch"
          type="search"
          name="search"
          class="catalog-search__input"
          placeholder="Поиск по названию корабля"
        >
        <UiButton class="catalog-search__btn">Поиск</UiButton>
      </form>
      <div v-if="!response.results.length" class="catalog__empty">По вашему запросу ничего не найдено</div>
      <ul v-else class="catalog__list">
        <li v-for="(item, index) in response.results" :key="index" class="catalog__item">
          <NuxtLink class="catalog__link" :to="`/${getId(item.url)}`">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="catalog__pagination">
        <UiButton
          class="catalog-pagination__btn"
          @click="changePage(--currentPage)"
          :disabled="!response.previous"
        >
          Назад
        </UiButton>
        <UiButton
          class="catalog-pagination__btn"
          @click="changePage(++currentPage)"
          :disabled="!response.next"
        >
          Далее
        </UiButton>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from "~/components/Base/Container/BaseContainer.vue";
import UiButton from "~/components/Ui/Button/UiButton.vue";

const route = useRoute()
const currentSearch = ref(route.query.search || '')
const currentPage = ref(route.query.page || 1)

const getStarships = async () => {
  try {
    const searchQueryParam = currentSearch.value ? `?search=${currentSearch.value}` : ''
    const pageQueryParam = currentPage.value > 1 ? `?page=${currentPage.value}` : ''
    response.value = await $fetch(`https://swapi.dev/api/starships/${pageQueryParam}${searchQueryParam}`)
  } catch (error) {
    if (error.statusCode === 404) {
      throw showError({
        statusCode: 404,
        statusMessage: 'Page not found'
      })
    } else {
      console.log(error)
    }
  }
}

const response = ref()
await getStarships()

const changePage = (newPage) => {
  currentSearch.value = ''
  currentPage.value = newPage
  changeQueryParams()
  getStarships()
}

const handleSearch = () => {
  currentPage.value = 1
  changeQueryParams()
  getStarships()
}

const router = useRouter();
const changeQueryParams = () => {
  const search = currentSearch.value ? { search: currentSearch.value } : {};
  const page = currentPage.value > 1 ? { page: currentPage.value } : {};
  router.push({
    path: route.path,
    query: {
      ...page,
      ...search
    }
  })
}

const getId = (url) => {
  const splitedUrl = url.split('/')
  return splitedUrl[splitedUrl.length - 2]
}

useHead({
  title: 'Галактическая база данных',
  meta: [
    { name: 'description', content: 'Галактическая база данных' },
    { property: 'og:title', content: 'Галактическая база данных' },
    { property: 'og:description', content: 'Галактическая база данных' }
  ]
})
</script>

<style lang="scss" scoped>
@import "index";
</style>