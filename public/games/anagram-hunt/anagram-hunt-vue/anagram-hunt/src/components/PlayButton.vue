<template>
  <div class="mx-auto mb-md-4 mb-sm-3 mb-3 d-flex justify-content-center align-items-center flex-wrap">

    <button id="anagram-play-btn"
            class="btn"
            type="button"
            name="anagram-hunt-play"
            value="Play">
      Play!
    </button>

  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "PlayButton"
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

