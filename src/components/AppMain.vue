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

            // transform vote in stars 
            changeInStars(vote) {
                return Math.ceil(vote / 2);   
            },

            // release date only year
            releaseDate(date) {
                if (date) {
                    return date.slice(0, 4);
                } else {
                    return 'Unknown';
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
                            <p class="overview">overview: {{ movie.overview }}</p>
                            <!-- vote  -->
                            <div class="rating">
                                <!-- fa star  -->
                                <a v-for="star in changeInStars(movie.vote_average)" class="fas fa-star"></a>
                                <a v-for="star in 5 - changeInStars(movie.vote_average)" class="far fa-star"></a>  
                            </div>
                            <!-- original Lang   -->
                            <span>Original language: <p :class="FlagIcon(movie.original_language)"></p></span>
                            <!-- release date-->
                            <p>Release date: {{ releaseDate(movie.release_date) }}</p>
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
                                <h2>Title: {{ serie.name }}</h2>
                                <p>Original Title: {{ serie.original_name }}</p>
                            </div>
                            <!-- overview  -->
                            <p class="overview"> {{ serie.overview }}</p>
                            <!-- vote  -->
                            <div class="rating">
                                 <!-- fa star  -->
                                <a v-for="star in changeInStars(serie.vote_average)" class="fas fa-star"></a>
                                <a v-for="star in 5 - changeInStars(serie.vote_average)" class="far fa-star"></a>  
                            </div>
                            <!-- original Lang   -->
                            <span class="language">Original language: <p class="flag" :class="FlagIcon(serie.original_language)"></p></span>
                            <!-- release date-->
                            <p>Release date: {{ releaseDate(serie.release_date) }}</p>
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
    color: $color-warning;
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
                border-radius: $border-radius;
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
                    background-color: rgb(87, 87, 87);
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

                    .overview {
                        color: $color-secondary;
                        font-size: 1.5rem;
                        font-weight: $font-weight-bold;
                        margin: 0;
                        padding: 0;
                        text-align: center;
                        // word-break: break-all;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 5;
                        -webkit-box-orient: vertical;
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

                    .language {
                        color: $color-secondary;
                        font-size: 1.5rem;
                        font-weight: $font-weight-bold;
                        margin: 0;
                        padding: 0;
                        text-align: center;

                        .flag {
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