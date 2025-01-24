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
                 @update-final-score="updateFinalScore"
                 :toggle-start-screen="toggleStartScreen"
                 :toggle-end-screen="toggleEndScreen" />
    </div>

    <div id="end-game-div" v-else-if="screen === 'end'">
      <EndScreen :word-length="wordLength"
                 :final-score="finalScore"
                 :toggle-end-screen="toggleEndScreen"
                 :toggle-play-screen="togglePlayScreen" />
    </div>
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
      screen: "start",
      wordLength: "5", // default to 5 for safety
      finalScore: 0,
    };
  },

  methods: {
    handleWordLenSelection(selection) {
      this.wordLength = selection;
    },

    updateFinalScore(userScore) {
      this.finalScore = userScore;
    },

    // For the "Play" btn
    toggleStartScreen() {
      this.screen = this.screen === "start" ? "play" : "start";
    },

    // For the "Play Again" btn
    togglePlayScreen() {
      this.screen = this.screen === "end" ? "play" : "end";
    },

    // For the "Back to Start" btn
    toggleEndScreen() {
      if(this.screen === "end"){
        this.screen = "start";
      } else if (this.screen === "play") {
        this.screen = "end";
      } else {
        this.screen = "end";
      }
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

