<template>
  <v-container grid-list-xl>
    <v-card class="mx-auto" outlined>
      <v-list-item-title class="headline mb-1">Therapists in Boston</v-list-item-title>
    </v-card>
    <v-card class="mx-auto" outlined>
      <v-btn @click="showInsurance">Insurance</v-btn>
      <v-card v-if="insurance==true">
        <v-checkbox v-model="selected" label="BlueCross BlueShield"></v-checkbox>
        <v-checkbox v-model="selected" label="Aetna"></v-checkbox>
        <v-checkbox v-model="selected" label="Tufts"></v-checkbox>
        <v-btn @click="showInsurance">Apply</v-btn>
        <br />
        <br />
      </v-card>

      <v-btn @click="showPayBy">Pay By</v-btn>
      <v-card v-if="payby==true">
        <v-checkbox v-model="selected" label="Cash"></v-checkbox>
        <v-checkbox v-model="selected" label="Check"></v-checkbox>
        <v-checkbox v-model="selected" label="Health Savings Account"></v-checkbox>
        <v-checkbox v-model="selected" label="Visa"></v-checkbox>
        <v-checkbox v-model="selected" label="Paypal"></v-checkbox>
        <v-btn @click="showPayBy">Apply</v-btn>
        <br />
        <br />
      </v-card>

      <v-btn @click="showSpecialties">Specialties</v-btn>
      <v-card v-if="specialties==true">
        <v-checkbox v-model="selected" label="Anxiety"></v-checkbox>
        <v-checkbox v-model="selected" label="Transgender"></v-checkbox>
        <v-checkbox v-model="selected" label="Bipolar Disorder"></v-checkbox>
        <v-checkbox v-model="selected" label="Relationship Issues"></v-checkbox>
        <v-checkbox v-model="selected" label="Self-Harming"></v-checkbox>
        <v-btn @click="showSpecialties">Apply</v-btn>
        <br />
        <br />
      </v-card>
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
            <!-- <br />
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
            {{parseArr(p.communities)}}-->
            </v-card-text>
          <v-card-actions>
            <v-btn v-on:click="moreInfo(p)">More Info</v-btn>
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
      default: 4
    }
  },
  data() {
    return {
      therapist: [],
      pageNumber: 0,
      insurance: false,
      payby: false,
      specialties: false
    };
  },
  methods: {
    showInsurance() {
      this.insurance = !this.insurance;
    },
    showPayBy() {
      this.payby = !this.payby;
    },
    showSpecialties() {
      this.specialties = !this.specialties;
    },
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
    },
    moreInfo(therapist) {
      this.$emit("messageFromChild", therapist)
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
