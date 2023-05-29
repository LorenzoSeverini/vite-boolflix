<!-- script -->
<script>

import {store} from '../data/store.js'
import axios from 'axios'

    export default {
        name: 'AppFooter',
        
        data () {
            return {
                store,
            }
        },
    }

</script>

<!-- template -->
<template>

    <div class="app-footer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="text-center">
                        <div>
                            <a href="https://www.themoviedb.org/" target="_blank">Data provided by TMDb 🎦</a>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<!-- style -->
<style lang="scss" scoped>

@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixing' as *;

.app-footer {
    background-color: $color-secondary;
    padding: 20px 0;
    color: $color-white;
    font-size: 14px;
    font-weight: 300;
    text-align: center;

    a {
        color: $color-primary;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}


</style>