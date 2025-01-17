<template>
  <div id="anagram-hunt-play" class="site-page-div col w-75 mx-auto">
    <GameBoard :word-length="wordLength" />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import GameBoard from "@/components/GameBoard.vue";

export default defineComponent({
  name: 'PlayScreen',

  props: {
    wordLength: {
      type: String,
      required: true,
      default: "5",
    },
  },

  components: {
    GameBoard,
  },
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

