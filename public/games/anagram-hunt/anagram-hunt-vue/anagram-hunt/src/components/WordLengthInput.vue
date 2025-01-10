<template>
  <div id="anagram-hunt-select-div" class="game-select-div mx-auto mb-md-3
         mb-sm-2 mb-2 d-flex justify-content-center align-items-center flex-wrap">

    <label id="word-len-lbl"
           class="me-2 mb-2 fw-bold"
           for="word-len-input">
      Word Length
    </label>
    <input id="word-len-input"
           class="mb-2 ps-2 pe-0 py-1"
           type="number"
           alt="Enter a number between 5 through 8"
           placeholder="Please, enter a number from 5-8"
           title="Enter a number between 5 through 8" />
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "WordLengthInput"
});
</script>

<style scoped>

#word-len-lbl{
  font-size: 1.2rem;
}

#word-len-input {
  width: 50%;
  height: 2.5rem;
  border: 1px solid gray;
  border-radius: 0.3rem;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
