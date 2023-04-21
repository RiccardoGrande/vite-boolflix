<script>
import { store } from '../store'
import SearchBox from './SearchBox.vue';
export default {
    name: 'AppHeader',
    components: {
        SearchBox
    },

    data() {
        return {
            store
        }
    }, methods: {
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


        }
    }
}
</script>


<template>
    <header class=" d-flex justify-content-around align-items-center p-3">
        <!-- ho cambiato il nome del titolo perchè voglio farlo vedere ai miei amici -->
        <div class="logo">Richflix</div>

        <SearchBox @make-search="performSearch"></SearchBox>

    </header>
</template>



<style lang="scss" scoped>
header {
    background-color: rgb(73, 73, 73);
}


.logo {
    color: red;
    font-weight: bold;
    font-size: 2rem;
}
</style>