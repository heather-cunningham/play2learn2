<template>
  <div id="anagram-hunt-select-div" class="mx-auto mb-md-4 mb-sm-3 mb-3 my-0 d-flex justify-content-center
                                           align-items-center flex-wrap">
    <label id="word-len-lbl"
           class="me-xl-3 me-lg-2 me-md-2 mb-2 fw-bold text-end"
           for="word-len-input">
      {{ label }}
    </label>
    <input id="word-len-input"
           class="mb-2 ps-2 pe-0 py-1"
           type="number"
           alt="Enter a number between 5 through 8"
           placeholder="Enter a # from 5-8"
           title="Enter a number between 5 through 8" />
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "WordLengthInput",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {},
});
</script>

<style scoped>

#word-len-lbl{
  font-size: 1.2rem;
}

#word-len-input {
  width: 20rem;
  height: 2.5rem;
  border: 1px solid gray;
  border-radius: 0.3rem;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

/* Custom styles for Bootstrap medium screens (768px wide) and smaller */
@media (max-width: 768px) {
  #anagram-hunt-select-div {
    flex-direction: column;
  }
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #word-len-input {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
