<template>
  <div id="anagram-hunt-play" class="site-page-div col w-75 mx-auto">
    <ScoreForm/>

    <div id="anagram-question-answer-div"
         class="question-answer-div row mx-md-auto mx-sm-auto mx-0 mb-4
                    text-lg-center text-md-center text-sm-center text-center">
      <div id="question-div" class="col-12 p-0">
        <label id="anagram-question-lbl"
               for="anagram-hunt-answer-input"
               class="question-lbl mb-1">
          beard
        </label>
      </div>
      <div id="answer-div" class="col-12 mb-4 p-0">
        <input id="anagram-hunt-answer-input"
               class="answer-input p-2 enabled"
               type="text"
               placeholder="Enter anagram here"
               value=""/>
      </div>
      <div id="enter-div" class="col-12 p-0 mt-1 mb-2">
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
    </div>

    <div id="anagram-user-answer-list-div" class="row h-auto mx-auto p-0">
      <ol id="anagram-user-answer-list" class="col-12 h-auto mx-auto p-0">
        <li>bader</li>
      </ol>
    </div>

    <div id="anagram-quit-btn-div" class="row h-auto mx-auto mb-4 p-0">
      <div id="quit-div" class="col-12 mx-md-auto mx-sm-0 p-0">
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
    </div>

  </div>
</template>

<script>
import {defineComponent} from "vue";
import ScoreForm from "@/components/ScoreForm.vue";

export default defineComponent({
  name: 'PlayScreen',
  components: {ScoreForm}
});
</script>

<style>

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

#anagram-question-answer-div {
  width: 20rem !important;
}

.answer-input {
  width: 20rem;
  border: 1px solid grey;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

#question-div,
#answer-div,
#enter-div,
#anagram-enter-btn,
#anagram-quit-btn-div,
#quit-div,
#anagram-quit-btn {
  width: 20rem;
}

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

#anagram-user-answer-list-div,
#anagram-user-answer-list {
  width: 4rem;
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

.quit-btn:hover,
#anagram-enter-btn:hover {
  background-color: gray;
}

.quit-btn:active,
#anagram-enter-btn:active {
  background-color: gray;
  border: 2px inset white;
}


/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  .answer-input,
  #question-div,
  #answer-div,
  #enter-div,
  #anagram-enter-btn,
  #quit-div,
  #anagram-quit-btn {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>