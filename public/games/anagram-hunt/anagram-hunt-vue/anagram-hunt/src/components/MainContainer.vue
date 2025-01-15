<template>
  <main id="anagram-hunt" class="flex-grow-1">
    <!-- START Start Screen -->
    <div v-if="screen === 'start'">
      <StartScreen/>
    </div> <!-- END Start Screen -->

    <!-- START Game Board -->
    <div v-else-if="screen === 'play'">
      <!-- START Play Div -->
      <PlayScreen/> <!-- END Play div -->
    </div> <!-- END Game Board -->

    <!-- START Final/End Screen -->
    <div v-else-if="screen === 'end'"></div> <!-- END Final/End Screen -->
  </main>
</template>

<script>
import {defineComponent} from 'vue';
import StartScreen from "@/components/StartScreen.vue";
import PlayScreen from "@/components/PlayScreen.vue";

export default defineComponent({
  name: "MainContainer",

  components: {
    PlayScreen,
    StartScreen,
  },

  data: () => {
    return {
      screen: "play",
    };
  }
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

