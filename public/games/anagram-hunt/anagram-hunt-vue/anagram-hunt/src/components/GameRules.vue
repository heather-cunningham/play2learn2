<template>
  <div class="game-rules-list-div mx-auto my-2 d-flex justify-content-center align-items-center
   flex-wrap">
    <ol class="game-rules-list">
      <li>Choose a word length between 5 and 8 characters long.</li>
      <li>Press "<strong>Play!</strong>"</li>
      <li>How many anagrams can you find in a minute?</li>
    </ol>
    <cite class="mb-2">
      <span class="fw-bold">Note:</span>
      All letters of the word must be used in the anagram to count as a correct answer.
    </cite>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'GameRules'
});
</script>

<style scoped>
.game-rules-list-div {
  width: 50%;
  height: auto;
}

/* Custom styles for Bootstrap medium screens (768px wide) and smaller */
@media (max-width: 768px) {
  .game-rules-list-div {
    width: 75%;
    height: auto;
  }
}
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
