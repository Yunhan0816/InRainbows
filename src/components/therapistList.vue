<template>
  <!-- <v-card> -->
  <!-- <v-flex d-flex>
    <v-layout wrap>
      <v-flex md4 v-for="item in therapist" :key="item.name">
        <v-card class="card-container">{{item.name.first}}</v-card>
      </v-flex>
    </v-layout>
  </v-flex>-->
  <!-- -->
  <!-- <v-flex>
  <v-layout wrap>-->

  <v-container grid-list-xl>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item-title class="headline mb-1">Therapists in Boston</v-list-item-title>
    </v-card>
    <v-layout v-bind="binding">
      <v-flex v-for="p in paginatedData" :key="p.name">
        <v-card dark color="primary">
          <p>Name: {{p.name.first}} {{p.name.last}}</p>
          <p>Title: {{p.titles[0]}}</p>
          <!-- <p>Insurance: {{p.insurance}}</p> -->
        </v-card>
      </v-flex>
    </v-layout>
    <button :disabled="pageNumber === 0" @click="prevPage">Previous</button>
    <v-spacer></v-spacer>
    <button :disabled="pageNumber >= pageCount -1" @click="nextPage">Next</button>
  </v-container>
</template>
<script>
import { db } from "@/main";
export default {
  name: "TherapistList",
  async mounted() {
    // this.getName();
    this.getTherapist();
  },
  props: {
    // listData: {
    //   type: Array,
    //   required: false,
    //   default: this.therapist
    // },
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      therapist: [],
      // name: [],
      // insurance: [],
      // issues: [],
      // payBy: [],
      // sexuality: []
      pageNumber: 0
    };
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    async getTherapist() {
      let snapshot = await db.collection("therapists").get();
      let therapist = [];
      snapshot.forEach(doc => {
        let appData = doc.data();
        console.log(appData);
        appData.id = doc.id;
        therapist.push(appData);
      });
      this.therapist = therapist;
    },

    async getName() {
      let snapshot = await db.collection("therapists").get();
      snapshot.forEach(doc => {
        // let appData = doc.data().name;
        this.name.push(doc.data().name);
        // console.log(appData);
      });
    }
  },
  computed: {
    pageCount() {
      let l = this.therapist.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.therapist.slice(start, end);
    },
    binding() {
      const binding = {};

      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true;

      return binding;
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
