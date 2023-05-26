<!-- script -->
<script>

import {store} from '../data/store.js'
import axios from 'axios'

    export default {
        name: 'AppFooter',
        
        data () {
            return {
                store,
                Footer : 'Footerrrrr',
            }
        },
    }

</script>

<!-- template -->
<template>
    <h1>{{ Footer }}</h1>
</template>

<!-- style -->
<style lang="scss" scoped>

@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixing' as *;

h1 {
    color: $color-primary;
    font-size: 5rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;
}

</style>