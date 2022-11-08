<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Take Quizzes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Take a Quiz</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button router-link="/tabs/create">Go to create a quiz</ion-button>
      <ion-button router-link="/tabs/browse">Go to browse for quizzes</ion-button>
      <div id="featured-quiz-list" class="featured-quizzes">
        <featured-quiz v-for="(quiz, ix) of featuredQuizzes" :key="ix" :quiz-data="quiz"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import FeaturedQuiz from '@/components/FeaturedQuiz.vue';

export default  defineComponent({
  name: 'TakeQuizzes',
  components: { ExploreContainer, FeaturedQuiz, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  computed: {
    featuredQuizzes() {
      return [
        {
        title: "Lord of the Rings Quiz",
        category: "Movies & TV",
        id: 1,
        questions: [
          {
            order: 1,
            text: "What's Frodo's sword called?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            answers: [
              {
                order: 1,
                text: "Wasp",
                image: null,
                correct: false,
              },
              {
                
                order: 2,
                text: "Sting",
                image: null,
                correct: true,
              },
              {
                order: 3,
                text: "Elendil",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Narsil",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 2,
            text: 'Finish this line: "One ring to rule them all, one ring to find them, one ring to..."',
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "bring them all and in the darkness bind them",
                image: null,
                correct: true,
              },
              {
                order: 2,
                text: "bring them into the fires of Mount Doom",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "bring about the destruction of the race of Men",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "bring them to hands of the Dark Lord Sauron",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 3,
            text: 'Who says: "stupid, fat, hobbits"?',
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Gandalf",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Sauron",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Gollum",
                image: null,
                correct: true,
              },
              {
                order: 4,
                text: "Aragorn",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 4,
            text: "Where is Legolas from?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Rivendell",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Rohan",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Lothlorien",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Mirkwood",
                image: null,
                correct: true,
              },
            ],
          },
          {
            order: 5,
            text: "How many members make up the fellowship of the ring?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Nine",
                image: null,
                correct: true,
              },
              {
                order: 2,
                text: "Seven",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Ten",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Eight",
                image: null,
                correct: false,
              },
            ],
          },
        ]
      },
      {
        title: "Animals Quiz",
        category: "Animals",
        id: 2,
        questions: [
          {
            order: 1,
            text: "What is the largest sea animal in the world today?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Giant Squid",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Giant Oarfish",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Deep Sea Jellyfish",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Blue Whale",
                image: null,
                correct: true,
              },
            ],
          },
          {
            order: 2,
            text: "Which of these is not a species of bears?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "South American Brown Bear",
                image: null,
                correct: true,
              },
              {
                order: 2,
                text: "Sloth Bears",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Asiatic Black Bear",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Sun Bears",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 3,
            text: "Which of the following is not true about a Platypus?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Platypus are native to Madagascar",
                image: null,
                correct: true,
              },
              {
                order: 2,
                text: "Platypus are mammals that lay eggs",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Platypus don't have any teeth",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Platypus can nurse without nipples",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 4,
            text: "What is the name for a group of Apes?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Shrewdness",
                image: null,
                correct: true,
              },
              {
                order: 2,
                text: "Pack",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Band",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Unkindness",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 5,
            text: "What is the smallest rodent?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Dwarf Hamster",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Desert Dormouse",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Silky Pocket Mouse",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Pygmy Jerboa",
                image: null,
                correct: true,
              },
            ],
          },
        ]
      },
      {
        title: "Math Quiz",
        category: "Math",
        id: 3,
        questions: [
          {
            order: 1,
            text: "Which of these is a mixed number?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "6.5",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "1/10",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "99 1/2",
                image: null,
                correct: true,
              },
              {
                order: 4,
                text: "-1",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 2,
            text: "What is the value of 5 factorial?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "120",
                image: null,
                correct: true,
              },
              {
                order: 2,
                text: "25",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "-5",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "5^5",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 3,
            text: "What's another way to write '(x + 7)^2'",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "x^2 + 49",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "(x - 7)^2",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "x^2 - 7x + 7",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "x^2 + 14x + 49",
                image: null,
                correct: true,
              },
            ],
          },
          {
            order: 4,
            text: "Which of these is the largest prime number?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "23",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "29",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "37",
                image: null,
                correct: true,
              },
              {
                order: 3,
                text: "33",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 5,
            text: "Which of these is NOT a perfect square?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "2401",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "784",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "734",
                image: null,
                correct: true,
              },
              {
                order: 4,
                text: "196",
                image: null,
                correct: false,
              },
            ],
          },
        ]
      },
      {
        title: "The Office Quiz",
        category: "Movies & TV",
        id: 4,
        questions: [
          {
            order: 1,
            text: "How many times has Meredith been divorced?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "five times",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "three times",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "eight times",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "two times",
                image: null,
                correct: true,
              },
            ],
          },
          {
            order: 2,
            text: 'In Season 2 Episode 11 "Booze Cruise," who breaks up?',
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Michael and Jan",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Jim and Katy",
                image: null,
                correct: true,
              },
              {
                order: 3,
                text: "Roy and Pam",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Ryan and Kelly",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 3,
            text: "Who complains to Toby about having to look at Oscar's toes?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Andy",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Kelly",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Pam",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Angela",
                image: null,
                correct: true,
              },
            ],
          },
          {
            order: 4,
            text: "What is the name of Oscar's dog?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Georgie",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Gerald",
                image: null,
                correct: true,
              },
              {
                order: 3,
                text: "Jerry",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Jackson",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 5,
            text: "Which of the following people never hook up together?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Pete and Erin",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Daryl and Kelly",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Meredith and Creed",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Ryan and Jan",
                image: null,
                correct: true,
              },
            ],
          },
        ]
      },
      {
        title: "History of Technology Quiz",
        category: "Technology",
        id: 5,
        questions: [
          {
            order: 1,
            text: "When did the first smart phone release?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "1996",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "2001",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "1994",
                image: null,
                correct: true,
              },
              {
                order: 4,
                text: "1999",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 2,
            text: "What was the first web browser called?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "World Wide Web",
                image: null,
                correct: true,
              },
              {
                order: 2,
                text: "Google Chrome",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Internet Explorer",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Nexus",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 3,
            text: "Which technology was first introduced most recently?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "4K UHD Displays",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Cryptocurrencies",
                image: null,
                correct: true,
              },
              {
                order: 3,
                text: "Social Media",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Autonomous Vehicles",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 4,
            text: "Which television technology is oldest?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "8k resolution",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "microLED",
                image: null,
                correct: true,
              },
              {
                order: 3,
                text: "HDMI 2.1",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Hybrid Log Gamma",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 5,
            text: "What do you call the practice of using a network of remote servers hosted on the internet to store, manage, and process data?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Cloud Computing",
                image: null,
                correct: true,
              },
              {
                order: 2,
                text: "Web Hosting",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Network as a Serive (NaaS)",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Computer Networking",
                image: null,
                correct: false,
              },
            ],
          },
        ]
      },
      {
        title: "NBA Basketball Quiz",
        category: "Sports",
        id: 6,
        questions: [
          {
            order: 1,
            text: "Which player has the most triple doubles?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Oscar Roberson",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Lebron James",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Michael Jordan",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Russel Westbrook",
                image: null,
                correct: true,
              },
            ],
          },
          {
            order: 2,
            text: "Which of the following NBA teams didn't exist in the 1999-2000 season?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Vancouver Grizzlies",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Charlotte Hornets",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "New Orleans Pelicans",
                image: null,
                correct: true,
              },
              {
                order: 4,
                text: "Seattle Supersonics",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 3,
            text: "What is the record for most 3-pointers in a single NBA game?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "12",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "14",
                image: null,
                correct: true,
              },
              {
                order: 3,
                text: "15",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "16",
                image: null,
                correct: false,
              },
            ],
          },
          {
            order: 4,
            text: "Who was the youngest player to get drafted in the NBA?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "Kobe Bryant",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Bill Willoughby",
                image: null,
                correct: false,
              },
              {
                order: 3,
                text: "Andrei Kirilenko",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Andrew Bynum",
                image: null,
                correct: true,
              },
            ],
          },
          {
            order: 5,
            text: "Which team has made it to the NBA Finals before?",
            image: null,
            likes: 0,
            dislikes: 0,
            featured: true,
            time: 300000, // 300 seconds or 5 minutes
            created_on: "Fri Oct 28 2022 21:00:00 GMT-0700 (Pacific Daylight Time)", // currently standard new Date string but may use Luxon or something else
            created_by: "kswodeck", //may change to be user_id or email address
            public: true,
            
            answers: [
              {
                order: 1,
                text: "	Denver Nuggets",
                image: null,
                correct: false,
              },
              {
                order: 2,
                text: "Indiana Pacers",
                image: null,
                correct: true,
              },
              {
                order: 3,
                text: "	Minnesota Timberwolves	",
                image: null,
                correct: false,
              },
              {
                order: 4,
                text: "Los Angeles Clippers",
                image: null,
                correct: false,
              },
            ],
          },
        ]
      },
    ]
    }
},
});
</script>
<style scoped>
#featured-quiz-list {
  display: flex;
    width: calc(250px + 20vw);
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem auto;
}
</style>