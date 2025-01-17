<template>
  <div id="anagram-hunt-start" class="site-page-div col-12 w-75 mx-auto">
    <WordLengthInput id="word-len-input"
                     label="Word Length"
                     label-id="word-len-lbl"
                     :options-arr="wordLenArr"
                     v-model="wordLenChosen"
                     @selection="setWordLenChosen" />
    <GameRules/>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import WordLengthInput from "@/components/WordLengthInput.vue";
import GameRules from "@/components/GameRules.vue";
import {WORD_LEN_DFLT_MSG} from "@/assets/anagramsList";

export default defineComponent({
  name: "StartScreen",

  components: {
    WordLengthInput,
    GameRules,
  },

  data: () => {
    return {
      wordLenArr: [
        "5",
        "6",
        "7",
        "8",
      ],
      wordLenChosen: WORD_LEN_DFLT_MSG,
    };
  },

  methods: {
    setWordLenChosen(value) {
      this.wordLenChosen = value;
      this.$emit('selection', value);
    },
  },
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
