<template>
  <main id="anagram-hunt" class="flex-grow-1">
    <div id="start-game-div" v-if="screen === 'start'">
      <StartScreen @selection="handleWordLenSelection" />
      <PlayButton @click="loadPlayScreen" />
    </div>

    <div id="play-game-div" v-else-if="screen === 'play'">
      <PlayScreen :wordLength="wordLength" />
      <QuitButton @click="loadStartScreen" />
    </div>

    <!-- START Final/End Screen -->
    <div id="end-game-div" v-else-if="screen === 'end'"></div> <!-- END Final/End Screen -->
  </main>
</template>

<script>
import StartScreen from "@/components/StartScreen.vue";
import PlayButton from "@/components/PlayButton.vue";
import PlayScreen from "@/components/PlayScreen.vue";
import QuitButton from "@/components/QuitButton.vue";

export default {
  name: "MainContainer",

  components: {
    StartScreen,
    PlayButton,
    PlayScreen,
    QuitButton,
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
    loadPlayScreen() {
      this.screen = 'play';
    },
    loadStartScreen() {
      this.screen = 'start';
    },
  },
};
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

