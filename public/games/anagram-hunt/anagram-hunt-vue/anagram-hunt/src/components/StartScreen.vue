<template>
  <h2 class="page-name text-center">Anagram Hunt</h2>

  <WordLengthInput />

  <div class="game-rules-list-div">
    <ol class="game-rules-list">
      <li>Choose a word length between 5 to 8 characters long.</li>
      <li>Press "<strong>Play!</strong>"</li>
      <li>How many anagrams can you find in a minute?</li>
    </ol>
  </div>

  <PlayButton />
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

<style scoped>
.page-name {
  margin: 2.3rem 0 1.2rem 0;
  font-size: 2.75rem;
}

.game-rules-list-div {
  width: 45%;
  height: auto;
  margin: 0 auto 2rem;
  padding: 0;
}

.game-rules-list li {
  margin: 0.67rem;
  padding: 0.33rem;
}
</style>