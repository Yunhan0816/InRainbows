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
        <!-- <v-card dark color="primary">{{p.name.first + " " + p.name.last}}</v-card> -->
        <v-card color="primary" dark>
          <v-card-title class="headline">{{p.name.first + " " + p.name.last}}</v-card-title>
          <v-card-subtitle>{{p.address.city + ", " + p.address.state}}</v-card-subtitle>
          <v-card-text>
            <b>Title:</b>
            {{parseArr(p.titles)}}
            <br />
            <br />
            <b>Insurance:</b>
            {{parseArr(p.insurance)}}
            <br />
            <br />
            <b>Pay By:</b>
            {{parseArr(p.payBy)}}
            <br />
            <br />
            <b>Communities:</b>
            {{parseArr(p.communities)}}
          </v-card-text>
          <v-card-actions>
            <v-btn text>More Info</v-btn>
          </v-card-actions>
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
    this.getTherapist();
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      therapist: [],
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
        appData.id = doc.id;
        therapist.push(appData);
      });
      this.therapist = therapist;
    },
    parseArr(arr) {
      let res = "";
      for (let i = 0; i < arr.length; i++) {
        res = res + arr[i] + ", ";
      }
      if (res.length != 0) {
        return res.substring(0, res.length - 2);
      } else {
        return "N/A";
      }
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
};
</script>
