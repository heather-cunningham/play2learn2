<template>
  <StartScreen />
</template>

<script>
import {defineComponent} from 'vue';
import StartScreen from "@/components/StartScreen.vue";

export default defineComponent({
  name: "MainContainer",
  components: {
    StartScreen,
  },
});
</script>

<style scoped>

</style>