<template>
  <div id="anagram-hunt-play" class="site-page-div col w-75 mx-auto">
    <div class="score-form col h-auto mx-auto mt-1 mb-2">
      <GameScore :user-score="userScore"/>
      <GameTimer :time-left="timeLeft"/>
    </div>

    <!-- START Anagram Question & Answer divs -->
    <div id="anagram-question-answer-div"
         class="question-answer-div row mx-md-auto mx-sm-auto mx-0 mb-4 text-lg-center
                text-md-center
                text-sm-center text-center">
      <div id="question-div" class="col-12 p-0">
        <label id="anagram-question-lbl"
               for="anagram-hunt-answer-input"
               class="question-lbl mb-1">
          {{ newAnagramWord }}
        </label>
      </div>
      <div id="answer-div" class="col-12 mb-4 p-0">
        <input id="anagram-hunt-answer-input"
               class="answer-input p-2 enabled"
               type="text"
               placeholder="Enter anagram here"
               alt="Type anagram here"
               v-model="userAnswer"
               @change="setAnswerInput"/>
      </div> <!-- END Anagram Question & Answer divs -->

      <EnterButton @click="handleClickEnterBtn"/>
      <UserAnswers :users-answer-list="usersAnswerList"/>
    </div>
  </div>

  <QuitButton @click="handleClickQuitBtn" />
</template>

<script>
import {defineComponent} from "vue";
import GameScore from "@/components/GameScore.vue";
import GameTimer from "@/components/GameTimer.vue";
import EnterButton from "@/components/EnterButton.vue";
import UserAnswers from "@/components/UserAnswers.vue";
import QuitButton from "@/components/QuitButton.vue";
import {ANAGRAMS_LIST, removeElFromArray} from "@/assets/anagramsListHelpers";


export default defineComponent({
  name: 'GameBoard',

  props: {
    wordLength: {
      type: String,
      required: true,
      default: "5", // Default to 5 for safety; 2d arr of anagrams only has 4 sublists named 5 - 8.
    },
    toggleScreen: {
      type: Function,
      required: true,
    }
  },

  components: {
    GameScore,
    GameTimer,
    EnterButton,
    UserAnswers,
    QuitButton,
  },

  data: ()=>{
    return {
      userScore: 0,
      timeLeft: 60,
      newAnagramWordList: [],
      newAnagramWord: "",
      userAnswer: "",
      isAnswerCorrect: false,
      usersAnswerList: [],
    }
  },

  created() {
    this.setNewAnagram();
  },

  methods: {
    setNewAnagram() {
      // Word length between 5 and 8 chosen by user
      const wordLenIndex = Number(this.wordLength);
      const listOfWordLists = ANAGRAMS_LIST[wordLenIndex];
      this.newAnagramWordList = listOfWordLists[Math.floor(Math.random() * listOfWordLists.length)];

      const newAnagramIndex = Math.floor(Math.random() * this.newAnagramWordList.length);
      this.newAnagramWord = this.newAnagramWordList[newAnagramIndex];
      console.log("#### new anagram word: " + this.newAnagramWord);

      // Remove the word, from which the user is to make anagrams, from the wordList
      if (this.newAnagramWordList.includes(this.newAnagramWord))
        this.newAnagramWordList = removeElFromArray(this.newAnagramWordList, newAnagramIndex);

      console.log("####2 new anagram wordList2: " + this.newAnagramWordList);
    },

    resetAnagram() {
      this.setNewAnagram();
      this.usersAnswerList = [];
      this.isAnswerCorrect = false;
    },

    setAnswerInput(){
      const wordEntered = this.userAnswer.toLowerCase();
      this.isAnswerCorrect = this.checkAnswer(wordEntered);

      if(this.isAnswerCorrect){
        this.newAnagramWordList = removeElFromArray(this.newAnagramWordList, this.newAnagramWordList.indexOf(wordEntered));
        this.usersAnswerList.push(wordEntered);
        this.userAnswer = "";
        this.userScore += 1;

        // If all the anagrams have been guessed:
        if(this.newAnagramWordList.length === 0)
          this.resetAnagram();
      }
    },// end setAnswerInput()

    handleClickEnterBtn() {
      this.setAnswerInput();
    },

    handleClickQuitBtn() {
      this.resetGameBoard();
      this.toggleScreen();
    },

    checkAnswer(wordEntered){
      if(this.newAnagramWordList.includes(wordEntered))
        return true;
    },

    resetGameBoard(){
      this.userScore = 0;
      this.timeLeft = 60;
      this.userAnswer = "";
      this.usersAnswerList = [];
      this.isAnswerCorrect = false;
      this.newAnagramWordList = [];
      this.newAnagramWord = "";
    },
  },//end methods
});
</script>

<style>
.score-form {
  width: 20rem;
  overflow: hidden;
}

#anagram-question-answer-div,
#question-div,
#answer-div,
.answer-input {
  width: 20rem !important;
}

.answer-input {
  border: 1px solid grey;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-question-answer-div,
  #question-div,
  #answer-div,
  .answer-input {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
