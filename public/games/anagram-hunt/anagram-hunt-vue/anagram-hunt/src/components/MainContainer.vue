<template>
  <main id="anagram-hunt" class="flex-grow-1">

    <div v-if="screen === 'start'">
      <StartScreen />
      <PlayButton @click="loadPlayScreen" />
    </div>

    <div v-else-if="screen === 'play'">
      <PlayScreen />
      <QuitButton />
    </div>

    <!-- START Final/End Screen -->
    <div v-else-if="screen === 'end'"></div> <!-- END Final/End Screen -->
  </main>
</template>

<script>
import {defineComponent} from 'vue';
import StartScreen from "@/components/StartScreen.vue";
import PlayButton from "@/components/PlayButton.vue";
import PlayScreen from "@/components/PlayScreen.vue";
import QuitButton from "@/components/QuitButton.vue";


export default defineComponent({
  name: "MainContainer",

  components: {
    StartScreen,
    PlayButton,
    PlayScreen,
    QuitButton,
  },

  data: () => {
    return {
      screen: "play",
    };
  },

  methods: {
    loadPlayScreen() {
      this.screen = "play";
    },
  },
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

