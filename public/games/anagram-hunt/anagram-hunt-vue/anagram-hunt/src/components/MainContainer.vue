<template>
  <main id="anagram-hunt" class="flex-grow-1">
    <div id="start-game-div" v-if="screen === 'start'">
      <StartScreen @selection="handleWordLenSelection"
                   :wordLength="wordLength"
                   :toggle-start-screen="toggleStartScreen" />
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
import GameBoard from "@/components/GameBoard.vue";
import EndScreen from "@/components/EndScreen.vue";

export default {
  name: "MainContainer",

  components: {
    StartScreen,
    GameBoard,
    EndScreen,
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

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

