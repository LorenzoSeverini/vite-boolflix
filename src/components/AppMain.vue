<!-- script -->
<script>

import {store} from '../data/store.js'


    export default {
        name: 'AppMain',
        
        data () {
            return {
                store,
            }
        },

        methods : {
            
        },

        mounted() {
            //
        },

    }

</script>

<!-- template -->
<template>

    <div class="app-main">

        <!-- Movie -->
        <div class="movie">
            <h2>Movie</h2>
            <!-- print list of movies  -->
            <div v-for="movie in store.Movies" class="card">
                <!-- title  -->
                <div class="card-title">
                    <h2>{{ movie.title }}</h2>
                    <p>{{ movie.original_title }}</p>
                </div>
                <!-- overview  -->
                <p>{{ movie.overview }}</p>
                <!-- <img :src="`${store.ApiImg}${movie.poster_path}`" alt=""> -->
                <!-- voto  -->
                <p>{{ movie.vote_average }}</p>
                <!-- lingua originale  -->
                <p>{{ movie.original_language }}</p>
                <!-- data di uscita  -->
                <p>{{ movie.release_date }}</p> 
            </div>
        </div>

        <!-- Series Tv -->
        <div class="series-tv">
            <h2>Series Tv</h2>
             <!-- print list of series tv  -->
            <div v-for="serie in store.Series">
                <div class="card-title">
                    <h2>{{ serie.name }}</h2>
                    <p>{{ serie.original_name }}</p>
                </div>
                <p>{{ serie.overview }}</p>
                <!-- voto  -->
                <p>{{ serie.vote_average }}</p>
                <!-- lingua originale  -->
                <p>{{ serie.original_language }}</p>
                <!-- data di uscita  -->
                <p>{{ serie.release_date }}</p> 
            </div>
        </div>
        
    </div>

</template>

<!-- style -->
<style lang="scss" scoped>

@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixing' as *;

.app-main {
    padding: 1rem;
}

h1 {
    color: $color-secondary;
    font-size: 5rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;
}

.movie {
    h2 {
        color: $color-primary;
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .card {
        background-color: $color-secondary;
        border-radius: 1rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
        margin: 1rem 0;
        padding: 1rem;
        .card-title {
            h2 {
                color: $color-primary;
                font-size: 2rem;
                font-weight: 700;
                margin: 0;
                padding: 0;
                text-align: center;
            }
            p {
                color: $color-primary;
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0;
                padding: 0;
                text-align: center;
            }
        }
        p {
            color: $color-primary;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0;
            padding: 0;
            text-align: center;
        }
    }
}

.series-tv {
    h2 {
        color: $color-primary;
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .card {
        background-color: $color-secondary;
        border-radius: 1rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
        margin: 1rem 0;
        padding: 1rem;
        .card-title {
            h2 {
                color: $color-primary;
                font-size: 2rem;
                font-weight: 700;
                margin: 0;
                padding: 0;
                text-align: center;
            }
            p {
                color: $color-primary;
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0;
                padding: 0;
                text-align: center;
            }
        }
        p {
            color: $color-primary;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0;
            padding: 0;
            text-align: center;
        }
    }
}
</style>