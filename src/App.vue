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
  <main>
    <div class="container">
      <ul v-for="result in store.results">
        <li>{{ result.title }}</li>
        <li>{{ result.original_title }}</li>
        <li><img src="https://flagsapi.com/{{ result.original_language.toUpperCase() }}/flat/64.png"></li>
        <li>{{ result.vote_average }}</li>
      </ul>

    </div>

  </main>
</template>

<style scoped></style>
