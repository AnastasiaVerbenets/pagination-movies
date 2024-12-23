const API_KEY = '04f715244097a0c4a22752c3612f0538';
const BASE_URL = `https://api.themoviedb.org/3`;

export default class MovieApiService {
    constructor() {
        this.page = 1;
    }

    fetchMovies() {
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;

        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(error);
            }

            return response.json();
        }).then(data => { return data.results });
    }

    incrementPage() {
        this.page += 1;
    }

    decrementPage() {
        if (this.page > 1) {
            this.page -= 1;
        }
    }
}