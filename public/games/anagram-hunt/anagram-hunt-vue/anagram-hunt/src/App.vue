<template id="app">
  <div class="wrapper d-flex flex-column min-vh-100">
    <HeaderNavBar />
    <PageHeading />
    <MainContainer />
    <FooterBar />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import MainContainer from "@/components/MainContainer.vue";
import HeaderNavBar from "@/components/HeaderNavBar.vue";
import PageHeading from "@/components/PageHeading.vue";
import FooterBar from "@/components/FooterBar.vue";

export default defineComponent({
  name: 'App',
  components: {
    HeaderNavBar,
    PageHeading,
    MainContainer,
    FooterBar,
  },
});
</script>

<style>
/* Global Styles */
* {
  box-sizing: border-box;
}

html, body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
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
<style src="../public/anagram-styles/anagram-normalize.css"></style>
<style src="../public/anagram-styles/anagram-style.css"></style>
<style src="../public/anagram-styles/anagram-game.css"></style>

