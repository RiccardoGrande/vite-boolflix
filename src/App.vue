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
      <div class="card" style="width: 18rem;" v-for="result in store.result">
        <img :src="'http://image.tmdb.org/t/p/w342/' + result.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
          <div class="card-text">{{ result.title }}</div>
          <div class="card-text">{{ result.original_title }}</div>
          <div class="card-text"><img
              :src="'https://flagsapi.com/' + result.original_language.toUpperCase() + '/flat/64.png'"></div>
          <div class="card-text">
            <span v-for="n in transformVote(result.vote_average)">&#11088; </span>
            <span v-for="n in 5 - transformVote(result.vote_average)">&#128970;</span>
          </div>

        </div>
      </div>

    </div>

  </main>
</template>

<style scoped></style>
