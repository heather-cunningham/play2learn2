<template>
  <main id="anagram-hunt" class="flex-grow-1">
    <div id="start-game-div" v-if="screen === 'start'">
      <StartScreen @selection="handleWordLenSelection" />
      <PlayButton id="anagram-play-btn"
                  name="play"
                  value="Play!"
                  :handle-click="toggleStartScreen"
                  :wordLength="wordLength" />
    </div>

    <div id="play-game-div" v-else-if="screen === 'play'">
      <GameBoard :wordLength="wordLength"
                 :toggle-start-screen="toggleStartScreen" />
    </div>

    <!-- START Final/End Screen -->
    <div id="end-game-div" v-else-if="screen === 'end'">
<!--      <div class="site-page-div col-12 w-75 mx-auto text-center">
        <h3 class="times-up-note fw-bold">
          TIME'S UP!!!
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
                    :handle-click="togglePlayScreen" />
        <BackToStartButton @click="toggleEndScreen" />
      </div>-->
      <EndScreen :word-length="wordLength"
          :toggle-end-screen="toggleEndScreen"
          :toggle-play-screen="togglePlayScreen" />
    </div> <!-- END Final/End Screen -->

  </main>
</template>

<script>
import StartScreen from "@/components/StartScreen.vue";
import PlayButton from "@/components/PlayButton.vue";
import GameBoard from "@/components/GameBoard.vue";
import EndScreen from "@/components/EndScreen.vue";

export default {
  name: "MainContainer",

  components: {
    EndScreen,
    StartScreen,
    PlayButton,
    GameBoard,
  },

  data() {
    return {
      screen: "end",
      wordLength: "5", // default to 5 for safety
    };
  },

  methods: {
    handleWordLenSelection(selection) {
      this.wordLength = selection;
    },

    // For the "Play" btn
    toggleStartScreen: function () {
      this.screen = this.screen === "start" ? "play" : "start";
    },

    // For the "Play Again" btn
    togglePlayScreen: function () {
      this.screen = this.screen === "end" ? "play" : "end";
    },

    // For the "Back to Start" btn
    toggleEndScreen: function () {
      this.screen = this.screen === "end" ? "start" : "end";
    },
  },
};
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

