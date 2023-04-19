<script >
import SearchBox from './components/SearchBox.vue';
import { store } from './store'
export default {
  components: {
    SearchBox
  },
  data() {
    return {
      store
    }
  }
}


</script>

<template>
  <header>
    <SearchBox @make-search=""></SearchBox>

  </header>
  <main></main>
</template>

<style scoped></style>
