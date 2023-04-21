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
  <header class=" d-flex justify-content-around align-items-center p-3">
    <div class="header_title">Boolflix</div>
    <SearchBox @make-search="performSearch"></SearchBox>

  </header>
  <main>
    <div class="container d-flex flex-wrap">
      <div class="card m-1" style="width: 18rem;" v-for="result in store.result">
        <img :src="'http://image.tmdb.org/t/p/w342/' + result.poster_path" class="card-img-top" alt="...">

        <div class="card-text">{{ result.title }}</div>
        <div class="card-text">{{ result.original_title }}</div>
        <div class="card-text"><img class="img-fluid"
            :src="'https://flagsapi.com/' + result.original_language.toUpperCase() + '/flat/64.png'"></div>
        <div class="card-text">
          <span v-for="n in transformVote(result.vote_average)">&#11088; </span>
          <span v-for="n in 5 - transformVote(result.vote_average)">&#128970;</span>
        </div>


      </div>

    </div>

  </main>
</template>

<style scoped>
header,
main {
  background-color: rgb(73, 73, 73);
}

.header_title {
  color: red;
  font-weight: bold;
  font-size: 2rem;
}

.card {
  background-color: black;
}

.card-img-top {
  display: block;
}

.card-img-top:hover {
  display: none;
}

.card-text {
  display: none;
}

.card-text:hover {
  display: block;
  color: white;
}
</style>
