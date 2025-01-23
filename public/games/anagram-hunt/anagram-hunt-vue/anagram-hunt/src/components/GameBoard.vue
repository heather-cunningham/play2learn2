<!--suppress CssUnusedSymbol -->
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

      <transition name="fade" mode="out-in">
        <div id="question-div" :key="newAnagramWord" class="col-12 p-0">
          <label id="anagram-question-lbl"
                 for="anagram-hunt-answer-input"
                 class="question-lbl mb-1">
            {{ newAnagramWord }}
            <span class="fw-normal">({{ numAnagramsLeft }} left)</span>
          </label>
        </div>
      </transition>

      <div id="answer-div" class="col-12 mb-4 p-0">
        <input id="anagram-hunt-answer-input"
               class="answer-input p-2 enabled"
               type="text"
               ref="inputRef"
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
      timeLeft: 60000,
      show: true,
      newAnagramWordList: [],
      newAnagramWord: "",
      numAnagramsLeft: 0,
      userAnswer: "",
      isAnswerCorrect: false,
      usersAnswerList: [],
      timerIntervalId: null,
    }
  },

  created() {
    this.startGame();
  },

  mounted() {
    if(this.$refs.inputRef){
      this.focusInput();
    }
  },

  watch: {
    newAnagramWord() {
      this.show = false;
      this.$nextTick(()=> this.show = true);
    },
  },

  methods: {
    startGame() {
      this.setNewAnagram();
      this.focusInput();
      this.startTimer();
    },

    focusInput(){
      if(this.$refs.inputRef){
        this.$refs.inputRef.focus();
      }
    },

    setNewAnagram() {
      // Word length between 5 and 8 chosen by user
      const wordLenIndex = Number(this.wordLength);
      let listOfWordLists = ANAGRAMS_LIST[wordLenIndex];
      let newAnagramWordListIndex;

      if(listOfWordLists.length > 0) {
        for(let i = 0; i < listOfWordLists.length; ++i){
          newAnagramWordListIndex = Math.floor(Math.random() * listOfWordLists.length);
          this.newAnagramWordList = listOfWordLists[newAnagramWordListIndex];
          if (this.newAnagramWordList.length >= 2)
            break;
        }

        if (this.newAnagramWordList.length >= 2) {
          // Remove this wordList from the listOfWordLists of this length:
          listOfWordLists = removeElFromArray(listOfWordLists, newAnagramWordListIndex);

          const newAnagramIndex = Math.floor(Math.random() * this.newAnagramWordList.length);
          this.newAnagramWord = this.newAnagramWordList[newAnagramIndex];

          // Remove the word, from which the user is to make anagrams, from the wordList
          if (this.newAnagramWordList.includes(this.newAnagramWord))
            this.newAnagramWordList = removeElFromArray(this.newAnagramWordList, newAnagramIndex);

          // Get the new length of newAnagramWordList for the # of remaining anagrams:
          this.numAnagramsLeft = this.newAnagramWordList.length;
        } else {
          this.newAnagramWord = "Game Over!";
        }
      } else {
        this.newAnagramWord = "Game Over!";
      }
    },

    setAnswerInput(){
      const wordEntered = this.userAnswer.toLowerCase();
      this.isAnswerCorrect = this.checkAnswer(wordEntered);

      if(this.isAnswerCorrect){
        this.newAnagramWordList = removeElFromArray(this.newAnagramWordList,
                                                    this.newAnagramWordList.indexOf(wordEntered));
        this.usersAnswerList.push(wordEntered);
        this.numAnagramsLeft = this.newAnagramWordList.length;
        this.userAnswer = "";
        this.userScore += 1;

        // If all the anagrams in this wordList have been guessed:
        if(this.newAnagramWordList.length === 0)
          this.resetAnagram();
      }
    },// end setAnswerInput()

    handleClickEnterBtn() {
      this.setAnswerInput();
      this.focusInput();
    },

    handleClickQuitBtn() {
      this.resetGameBoard();
      this.toggleScreen();
    },

    checkAnswer(wordEntered){
      if(this.newAnagramWordList.includes(wordEntered))
        return true;
    },

    startTimer(){
      if(this.timeLeft > 0){ // timeLeft = 60 initially
        this.timerIntervalId = setInterval(()=> {--this.timeLeft},1000);
      }
    },

    stopTimer(timerIntervalId){
      clearInterval(timerIntervalId);
    },

    resetAnagram() {
      this.userAnswer = "";
      this.usersAnswerList = [];
      this.isAnswerCorrect = false;
      this.focusInput();
      this.setNewAnagram();
    },

    resetGameBoard(){
      this.userScore = 0;
      this.timeLeft = 60000;
      this.userAnswer = "";
      this.usersAnswerList = [];
      this.isAnswerCorrect = false;
      this.newAnagramWordList = [];
      this.newAnagramWord = "";
      this.stopTimer(this.timerIntervalId);
    },

    checkIfGameOver(){
      if(this.timeLeft === 0){
        // do stuff
      }
    },

    endGame(){
      // do stuff
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
  width: 20rem;
}

.answer-input {
  border: 1px solid grey;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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
