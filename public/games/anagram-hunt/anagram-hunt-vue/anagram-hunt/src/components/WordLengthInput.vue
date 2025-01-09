<template>
  <div id="anagram-hunt-select-div" class="game-select-div mx-auto mb-md-4
         mb-sm-2 d-flex justify-content-center align-items-center flex-wrap">

    <label id="word-len-lbl"
           class="me-2 fw-bold"
           for="word-len-input">
      Word Length
    </label>
    <input id="word-len-input" type="number" placeholder="Please, enter a number from 5 to 8" />

  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "WordLengthInput"
});
</script>

<style scoped>

</style>