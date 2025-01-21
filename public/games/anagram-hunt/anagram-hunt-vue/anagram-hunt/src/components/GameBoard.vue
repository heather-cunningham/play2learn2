<template>
  <div class="score-form col h-auto mx-auto mt-1 mb-2">
    <GameScore :user-score="userScore"/>
    <GameTimer :time-left="timeLeft"/>
  </div>

  <div id="anagram-question-answer-div"
       class="question-answer-div row mx-md-auto mx-sm-auto mx-0 mb-4 text-lg-center
                text-md-center
                text-sm-center text-center">
    <div>
      <p>The word length chosen is: {{ wordLength }}</p>
    </div>

    <GameQuestionAndAnswer :word-length="wordLength" />

  </div>
</template>

<script>
import {defineComponent} from "vue";
import GameScore from "@/components/GameScore.vue";
import GameTimer from "@/components/GameTimer.vue";
import GameQuestionAndAnswer from "@/components/GameQuestionAndAnswer.vue";

export default defineComponent({
  name: 'GameBoard',

  props: {
    wordLength: {
      type: String,
      required: true,
      default: "5", // Default to 5 for safety; 2d arr of anagrams only has 4 sublists named 5 - 8.
    },
  },

  components: {
    GameScore,
    GameTimer,
    GameQuestionAndAnswer,
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
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
