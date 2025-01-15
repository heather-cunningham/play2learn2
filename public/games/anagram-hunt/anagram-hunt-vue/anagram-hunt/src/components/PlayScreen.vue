<template>
  <div id="anagram-hunt-play" class="site-page-div col w-75 mx-auto">
    <ScoreForm/>
    <GameBoard/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ScoreForm from "@/components/ScoreForm.vue";
import GameBoard from "@/components/GameBoard.vue";

export default defineComponent({
  name: 'PlayScreen',
  components: {
    ScoreForm,
    GameBoard,
  },
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

