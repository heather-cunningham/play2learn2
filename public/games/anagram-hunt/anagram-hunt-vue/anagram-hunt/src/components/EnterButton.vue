<template>
  <div id="enter-div" class="col-12 p-0 mt-1 mb-3">
    <button id="anagram-enter-btn"
            class=""
            type="button"
            alt="Click or tap to enter your anagram"
            title="Anagram enter button"
            name="enter"
            value="Enter">
      Enter
    </button>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'EnterButton'
});
</script>

<style>
#anagram-enter-btn {
  height: 2.5rem;
  color: white !important;
  background-color: green;
  font-weight: bold;
  font-size: larger;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

#enter-div,
#anagram-enter-btn {
  width: 20rem;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #enter-div,
  #anagram-enter-btn {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
