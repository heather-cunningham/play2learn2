<template>
  <div id="anagram-hunt-start" class="site-page-div col-12 w-75 mx-auto">
    <WordLengthInput/>
    <PlayButton/>

    <div class="game-rules-list-div col-12 mx-auto mb-4">
      <ol class="game-rules-list">
        <li>Choose a word length between 5 to 8 characters long.</li>
        <li>Press "<strong>Play!</strong>"</li>
        <li>How many anagrams can you find in a minute?</li>
      </ol>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue';
import WordLengthInput from "@/components/WordLengthInput.vue";
import PlayButton from "@/components/PlayButton.vue";

export default defineComponent({
  name: "StartScreen",
  components: {
    PlayButton,
    WordLengthInput,
  },
});
</script>

<style src="../../public/anagram-styles/normalize.css"></style>
<style src="../../public/anagram-styles/styles.css"></style>
<style src="../../public/anagram-styles/games.css"></style>

