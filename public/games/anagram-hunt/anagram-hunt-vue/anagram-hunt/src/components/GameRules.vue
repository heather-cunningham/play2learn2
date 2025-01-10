<template>
  <div class="game-rules-list-div mx-auto mb-4 d-flex justify-content-center align-items-center flex-wrap">
    <ol class="game-rules-list">
      <li>Choose a word length between 5 to 8 characters long.</li>
      <li>Press "<strong>Play!</strong>"</li>
      <li>How many anagrams can you find in a minute?</li>
    </ol>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'GameRules'
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
