<template>

  <div class="site-page-div col-12 w-75 mx-auto text-center">
    <h3 class="times-up-note fw-bold">
      {{ timesUpNote }}
    </h3>
    <p class="final-score-header">
      You found:
    </p>
    <p class="final-score">
      7
    </p>
    <p class="final-score-header">
      Anagrams
    </p>

    <PlayButton id="anagram-play-again-btn"
                class="btn"
                name="play"
                value="Play Again!"
                :wordLength="wordLength"
                :handle-click="togglePlayScreen"/>
    <BackToStartButton :handle-click="toggleEndScreen"/>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import BackToStartButton from "@/components/BackToStartButton.vue"
import PlayButton from "@/components/PlayButton.vue"
import {TIMES_UP_STR} from "@/assets/anagramsListHelpers";

export default defineComponent({
  name: 'EndScreen',

  components: {
    BackToStartButton,
    PlayButton,
  },

  props: {
    wordLength: {
      type: String,
      required: true,
      default: "5", // Default to 5 for safety; 2d arr of anagrams only has 4 sublists named 5 - 8.
    },
    toggleEndScreen: {
      type: Function,
      required: true,
    },
    togglePlayScreen: {
      type: Function,
      required: true,
    },
  },

  computed: {
    timesUpNote: ()=> TIMES_UP_STR,
  },
});
</script>

<style>
h3.times-up-note {
  color: rgb(224, 18, 128);
  font-size: 2rem;
}

/* ie: "You found:" */
p.final-score-header {
  font-size: 2rem;
}

p.final-score {
  color: darkblue;
  font-size: 3rem;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-play-again-btn {
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
