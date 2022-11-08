<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/take">
          <ion-icon :icon="triangle" />
          <ion-label>Take Quizzes</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/create">
          <ion-icon :icon="ellipse" />
          <ion-label>Create Quizzes</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/browse">
          <ion-icon :icon="square" />
          <ion-label>Browse Quizzes</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
});
</script>
