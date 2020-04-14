<template>
  <v-container grid-list-xl>
    <!-- <v-card class="mx-auto" outlined>
      <v-list-item-title class="headline mb-1">Therapists in Boston</v-list-item-title>
    </v-card>-->
    <h2 style="color:#3b3b3b ">Therapists in Boston</h2>
    <v-card class="mx-auto" outlined id="filtercard">
      <v-btn rounded @click="showInsurance">Insurance</v-btn>
      <v-card v-if="insurance==true">
        <v-checkbox v-model="selected" label="BlueCross BlueShield"></v-checkbox>
        <v-checkbox v-model="selected" label="Aetna"></v-checkbox>
        <v-checkbox v-model="selected" label="Tufts"></v-checkbox>
        <v-btn rounded @click="showInsurance">Apply</v-btn>
        <br />
        <br />
      </v-card>

      <v-btn rounded @click="showPayBy">Pay By</v-btn>
      <v-card v-if="payby==true">
        <v-checkbox v-model="selected" label="Cash"></v-checkbox>
        <v-checkbox v-model="selected" label="Check"></v-checkbox>
        <v-checkbox v-model="selected" label="Health Savings Account"></v-checkbox>
        <v-checkbox v-model="selected" label="Visa"></v-checkbox>
        <v-checkbox v-model="selected" label="Paypal"></v-checkbox>
        <v-btn rounded @click="showPayBy">Apply</v-btn>
        <br />
        <br />
      </v-card>

      <v-btn rounded @click="showSpecialties">Specialties</v-btn>
      <v-card v-if="specialties==true">
        <v-checkbox v-model="selected" label="Anxiety"></v-checkbox>
        <v-checkbox v-model="selected" label="Transgender"></v-checkbox>
        <v-checkbox v-model="selected" label="Bipolar Disorder"></v-checkbox>
        <v-checkbox v-model="selected" label="Relationship Issues"></v-checkbox>
        <v-checkbox v-model="selected" label="Self-Harming"></v-checkbox>
        <v-btn rounded @click="showSpecialties">Apply</v-btn>
        <br />
        <br />
      </v-card>
    </v-card>

    <v-layout v-bind="binding">
      <v-flex v-for="p in paginatedData" :key="p.name">
        <!-- <v-card dark color="primary">{{p.name.first + " " + p.name.last}}</v-card> -->
        <v-card color="white" dark>
          <v-card-title class="headline">{{p.name.first + " " + p.name.last}}</v-card-title>
          <v-card-text>
            <div class="normaltext">{{p.address.city + ", " + p.address.state}}</div>
          </v-card-text>
          <v-card-text>
            <b id="card-text">Title:</b>
            <div class="normaltext">{{parseArr(p.titles)}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn rounded v-on:click="moreInfo(p)">More Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <button :disabled="pageNumber === 0" @click="prevPage">
      <v-icon>fas fa-arrow-left</v-icon>
    </button>
    <button :disabled="pageNumber >= pageCount -1" @click="nextPage" style="float:right">
      <v-icon>fas fa-arrow-right</v-icon>
    </button>
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
      this.$emit("messageFromChild", therapist);
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

<style scoped>
.headline {
  color: black;
}
.normaltext {
  color: #3b3b3b;
}
</style>