<template id="app">
  <MainContainer />
</template>

<script>
import MainContainer from "@/components/MainContainer.vue";

export default {
  name: 'App',
  components: {
    MainContainer,
  },
}
</script>

<style>
/* Global Styles */
* {
  box-sizing: border-box;
}

#app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
</style>
