import { reactive } from 'vue';
import axios from 'axios'
export const store = reactive({
    searchText: "",
    loading: true,
    api_URL: "https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=",
    result: null,
    flag: {
        en: 'https://flagsapi.com/GB/flat/64.png',
        de: 'https://flagsapi.com/DE/flat/64.png',
        ja: 'https://flagsapi.com/JP/flat/64.png',
        it: 'https://flagsapi.com/IT/flat/64.png',
        es: 'https://flagsapi.com/ES/flat/64.png',
        fr: 'https://flagsapi.com/FR/flat/64.png',

    },

    fetchMovies(url) {

        axios
            .get(url)
            .then(response => {
                console.log(response.data);
                this.results = response.data.results;

                this.loading = false
            })
            .catch(error => {
                console.error(error.message);
            });

    }
})