<template>
  <div class="wrapper d-flex flex-column min-vh-100">
    <!-- Page Heading/Game Heading -->
    <div class="row">
      <div class="col-12">
        <h2 class="page-name mx-auto my-4 fw-bold text-center">Anagram Hunt</h2>
      </div>
    </div>

    <main class="flex-grow-1">
      <StartScreen />
    </main>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import StartScreen from "@/components/StartScreen.vue";

export default defineComponent({
  name: "MainContainer",
  components: {
    StartScreen,
  },
});
</script>

<style src="../../../../../../styles/normalize.css"></style>
<style src="../../../../../../styles/styles.css"></style>
<style src="../../../../../../styles/games.css"></style>

<!--
<style src="../../../anagram-hunt/public/anagram-styles/anagram-normalize.css"></style>
<style src="../../../anagram-hunt/public/anagram-styles/anagram-global-style.css"></style>
<style src="../../../anagram-hunt/public/anagram-styles/anagram-game.css"></style>-->
