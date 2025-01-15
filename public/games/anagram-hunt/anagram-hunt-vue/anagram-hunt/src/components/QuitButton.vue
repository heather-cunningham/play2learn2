<template>
  <div id="quit-div" class="col-12 p-0 mt-1 mb-2">
    <button id="anagram-quit-btn"
            class="quit-btn"
            type="button"
            alt="Click or tap to quit the Anagram Hunt game"
            title="Anagram Hunt quit button"
            name="quit"
            value="Quit">
      Quit
    </button>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent( {
  name: 'QuitButton'
});
</script>

<style>
.quit-btn {
  height: 2.5rem;
  color: white;
  background-color: red;
  font-weight: bold;
  font-size: larger;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

#quit-div,
#anagram-quit-btn {
  width: 20rem;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #quit-div,
  #anagram-quit-btn {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
