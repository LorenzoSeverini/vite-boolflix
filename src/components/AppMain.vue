<!-- script -->
<script>

    export default {
        name: 'AppMain',
        
        props: {
            msg: String
        },

        data () {
            return {
                //
            }
        },
    }

</script>

<!-- template -->
<template>
    <div class="app-main">
        <h1>{{ msg }}</h1>
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

</style>