<!-- Script -->
<script>
  // import *********
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import AppFooter from './components/AppFooter.vue'

  import {store} from './data/store.js'
 

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
  background-color: $color-black;
  padding: 1rem;
  height: calc(100vh - 9.1875rem - 4.875rem - 80px);
  overflow-y: auto;
  overflow-x: hidden;
}

footer {
  background-color: $color-secondary;
  padding: 1rem;
}

</style>
