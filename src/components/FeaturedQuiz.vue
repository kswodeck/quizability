<template>
  <div v-if="quizData" id="featured-quiz-container">
    
    <ion-button :router-link="`/tabs/take/quiz/${quizData.id}`" class="featured-quiz-button">
      <div class="featured-quiz-div">
        <h2 class="quiz-heading">{{ quizData.title }}</h2><br>
      <span class="quiz-category">{{ quizData.category}}</span>
      </div>
    </ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'featured-quiz',
  components: { IonButton},
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
      white-space: pre-wrap;
      .featured-quiz-div {
        .quiz-heading {
          font-size: calc(1rem + 0.6vw);

        }
        .quiz-category {
          font-size: calc(0.7rem + 0.4vw);
        }
      }
    }
}


</style>
