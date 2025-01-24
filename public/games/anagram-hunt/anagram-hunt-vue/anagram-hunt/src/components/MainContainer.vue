<template>
  <main id="anagram-hunt" class="flex-grow-1">
    <div id="start-game-div" v-if="screen === 'start'">
      <StartScreen @selection="handleWordLenSelection" />
      <PlayButton id="anagram-play-btn"
                  name="play"
                  value="Play!"
                  @click="toggleStartScreen" />
    </div>

    <div id="play-game-div" v-else-if="screen === 'play'">
      <GameBoard :wordLength="wordLength"
                 :toggle-start-screen="toggleStartScreen" />
    </div>

    <!-- START Final/End Screen -->
    <div id="end-game-div" v-else-if="screen === 'end'">
      <div class="site-page-div col-12 w-75 mx-auto text-center">
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
                    value="Play Again!" />
        <BackToStartButton @click="toggleEndScreen" />
      </div>
    </div> <!-- END Final/End Screen -->

  </main>
</template>

<script>
import StartScreen from "@/components/StartScreen.vue";
import PlayButton from "@/components/PlayButton.vue";
import GameBoard from "@/components/GameBoard.vue";
import BackToStartButton from "@/components/BackToStartButton.vue";

export default {
  name: "MainContainer",

  components: {
    BackToStartButton,
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

    toggleStartScreen: function () {
      this.screen = this.screen === "start" ? "play" : "start";
    },

    toggleEndScreen: function () {
      this.screen = this.screen === "end" ? "start" : "end";
    },
  },
};
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

#anagram-play-again-btn,
#anagram-play-btn {
  background-color: green;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-play-again-btn,
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

