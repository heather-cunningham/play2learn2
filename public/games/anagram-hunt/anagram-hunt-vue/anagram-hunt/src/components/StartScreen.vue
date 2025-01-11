<template>
  <div id="anagram-hunt-start" class="site-page-div col-12 w-75 mx-auto">
    <WordLengthInput label="Word Length"/>
    <PlayButton/>
    <GameRules/>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import WordLengthInput from "@/components/WordLengthInput.vue";
import PlayButton from "@/components/PlayButton.vue";
import GameRules from "@/components/GameRules.vue";

export default defineComponent({
  name: "StartScreen",
  components: {
    WordLengthInput,
    PlayButton,
    GameRules,
  },
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

