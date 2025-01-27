<template>
  <div id="anagram-hunt-start" class="site-page-div col-12 w-75 mx-auto">
    <WordLengthInput id="word-len-input"
                     label="Word Length"
                     label-id="word-len-lbl"
                     :options-arr="wordLenArr"
                     v-model="wordLenChosen"
                     @selection="setWordLenChosen" />
    <GameRules />
    <PlayButton id="anagram-play-btn"
            name="play"
            value="Play!"
            :handle-click="toggleStartScreen"
            :wordLength="wordLength" />
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import WordLengthInput from "@/components/WordLengthInput.vue";
import GameRules from "@/components/GameRules.vue";
import PlayButton from "@/components/PlayButton.vue";
import {WORD_LEN_DFLT_MSG} from "@/assets/anagramsListHelpers.js";

export default defineComponent({
  name: "StartScreen",

  props: {
    wordLength: {
      type: String,
      required: true,
      default: "5", // Default to 5 for safety; 2d arr of anagrams only has 4 sublists named 5 - 8.
    },
    toggleStartScreen: {
      type: Function,
      required: true,
    },
  },

  components: {
    WordLengthInput,
    GameRules,
    PlayButton,
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

<style>
#anagram-play-btn {
  background-color: green;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-play-btn {
    width: 16rem !important;
    text-align: center;
    font-size: smaller;
  }
}
/* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
