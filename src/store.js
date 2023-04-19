import { reactive } from 'vue';

export const state = reactive({
    searchText: "",
    loading: true,
    api_URL: {
        Mario: 'https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=Mario',
        Matrix: 'https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=Matrix',
        Avengers: 'https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&language=en-US&query=Avengers&page=1&include_adult=false'
    },
    title: null,
    original_title: null,
    lenguage: null,
    rating: null,
    FetchMovies(api_URL) {
        axios
            .get(api_URL)
            .then(response => {
                console.log(response.data);
                this.title = response.data.results.title;
                this.original_title = response.data.results.original_title;
                this.lenguage = response.data.results.original_language;
                this.rating = response.data.results.vote_average;
            })
            .catch(error => {
                console.error(error.message);
            });

    }
})