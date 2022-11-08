<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Create Quizzes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Create a Quiz</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button router-link="/tabs/take">Go to take quiz</ion-button>
      <ion-button router-link="/tabs/create">Go to create a quiz</ion-button>
      <explore-container name="Create Quizzes" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'CreateQuizzes',
  components: { ExploreContainer, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
