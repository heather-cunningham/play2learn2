<template>

  <label id="anagram-user-answer-lbl" for="anagram-user-answer-list" class="fw-bold">Correct Answers Entered:</label>
  <ol id="anagram-user-answer-list" class="col-12 h-auto mx-auto my-auto p-0">
    <li v-for="anagram in usersAnswerList"
        :key="anagram"
        :value="anagram">
      {{ anagram }}
    </li>
  </ol>

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
