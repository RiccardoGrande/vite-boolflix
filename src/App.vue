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
  },
  methods: {
    performSearch() {
      //console.log('Search characters');
      console.log(this.store.searchText);
      // perform an ajax call 
      const url = this.store.api_URL + this.store.searchText
      //console.log(url)
      this.store.fetchMovies(url)
    }
  }
}


</script>

<template>
  <header>
    <SearchBox @make-search="performSearch()"></SearchBox>

  </header>
  <main></main>
</template>

<style scoped></style>
