import { reactive } from 'vue';
import axios from 'axios'
export const store = reactive({
    searchText: "",
    loading: true,
    api_URL_Images: "http://image.tmdb.org/t/p/w500/",
    api_URL_Movie: "https://api.themoviedb.org/3/search/movie?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=",
    api_URL_Series: "https://api.themoviedb.org/3/search/tv?api_key=fe03ad6bbae1c1b06a630abf6bce9ea9&query=",
    result: null,
    flag: [
        'it', 'fr', 'en', 'de', 'es'

    ],
    generateFlag(flag) {
        if (flag === 'en') {

            return 'https://flagsapi.com/GB/flat/64.png'

        } else if (flag === 'ja') {

            return 'https://flagsapi.com/JP/flat/64.png'

        }


        return 'https://flagsapi.com/' + flag.toUpperCase() + '/flat/64.png'

    },
    fetchMovies(url) {

        axios
            .get(url)
            .then(response => {
                console.log(response.data);
                this.result = response.data.results;

                this.loading = false
            })
            .catch(error => {
                console.error(error.message);
            });

    }
})