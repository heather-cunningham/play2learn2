<template>

  <div class="score-input-div row">
    <div id="score-lbl" class="col-md-4 col-sm-4 col-12 p-0 text-md-end text-sm-end
                        text-start">
      <label id="anagram-score-lbl"
             for="anagram-score-input">
        Score:
      </label>
    </div>
    <div id="score-input" class="col-md-7 col-sm-7 col-12 p-0">
      <input id="anagram-score-input"
             class="fw-bold"
             type="text"
             placeholder="0"
             :value="userScore"
             readonly/>
    </div>
  </div>

</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'GameScore',
  props: {
    userScore: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style>
.score-input-div {
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

#anagram-score-lbl {
  margin: 0 0.167rem 0.167rem 0.67rem;
  padding: 0 !important;
}

#anagram-score-input {
  width: 13rem;
  margin: 0 0 0.167rem 0.67rem;
  padding: 0.167rem !important;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-score-lbl,
  #anagram-score-input {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
