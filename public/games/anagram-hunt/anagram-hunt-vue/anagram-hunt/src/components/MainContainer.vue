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
        <div class="score-form col h-auto mx-auto mt-1 mb-2">
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

        <div id="anagram-user-answer-list-div" class="col w-25 h-auto mx-auto p-0">
          <ol id="anagram-user-answer-list" class="col w-25 h-auto mx-auto p-0">
            <li>bader</li>
          </ol>
        </div>


          <div id="quit-div" class="col-12 mx-auto p-0">
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
#quit-div,
#anagram-quit-btn {
  width: 20rem;
}

#anagram-enter-btn {
  height: 2.5rem;
  color: white;
  background-color: green;
  font-weight: bold;
  font-size: larger;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
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
  #anagram-score-lbl,
  #anagram-time-left-lbl,
  #anagram-score-input,
  #anagram-time-input,
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
}
/* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
