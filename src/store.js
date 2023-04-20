import { reactive } from 'vue';
import axios from 'axios'
export const store = reactive({
    searchText: "",
    loading: true,
    api_URL: "https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=",

    fetchMovies(url) {

        axios
            .get(url)
            .then(response => {
                console.log(response.data);
                this.query = response.data.results;

                this.loading = false
            })
            .catch(error => {
                console.error(error.message);
            });

    }
})