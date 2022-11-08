<template>
  <div v-if="quizData" id="featured-quiz-container">
    <button class="featured-quiz-button">
      <h2 class="quiz-heading">{{ quizData.title }}</h2>
<span class="quiz-category">{{ quizData.category}}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'featured-quiz',
  props: {
    quizData: {
      type: Object,
    }
  },
  computed: {

},
methods: {

},
});
</script>

<style lang="scss" scoped>
#featured-quiz-container {
  width: 49%;
  margin: 1% 0;
    .featured-quiz-button {
      width: 100%;
      height: calc(100px + 15vh);
      max-height: 20vh;
    }
}


</style>
