<!-- Script -->
<script>

  export default  {
    name: 'AppHeader',
    
    props: {
      msg: String
    },

    data() {
      return {
        // 
      }
    },
  }

</script>

<!-- Template -->
<template>
  <h1>{{ msg }}</h1>
</template>

<!-- Style -->
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
