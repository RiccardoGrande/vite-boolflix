import { reactive } from 'vue';

export const store = reactive({
    searchText: "",
    loading: true,
    /*api_URL: {
        Mario: 'https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=Mario',
        Matrix: 'https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=Matrix',
        Avengers: 'https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&language=en-US&query=Avengers&page=1&include_adult=false'
    },*/
    api_URL: "https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=",
    title: null,
    original_title: null,
    lenguage: null,
    rating: null,
    fetchMovies(url) {


        /**
         * url -> https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=
         * searachText -> Matrix
         */

        url = url + this.searchText;

        /**
         * https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=Matrix
         */
        axios
            .get(url)
            .then(response => {
                console.log(response.data);
                this.url = response.data.results.response;

                this.loading = false
            })
            .catch(error => {
                console.error(error.message);
            });

    }
})