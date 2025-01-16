<template>
  <div class="score-form col h-auto mx-auto mt-1 mb-2">
    <GameScore :user-score="userScore"/>
    <GameTimer :time-left="timeLeft"/>
  </div>

  <div id="anagram-question-answer-div"
       class="question-answer-div row mx-md-auto mx-sm-auto mx-0 mb-4 text-lg-center text-md-center
                text-sm-center text-center">
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
    <EnterButton/>
    <ol id="anagram-user-answer-list" class="col-12 h-auto mx-auto my-3 p-0">
      <li>bader</li>
    </ol>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import EnterButton from "@/components/EnterButton.vue";
import GameScore from "@/components/GameScore.vue";
import GameTimer from "@/components/GameTimer.vue";

export default defineComponent({
  name: 'GameBoard',

  components: {
    GameScore,
    GameTimer,
    EnterButton,
  },

  data: ()=>{
    return {
      userScore: 0,
      timeLeft: 60,
    }
  },
});

</script>

<style>
.score-form {
  width: 20rem;
  overflow: hidden;
}

#anagram-question-answer-div {
  width: 20rem !important;
}

.answer-input {
  width: 20rem;
  border: 1px solid grey;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

#anagram-user-answer-list {
  width: 16rem;
}

#question-div,
#answer-div {
  width: 20rem;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  .answer-input,
  #question-div,
  #answer-div,
  #anagram-user-answer-list {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
