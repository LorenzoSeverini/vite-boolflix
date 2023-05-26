import { reactive } from "vue";

export const store = reactive({
    ApiKey : '823176dcb211bbda8a3dead13880afe3',
    ApiUrl: 'https://api.themoviedb.org/3/search/',
    ApiImgUrl: 'https://image.tmdb.org/t/p/w185/',
    Movies: [],
    SeriesTv : [],
    SearchInput: '',
});