<template>

  <div class="site-page-div w-75 mx-auto mb-md-4 mb-sm-3 mb-3 my-0 d-flex
                    justify-content-center align-items-center flex-wrap btn">
    <button id="anagram-back-to-start-btn"
            class="btn"
            alt="Click or tap to go back to the Start screen"
            title="Anagram Hunt 'Back to Start' screen button"
            name="back"
            value="Back to Start" >
      Back to Start
    </button>
  </div>

</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'BackToStartButton',
});
</script>

<style>
#anagram-back-to-start-btn {
  background-color: navy;
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #anagram-back-to-start-btn {
    width: 16rem !important;
    text-align: center;
    font-size: smaller;
  }
}
/* END Custom styles for Bootstrap small screens (576px wide) and smaller */
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
