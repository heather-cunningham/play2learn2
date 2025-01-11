<template>
  <main id="anagram-hunt" class="flex-grow-1">
    <!-- START Start Screen -->
    <div v-if="screen === 'start'">
      <StartScreen/>
    </div> <!-- END Start Screen -->

    <!-- START Game Board -->
    <div v-else-if="screen === 'play'">

      <div id="anagram-hunt-play" class="site-page-div col w-75 mx-auto">
        <div id="scoreboard" class="row mx-auto">
          <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12"><!-- class="score-input-div" -->
            <label id="anagram-score-lbl"
                   for="anagram-score-input"
                   class="ps-0 pe-1 py-2 text-end" > <!-- class="score-lbl" -->
              Score:
            </label>
            <input id="anagram-score-input"
                   class="p-2"
                   type="text"
                   placeholder="0"
                   value=""
                   readonly /> <!-- class="score-input" -->
          </div>

          <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12"><!-- class="time-left-div" -->
            <label id="anagram-time-left-lbl"
                   for="anagram-time-input"
                   class="ps-0 pe-1 py-2 text-end" > <!-- class="time-left-lbl" -->
              Time Left:
            </label>
            <input id="anagram-time-input"
                   class="p-2"
                   type="text"
                   placeholder="60"
                   value=""
                   readonly /> <!-- class="time-left-input" -->
          </div>
        </div>

        <div id="anagram-question-answer-div" class="question-answer-div text-center">
          <label id="anagram-question-lbl"
                 for="anagram-hunt-answer-input"
                 class="question-lbl">
            beard
          </label>
          <input id="anagram-hunt-answer-input"
                 class="answer-input enabled"
                 type="text"
                 placeholder="Enter anagram here"
                 value=""/>
        </div>

        <div id="anagram-user-answer-list-div">
          <ol id="anagram-user-answer-list">
            <li>bread</li>
          </ol>
        </div>

        <div class="score-input-div">
          <button id="anagram-facts-quit-btn"
                  class="quit-btn"
                  type="button"
                  name="quit"
                  value="Quit">
            Quit
          </button>
        </div>

      </div>

    </div> <!-- END Game Board -->

    <!-- START Final/End Screen -->
    <div v-else-if="screen === 'end'"></div> <!-- END Final/End Screen -->
  </main>
</template>

<script>
import {defineComponent} from 'vue';
import StartScreen from "@/components/StartScreen.vue";

export default defineComponent({
  name: "MainContainer",

  components: {
    StartScreen,
  },

  data: () => {
    return {
      screen: "play",
    };
  }
});
</script>

<style>
 #scoreboard {
   width: 65%;
   height: auto;
   flex-direction: row;
 }

 /* START Custom styles for Bootstrap  */
 @media (max-width: 992px) {
   #scoreboard {
     width: 75%;
     height: auto;
     flex-direction: column;
   }
 }

 @media (max-width: 768px) {
   #scoreboard {
     width: 75%;
     height: auto;
     flex-direction: column;
   }
 }
 /* END Custom styles for Bootstrap  */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
