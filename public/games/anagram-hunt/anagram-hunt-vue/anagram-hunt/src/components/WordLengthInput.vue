<template>
  <label id="word-len-lbl" for="word-len-input">Word Length</label>
  <input id="word-len-input" type="number" placeholder="Please, enter a number from 5 to 8">


</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "WordLengthInput"
});
</script>

<style scoped>

</style>