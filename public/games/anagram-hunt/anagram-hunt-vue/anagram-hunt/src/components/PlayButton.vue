<template>
  <div id="anagram-play-btn-div"
       class="site-page-div w-75 mx-auto mb-md-4 mb-sm-3 mb-3 my-0 d-flex justify-content-center
              align-items-center flex-wrap">
    <button id="anagram-play-btn"
            class="btn"
            type="button"
            name="anagram-hunt-play"
            value="Play"
            aria-label="Anagram Hunt Play button"
            alt="Click or tap to play Anagram Hunt"
            title="Anagram Hunt Play button"
            @click="clickPlayBtn" >
      Play!
    </button>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "PlayButton",
  emits: ["click"],
  methods: {
    clickPlayBtn() {
      this.$emit("click");
    },
  },
});
</script>

<style>
#anagram-play-btn {
  width: 20rem;
  height: 2.5rem;
  color: white !important;
  background-color: green;
  font-weight: bold;
  font-size: larger;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

#anagram-play-btn:hover {
  background-color: gray;
}

#anagram-play-btn:active {
  background-color: gray;
  border: 2px inset white;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-play-btn {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>

