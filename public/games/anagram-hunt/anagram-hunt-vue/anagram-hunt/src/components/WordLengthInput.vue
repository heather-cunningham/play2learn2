<!--suppress CssUnusedSymbol -->
<template>
  <div id="anagram-hunt-select-div" class="mx-auto mb-md-4 mb-sm-3 mb-3 my-0 d-flex
                                            justify-content-center
                                            align-items-center
                                            flex-wrap">
    <label :id="labelId"
           :for="id"
           class="me-xl-3 me-lg-2 me-md-2 mb-2 fw-bold text-end">
      {{ label }}
    </label>

    <select :id="id"
            class="select form-select mb-2"
            alt="Select a number from 5 through 8"
            v-model="selectedWordLenValue"
            @change="updateWordLenSelection">

      <!-- dflt / placeholder option -->
      <option :value="modelValue" disabled selected>
        {{ modelValue }}
      </option>

      <!-- v-for loop of options -->
      <option :id="`word-len-option-${optionNum}`"
              v-for="optionNum in optionsArr"
              :key="`word-len-option-${optionNum}`"
              :value="optionNum">
        {{ optionNum }}
      </option>

    </select>

  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {WORD_LEN_DFLT_MSG} from "@/assets/anagramsListHelpers.js";

export default defineComponent({
  name: "WordLengthInput",

  emits: [
    "update:modelValue",
    "selection",
    "change",
  ],

  props: {
    id: {
      type: String,
      required: true,
    },
    labelId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    optionsArr: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: WORD_LEN_DFLT_MSG,
    },
  },

  data() {
    return {
      selectedWordLenValue: this.modelValue,
    };
  },

  watch: {
    modelValue(newValue) {
      this.selectedWordLenValue = newValue;
    }
  },

  methods: {
    updateWordLenSelection(event) {
      const wordLenSelected = event.target.value;
      this.selectedWordLenValue = wordLenSelected;

      this.$emit("update:modelValue", wordLenSelected);
      this.$emit("selection", wordLenSelected);
    },
  },
});
</script>

<style scoped>
#word-len-lbl {
  font-size: 1.2rem;
  color: rgb(224, 18, 128);
}

#word-len-input {
  width: 20rem;
  height: 2.5rem;
  border: 1px solid gray;
  border-radius: 0.3rem;
  box-shadow: 0.17rem 0.17rem 0.17rem grey;
}

/* Custom styles for Bootstrap medium screens (768px wide) and smaller */
@media (max-width: 768px) {
  #anagram-hunt-select-div {
    flex-direction: column;
  }
}

/* Custom styles for Bootstrap small screens (576px wide) and smaller */
@media (max-width: 576px) {
  #word-len-input {
    width: 16rem;
    text-align: center;
  }
}
</style>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>
<style src="../../public/anagram-styles/anagram-game.css"></style>
