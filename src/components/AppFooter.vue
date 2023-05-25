<!-- script -->
<script>

    export default {
        name: 'AppFooter',
        
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
    <h1>{{ msg }}</h1>
</template>

<!-- style -->
<style lang="scss" scoped>

@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixing' as *;

h1 {
    color: $color-tertiary;
    font-size: 5rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;
}

</style>