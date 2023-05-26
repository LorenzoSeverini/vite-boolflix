<!-- Script -->
<script>
  // import *********
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import AppFooter from './components/AppFooter.vue'

  import {store} from './data/store.js'
  import axios from 'axios' 

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
        store,
      }
    },

    created() {
      console.log('App created', this.store.SearchInput); 
    },

    methods : {
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

    <AppHeader />
    
  </header>

  <main>

    <AppMain />
    
  </main>
  
  <footer>
    
    <AppFooter />
  
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
  // background-color: $color-primary;
  padding: 1rem;
}

footer {
  background-color: $color-secondary;
  padding: 1rem;
}

</style>
