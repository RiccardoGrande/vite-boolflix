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
    performSearch(searchType) {
      //console.log('Search characters');
      console.log(searchType);

      // perform an ajax call 
      if (searchType === 'movie') {
        this.store.fetchMovies(this.store.api_URL_Movie + this.store.searchText);

      } else {

        this.store.fetchMovies(this.store.api_URL_Series + this.store.searchText);

      }

      //console.log(url)
      // this.store.fetchMovies(url);


    },
    transformVote(vote_average) {
      // codice per arrotondare e dimezzare il valore
      return Math.round(vote_average / 2);
      //return del valore arrotondato e dimezzato

    }
  }
}


</script>

<template>
  <header>
    <SearchBox @make-search="performSearch"></SearchBox>

  </header>
  <main>
    <div class="container">

      <ul v-for="result in store.result">
        <img :src="'http://image.tmdb.org/t/p/w342/' + result.poster_path" alt="">
        <li>{{ result.title }}</li>
        <li>{{ result.original_title }}</li>
        <li><!-- <img :src="'https://flagsapi.com/' + result.original_language.toUpperCase() + '/flat/64.png'"> -->
        </li>
        <li>
          <span v-for="n in transformVote(result.vote_average)">&#11088; </span>
          <span v-for="n in 5 - transformVote(result.vote_average)">&#128970;</span>
        </li>
      </ul>

    </div>

  </main>
</template>

<style scoped></style>
