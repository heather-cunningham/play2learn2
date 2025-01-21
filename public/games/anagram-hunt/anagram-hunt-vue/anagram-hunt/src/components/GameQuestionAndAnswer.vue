<template>

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
           @change="setAnswerInput" />
  </div>

  <EnterButton @click="handleClickEnterBtn"/>
  <UserAnswers :users-answer-list="usersAnswerList"/>

</template>

<script>
import {defineComponent} from "vue";
import EnterButton from "@/components/EnterButton.vue";
import {ANAGRAMS_LIST, removeElFromArray} from "@/assets/anagramsListHelpers.js";
import UserAnswers from "@/components/UserAnswers.vue";

export default defineComponent({
  name: 'GameQuestionAndAnswer',

  components: {
    UserAnswers,
    EnterButton,
  },

  props: {
    wordLength: {
      type: String,
      required: true,
      default: "5", // Default to 5 for safety; 2d arr of anagrams only has 4 sublists named 5 - 8.
    },
  },

  data() {
    return {
      newAnagramWordList: [],
      newAnagramWord: "",
      userAnswer: "",
      isAnswerCorrect: false,
      usersAnswerList: [],
    };
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
      console.log("####1 new anagram wordList1: " + this.newAnagramWordList);

      const newAnagramIndex = Math.floor(Math.random() * this.newAnagramWordList.length);
      this.newAnagramWord = this.newAnagramWordList[newAnagramIndex];
      console.log("#### new anagram word: " + this.newAnagramWord);

      // Remove the word from which the user is to make anagrams from the wordList
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
        this.newAnagramWordList = removeElFromArray(this.newAnagramWordList,
            this.newAnagramWordList.indexOf(wordEntered));
        this.usersAnswerList.push(wordEntered);
        this.userAnswer = "";

        // If all the anagrams have been guessed:
        if(this.newAnagramWordList.length === 0)
          this.resetAnagram();
      }
    },// end setAnswerInput()

    handleClickEnterBtn() {
      this.setAnswerInput();
    },

    checkAnswer(wordEntered){
      if(this.newAnagramWordList.includes(wordEntered)){
        return true;
      }
    },
  },//end methods
});
</script>

<style>
.answer-input {
  width: 20rem;
  border: 1px solid grey;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

#question-div,
#answer-div {
  width: 20rem;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  .answer-input,
  #question-div,
  #answer-div {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
