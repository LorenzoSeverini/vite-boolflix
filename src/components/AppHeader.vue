<!-- Script -->
<script>
import  {store} from '../data/store.js';
import axios from 'axios';
// provider vue 



  export default  {
    name: 'AppHeader',

    data() {
      return {
        store,
        title : 'Netflix',      
        searchInput : '',  
      }
    },

    methods : {

      search() {
        console.log('search', this.searchInput);

        // *********
        // Movies 
        axios.get(`${this.store.ApiUrl}movie?api_key=${this.store.ApiKey}&query=${this.searchInput}`)
        .then((response) => {
          const result = response.data.results;
          this.store.Movies = result;
          console.log('Movies result :', result);
        })
        .catch((error) => {
          console.log('Sorry FBI open up', error);
        })

        // *********
        // Series Tv
        axios.get(`${this.store.ApiUrl}tv?api_key=${this.store.ApiKey}&query=${this.searchInput}`)
        .then((response) => {
          const result = response.data.results;
          this.store.SeriesTv = result;
          console.log('Series Tv result :', result);
        })
        .catch((error) => {
          console.log('Sorry FBI open up', error);
        })
      },
    }
  }

</script>

<!-- Template -->
<template>

  <h1>{{ title }}</h1>

  <div class="search-box">
    <input v-model="searchInput" class="search-bar" type="text" placeholder="Search movie and series tv" @keyup.enter="search">
    <button class="btn-search" @click="search">Search</button>
  </div>

</template>

<!-- Style -->
<style lang="scss" scoped>

@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixing' as *;

h1 {
  color: $color-primary;
  font-size: 5rem;
  font-weight: $font-weight-bold;
  text-align: start;
  cursor: pointer;
  padding-left: 1rem;
}

.search-box {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 2rem 0;
  gap: 1rem;
  padding-left: 1rem;

  .search-bar {
    width: 30rem;
    padding: 0.5rem;
    border: 1px solid $color-primary;
    border-radius: 5px;
    outline: none;
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
    color: $color-primary;
    text-align: center;
    padding-left: 1rem;

    &:focus {
      border: 1px solid $color-secondary;
    }
  }

  .btn-search {
    padding: 0.5rem 1rem;
    border: 1px solid $color-primary;
    border-radius: 5px;
    outline: none;
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
    color: $color-primary;
    background-color: $color-secondary;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: $color-primary;
      color: $color-secondary;
    }
  }
}

// max 768px 
@media screen and (max-width: 48rem) {
  h1 {
    font-size: 3rem;
  }

  .search-box {
    .search-bar {
      width: 20rem;
    }
  }
}

</style>
