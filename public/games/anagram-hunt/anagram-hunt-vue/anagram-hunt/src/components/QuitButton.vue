<template>
  <div class="site-page-div col w-75 mx-auto">
    <div id="anagram-quit-btn-div"
         class="question-answer-div row mx-md-auto mx-sm-auto mx-0 mb-4 text-lg-center text-md-center
                text-sm-center text-center">
      <div id="quit-div" class="col-12 p-0 mt-1 mb-2">
        <button id="anagram-quit-btn"
                class="quit-btn"
                type="button"
                alt="Click or tap to quit the Anagram Hunt game"
                title="Anagram Hunt quit button"
                aria-label="Anagram Hunt quit button"
                name="quit"
                value="Quit"
                @click="clickQuitBtn" >
          Quit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "QuitButton",
  emits: ["click"],
  methods: {
    clickQuitBtn() {
      this.$emit("click");
    },
  },
});
</script>

<style>
#anagram-quit-btn-div,
#quit-div,
#anagram-quit-btn {
  width: 20rem !important;
}

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

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-quit-btn-div,
  #quit-div,
  #anagram-quit-btn {
    width: 16rem !important;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
