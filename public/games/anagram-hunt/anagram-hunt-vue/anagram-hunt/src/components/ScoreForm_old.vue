<template>
  <div class="score-form col h-auto mx-auto mt-1 mb-2">
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
               value=""
               readonly/>
      </div>
    </div>
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
               value=""
               readonly/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'ScoreForm'
});
</script>

<style>
.score-form {
  width: 20rem;
  overflow: hidden;
}

.score-input-div,
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

#anagram-score-lbl,
#anagram-time-left-lbl {
  margin: 0 0.167rem 0.167rem 0.67rem;
  padding: 0 !important;
}

#anagram-score-input,
#anagram-time-input {
  width: 13rem;
  margin: 0 0 0.167rem 0.67rem;
  padding: 0.167rem !important;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-score-lbl,
  #anagram-time-left-lbl,
  #anagram-score-input,
  #anagram-time-input {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
