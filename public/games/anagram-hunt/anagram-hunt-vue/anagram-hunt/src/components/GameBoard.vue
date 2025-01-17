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

    <GameQuestionAndAnswer :anagram-word="getNewAnagramWord"/>
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
import GameQuestionAndAnswer from "@/components/GameQuestionAndAnswer.vue";
/*import { anagramList } from "../src/assets/ANAGRAMS_LIST.js";*/

export default defineComponent({
  name: 'GameBoard',

  props: {
    wordLength: {
      type: String,
      required: true,
      default: "5",
    },
  },

  components: {
    GameScore,
    GameTimer,
    GameQuestionAndAnswer,
    EnterButton,
  },

  computed: {
    getNewAnagramWord() {
      return this.setNewAnagramWord(); // Need to write this fcn
    },
  },

  data: ()=>{
    return {
      userScore: 0,
      timeLeft: 60,
    }
  },

  methods: {
    setNewAnagramWord() {
      return "";
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

#anagram-user-answer-list {
  width: 16rem;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-user-answer-list {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
