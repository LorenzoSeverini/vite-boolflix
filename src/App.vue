<!-- Script -->
<script>
  // import *********
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import AppFooter from './components/AppFooter.vue'

  // export *********
  export default  {
    name: 'App',
    components: {
      AppHeader,
      AppMain,
      AppFooter
    },

    data() {
      return {
        // 
      }
    },

    methods: {
      // 
    },

    mounted() {
      // 
    },

  }

</script>

<!-- template -->
<template>
  <header>
    <AppHeader msg="Header" />
  </header>

  <main>
    <AppMain msg="Main" />
  </main>
  
  <footer>
    <AppFooter msg="Footer" />
  </footer>

</template>

<!-- style -->
<style lang="scss" scoped>

@use './styles/partials/_variables' as *;
@use './styles/partials/_mixing' as *;

header {
  background-color: $color-secondary;
  padding: 1rem;
}

main {
  background-color: $color-primary;
  padding: 1rem;
}

footer {
  background-color: $color-secondary;
  padding: 1rem;
}

</style>
