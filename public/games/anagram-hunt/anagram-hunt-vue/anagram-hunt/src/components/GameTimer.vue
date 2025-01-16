<template>
  <div class="time-left-div row">
    <div id="time-lbl" class="col-md-4 col-sm-4 col-12 p-0 text-sm-end
                        text-start">
      <label id="anagram-time-left-lbl"
             for="anagram-time-input">
        Time Left:
      </label>
    </div>
    <div id="time-input" class="col-md-7 col-sm-7 col-12 p-0">
      <input id="anagram-time-input"
             class="fw-bold"
             type="text"
             placeholder="60"
             :value="timeLeft"
             readonly/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent( {
  name: 'GameTimer',
  props: {
    timeLeft: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style>
.time-left-div {
  font-size: 1.2rem;
}

.score-input-div input,
.time-left-div input {
  cursor: not-allowed;
  background-color: floralwhite;
  border: none;
}

.score-input-div input {
  color: navy;
}

.time-left-div input {
  color: crimson;
}

#anagram-time-left-lbl {
  margin: 0 0.167rem 0.167rem 0.67rem;
  padding: 0 !important;
}

#anagram-time-input {
  width: 13rem;
  margin: 0 0 0.167rem 0.67rem;
  padding: 0.167rem !important;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-time-left-lbl,
  #anagram-time-input {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
