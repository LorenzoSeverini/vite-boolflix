<!-- script -->
<script>

import {store} from '../data/store.js'
import { flagsData } from '../data/flags-data'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import AppHeader from './AppHeader.vue'

    export default {
        name: 'AppMain',

        components: {
            AppHeader,
        },
        
        data () {
            return {
                store,
                flagsData,  
            }
        },

        methods : {

            //flag
            FlagIcon(language) {
                if (language && this.flagsData[language]) {
                    return 'fi fi-' + this.flagsData[language];
                } else {
                    return 'fi fi-warning'; 
                }
            },

            // image
            ImgPath(path) {
                if (path) {
                    return 'https://image.tmdb.org/t/p/w185/' + path;
                } else {
                    return 'https://via.placeholder.com/185x278?text=No+Image';

                }
            },
        },
    }
</script>

<!-- template -->
<template>

    <div class="app-main">

        <!-- Movie -->
        <h2 class="title-section">Movie</h2>
        <div class="movie">
            <!-- print list of movies  -->
            <div v-for="movie in store.Movies" class="card">
                <div class="card-img">
                    <!-- image  -->
                    <img :src="ImgPath(movie.poster_path)" alt="movie.title">
                    <div class="overlay">
                        <div class="text">
                            <!-- title  -->
                            <div class="card-title">
                                <h2>Title: {{ movie.title }}</h2>
                                <p>Original Title: {{ movie.original_title }}</p>
                            </div>
                            <!-- overview  -->
                            <p>overview: {{ movie.overview }}</p>
                            <!-- vote  -->
                            <div class="rating">
                                <p>{{ movie.vote_average }}</p>
                            </div>
                            <!-- original Lang   -->
                            <span>Original language: <p :class="FlagIcon(movie.original_language)"></p></span>
                            <!-- release date-->
                            <p>Release date: {{ movie.release_date }}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Series Tv -->
        <h2 class="title-section">Series Tv</h2>
        <div class="series-tv">
             <!-- print list of series tv  -->
            <div v-for="serie in store.SeriesTv" class="card">
                <div class="card-img">
                    <!-- image  -->
                    <img :src="ImgPath(serie.poster_path)" alt="movie.title">
                    <div class="overlay">
                        <div class="text">
                            <!-- title  -->
                            <div class="card-title">
                                <h2>Title: {{ serie.title }}</h2>
                                <p>Original Title: {{ serie.original_title }}</p>
                            </div>
                            <!-- overview  -->
                            <p>overview: {{ serie.overview }}</p>
                            <!-- vote  -->
                            <div class="rating">
                                <p>{{ serie.vote_average }}</p>
                            </div>
                            <!-- original Lang   -->
                            <span>Original language: <p :class="FlagIcon(serie.original_language)"></p></span>
                            <!-- release date-->
                            <p>Release date: {{ serie.release_date }}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

</template>

<!-- style -->
<style lang="scss" >

@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixing' as *;


.app-main {
    padding: 1rem;
}

.title-section {
    color: $color-secondary;
    font-size: 3rem;
    font-weight: $font-weight-bold;
    text-align: start;
    cursor: pointer;
    padding-left: 1rem;
}

h1 {
    color: $color-secondary;
    font-size: 5rem;
    font-weight: $font-weight-bold;
    margin: 0;
    padding: 0;
    text-align: center;
}

.movie, .series-tv {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 6.25rem;

}

.movie, .series-tv {
    h2 {
        color: $color-primary;
        font-size: 3rem;
        font-weight: $font-weight-bold;
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .card {
        width: calc(100% /5 - 2rem);
        position: relative;
        
        .card-img {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1rem 0; 
            height: 100%;
            
            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1rem;
                box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
            }

            .overlay {
                position: absolute;
                top: -10;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: all 0.5s ease-in-out;
                border-radius: $border-radius;
                cursor: pointer;

                &:hover {
                    opacity: 1;
                    background-color: rgba(207, 30, 30,);
                }

                .text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;

                    .card-title {
                        h2 {
                            color: $color-secondary;
                            font-size: 2rem;
                            font-weight: $font-weight-bold;
                            margin: 0;
                            padding: 0;
                            text-align: center;
                        }
                        p {
                            color: $color-secondary;
                            font-size: 1.5rem;
                            font-weight: $font-weight-bold;
                            margin: 0;
                            padding: 0;
                            text-align: center;
                        }
                    }

                    p {
                        color: $color-secondary;
                        font-size: 1.5rem;
                        font-weight: $font-weight-bold;
                        margin: 0;
                        padding: 0;
                        text-align: center;
                    }

                    .rating {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 0.5rem;
                        font-size: 1.5rem;
                        font-weight: $font-weight-bold;
                        color: $color-secondary;
                        text-align: center;
                    }

                    span {
                        color: $color-secondary;
                        font-size: 1.5rem;
                        font-weight: $font-weight-bold;
                        margin: 0;
                        padding: 0;
                        text-align: center;
                    }

                    p {
                        color: $color-secondary;
                        font-size: 1.5rem;
                        font-weight: $font-weight-bold;
                        margin: 0;
                        padding: 0;
                        text-align: center;

                        &.vote {
                            color: $color-secondary;
                            font-size: 1.5rem;
                            font-weight: $font-weight-bold;
                            margin: 0;
                            padding: 0;
                            text-align: center;
                        }
                    }
                }         
            }
        }
    }
}

</style>