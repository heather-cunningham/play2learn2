<template>
  <main id="anagram-hunt" class="flex-grow-1">
    <div id="start-game-div" v-if="screen === 'start'">
      <StartScreen @selection="handleWordLenSelection" />
      <PlayButton @click="toggleScreen" />
    </div>

    <div id="play-game-div" v-else-if="screen === 'play'">
      <GameBoard :wordLength="wordLength" :toggle-screen="toggleScreen"/>
    </div>

    <!-- START Final/End Screen -->
    <div id="end-game-div" v-else-if="screen === 'end'"></div> <!-- END Final/End Screen -->
  </main>
</template>

<script>
import StartScreen from "@/components/StartScreen.vue";
import PlayButton from "@/components/PlayButton.vue";
import GameBoard from "@/components/GameBoard.vue";

export default {
  name: "MainContainer",

  components: {
    StartScreen,
    PlayButton,
    GameBoard,
  },

  data() {
    return {
      screen: 'start',
      wordLength: "5", // default to 5 for safety
    };
  },

  methods: {
    handleWordLenSelection(selection) {
      this.wordLength = selection;
    },

    toggleScreen: function () {
      this.screen = this.screen === "start" ? "play" : "start";
    },
  },
};
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

