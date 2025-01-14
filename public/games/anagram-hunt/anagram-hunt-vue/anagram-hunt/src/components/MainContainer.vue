<template>
  <main id="anagram-hunt" class="flex-grow-1">
    <!-- START Start Screen -->
    <div v-if="screen === 'start'">
      <StartScreen/>
    </div> <!-- END Start Screen -->

    <!-- START Game Board -->
    <div v-else-if="screen === 'play'">
      <!-- START Play Div -->
      <div id="anagram-hunt-play" class="site-page-div col w-75 mx-auto">
        <div class="score-form h-auto col mx-auto mt-1 mb-2">
          <div class="score-input-div row">
            <div id="score-lbl" class="col-md-4 col-sm-4 col-12 p-0 text-md-end text-sm-end
                        text-start">
                <label id="anagram-score-lbl"
                       for="anagram-score-input" >
                  Score:
                </label>
            </div>
            <div id="score-input" class="col-md-7 col-sm-7 col-12 p-0">
              <input id="anagram-score-input"
                     class="fw-bold"
                     type="text"
                     placeholder="0"
                     value=""
                     readonly />
            </div>
          </div>

          <div class="time-left-div row">
            <div id="time-lbl" class="col-md-4 col-sm-4 col-12 p-0 text-sm-end
                        text-start">
              <label id="anagram-time-left-lbl"
                     for="anagram-time-input"  >
                Time Left:
              </label>
            </div>
            <div id="time-input" class="col-md-7 col-sm-7 col-12 p-0">
              <input id="anagram-time-input"
                     class="fw-bold"
                     type="text"
                     placeholder="60"
                     value=""
                     readonly />
            </div>
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

        <div class="score-form">
            <button id="math-facts-quit-btn"
                    class="quit-btn"
                    type="button"
                    name="quit"
                    value="Quit">
              Quit
            </button>
        </div>
      </div> <!-- END Play div -->
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
.score-form {
  width: 19rem;
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
  margin: 0 0.167rem 0.167rem 0;
  padding: 0 !important;
}

#anagram-score-input,
#anagram-time-input {
  width: 13rem;
  margin: 0 0 0.167rem 0.167rem;
  padding: 0.167rem !important;
}
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
