<script>
import { store } from '../store'
export default {
    name: 'AppMain',

    data() {
        return {
            store
        }
    },
    methods: {

        transformVote(vote_average) {
            // codice per arrotondare e dimezzare il valore
            return Math.round(vote_average / 2);
            //return del valore arrotondato e dimezzato

        }
    }
}
</script>


<template>
    <main>
        <div class="container d-flex flex-wrap">
            <div class="card m-1" style="width: 18rem;" v-for="result in store.result">
                <img :src="'http://image.tmdb.org/t/p/w342/' + result.poster_path" class="card-img-top" alt="...">

                <div class="card-text">Titolo:{{ result.title }}</div>
                <div class="card-text">Titolo originale:{{ result.original_title }}</div>
                <div class="card-text">lingua:<img class="img-fluid" :src="store.generateFlag(result.original_language)">
                </div>
                <div class="card-text">Rate:
                    <span v-for="n in transformVote(result.vote_average)">&#11088; </span>
                    <span v-for="n in 5 - transformVote(result.vote_average)">&#128970;</span>
                </div>


            </div>

        </div>

    </main>
</template>



<style lang="scss" scoped>
main {
    background-color: rgb(73, 73, 73);
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

.card:hover .card-text {
    display: block;
    padding: 1rem;
    color: white;
}
</style>