<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <template>
          <li v-for="item in name" :key="item.first">{{ item.first }}</li>
          <!-- <v-list-item-title v-for="item in name" :key"item">{{item}}</v-list-item-title> -->
        </template>
        <!-- <v-list-item-title>Therapist1</v-list-item-title> -->
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Therapist2</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Therapist3</v-list-item-title>
        <v-list-item-subtitle>Secondary line text Lorem ipsum dolor sit amet,</v-list-item-subtitle>
        <v-list-item-subtitle>consectetur adipiscing elit.</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
import { db } from "@/main";
export default {
  name: "TherapistList",
  async mounted() {
    this.getName();
    // this.getTherapist();
  },
  data() {
    return {
      name: [],
      insurance: [],
      issues: [],
      payBy: [],
      sexuality: []
    };
  },
  methods: {
    async getTherapist() {
      let snapshot = await db.collection("therapists").get();
      let therapist = [];
      snapshot.forEach(doc => {
        let appData = doc.data();
        // console.log(appData);
        appData.id = doc.id;
        therapist.push(appData);
      });
      this.therapist = therapist;
    },

    async getName() {
      let snapshot = await db.collection("therapists").get();
      snapshot.forEach(doc => {
        let appData = doc.data().name;
        this.name.push(doc.data().name);
        console.log(appData);
      });
    }
  }

  // computed: {
  //   displayTherapist() {
  //     return;
  //   }
  // }
};

// var ref = firebase.database().ref("");
// ref.orderByChild("height").limitToFirst(2).on("child_added", function(snapshot) {
//   // This will be called exactly two times (unless there are less than two
//   // dinosaurs in the Database).

//   // It will also get fired again if one of the first two dinosaurs is
//   // removed from the data set, as a new dinosaur will now be the second
//   // shortest.
//   console.log(snapshot.key);
// });
</script>
