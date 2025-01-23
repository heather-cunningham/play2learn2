<!--suppress CssUnusedSymbol -->
<template>

  <transition name="fade" mode="in-out">
    <div id="user-answers-div"
         v-if="usersAnswerList.length > 0"
         :key="usersAnswerList.length >  0 ? 'div-visible' : 'div-hidden'">
      <label id="anagram-user-answer-lbl"
             for="anagram-user-answer-list"
             class="fw-bold mx-auto">
        Correct Answers
      </label>
      <ol id="anagram-user-answer-list"
          class="col-12 h-auto mx-auto my-auto p-0">
        <li v-for="anagram in usersAnswerList"
            :key="anagram"
            :value="anagram">
          {{ anagram }}
        </li>
      </ol>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'UserAnswers',
  props: {
    usersAnswerList: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style>
#anagram-user-answer-lbl,
#anagram-user-answer-list {
  width: 16rem;
  text-align: center;
}

#user-answers-div.fade-enter-active,
#user-answers-div.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

#user-answers-div.fade-enter,
#user-answers-div.fade-leave-to {
  opacity: 0;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-user-answer-lbl,
  #anagram-user-answer-list {
    width: 16rem;
    text-align: center;
  }
} /* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
