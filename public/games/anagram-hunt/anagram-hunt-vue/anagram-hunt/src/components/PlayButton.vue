<template>
  <div class="mx-auto mb-md-4 mb-sm-2 d-flex justify-content-center align-items-center flex-wrap">

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

<style src="../../public/anagram-styles/normalize.css"></style>
<style src="../../public/anagram-styles/styles.css"></style>
<style src="../../public/anagram-styles/games.css"></style>

