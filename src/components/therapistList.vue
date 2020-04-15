<template>
  <v-container grid-list-xl>
    <!-- <v-card class="mx-auto" outlined>
      <v-list-item-title class="headline mb-1">Therapists in Boston</v-list-item-title>
    </v-card>-->
    <h2 style="color:#3b3b3b ">Therapists in Boston</h2>
    <v-card class="mx-auto" outlined id="filtercard">
      <v-btn rounded @click="showInsurance" class="filterbutton"
        >Insurance</v-btn
      >
      <v-card v-if="insurance == true">
        <v-checkbox
          v-model="selected"
          label="BlueCross BlueShield"
        ></v-checkbox>
        <v-checkbox v-model="selected" label="Aetna"></v-checkbox>
        <v-checkbox v-model="selected" label="Tufts"></v-checkbox>
        <v-btn rounded @click="showInsurance">Apply</v-btn>
        <br />
        <br />
      </v-card>

      <v-btn rounded @click="showPayBy" class="filterbutton">Pay By</v-btn>
      <v-card v-if="payby == true">
        <v-checkbox v-model="selected" label="Cash"></v-checkbox>
        <v-checkbox v-model="selected" label="Check"></v-checkbox>
        <v-checkbox
          v-model="selected"
          label="Health Savings Account"
        ></v-checkbox>
        <v-checkbox v-model="selected" label="Visa"></v-checkbox>
        <v-checkbox v-model="selected" label="Paypal"></v-checkbox>
        <v-btn rounded @click="showPayBy">Apply</v-btn>
        <br />
        <br />
      </v-card>

      <v-btn rounded @click="showCommunities" class="filterbutton"
        >Communities</v-btn
      >
      <v-card v-if="communities == true">
        <!-- <v-checkbox v-model="selected" label="Queer Allied"></v-checkbox>
        <v-checkbox v-model="selected" label="Transgender Allied"></v-checkbox>
        <v-checkbox v-model="selected" label="Bisexual Allied"></v-checkbox>
        <v-checkbox v-model="selected" label="Gay Allied"></v-checkbox>
        <v-checkbox v-model="selected" label="Lesbian Allied"></v-checkbox>
        <v-checkbox v-model="selected" label="HIV / AIDS Allied"></v-checkbox>

        <v-btn rounded @click="applyCommunities">Apply</v-btn>
        <br />
        <br />
      </v-card> -->
        <div class="col">
          <div v-for="com in communityList" :key="com">
            <input
              type="checkbox"
              :id="com"
              :value="com"
              v-model="checkedCommunities"
            />
            <label :for="com">{{ com }}</label>
          </div>
          <br />
          <span>You have chosen: {{ checkedCommunities }}</span>
          <br />
          <v-btn rounded @click="applyCommunities">Apply</v-btn>
        </div>
        <div class="col">
          <strong>Therapists in chosen communitie(s)</strong>

          <!-- <ul>
            <li>Test</li>
            <li v-for="t in selectedTherapist" :key="t">
              communities: {{ t.communities }} | name:
              {{ t.name.first }}
            </li>
          </ul> -->
        </div>
      </v-card>
    </v-card>

    <v-layout v-bind="binding">
      <v-flex v-for="p in paginatedData" :key="p.name">
        <!-- <v-card dark color="primary">{{p.name.first + " " + p.name.last}}</v-card> -->
        <v-card color="white" dark>
          <v-card-title class="headline">{{
            p.name.first + " " + p.name.last
          }}</v-card-title>
          <v-card-text>
            <div class="normaltext">
              {{ p.address.city + ", " + p.address.state }}
            </div>
          </v-card-text>
          <v-card-text>
            <b id="card-text">Title:</b>
            <div class="normaltext">{{ parseArr(p.titles) }}</div>
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
    <button
      :disabled="pageNumber >= pageCount - 1"
      @click="nextPage"
      style="float:right"
    >
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
      default: 4,
    },
  },
  data() {
    return {
      communityList: [
        "Queer Allied",
        "Transgender Allied",
        "Gay Allied",
        "Lesbian Allied",
        "Bisexual Allied",
        "HIV / AIDS Allied",
      ],
      therapist: [],
      pageNumber: 0,
      insurance: false,
      payby: false,
      communities: false,
      checkedCommunities: [],
    };
  },
  methods: {
    showInsurance() {
      this.insurance = !this.insurance;
    },
    showPayBy() {
      this.payby = !this.payby;
    },
    showCommunities() {
      this.communities = !this.communities;
    },
    applyCommunities() {
      if (this.selectedTherapist != []) {
        this.therapist = this.selectedTherapist;
      }
      if (this.selectedTherapist == []) {
        console.log("empty list");
      }
      console.log(this.therapist);
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
      snapshot.forEach((doc) => {
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
    },
  },
  computed: {
    selectedTherapist: function() {
      return this.therapist.filter(function(therapy) {
        let intersection = therapy.communities.filter((x) =>
          this.checkedCommunities.includes(x)
        );
        console.log(intersection);
        if (intersection.length == 0) {
          console.log("empty!");
          console.log(therapy);
        } else {
          console.log("not empty!");
          return therapy;
        }
        // let result = therapy.communities.includes(this.checkedCommunities);
        // console.log(result);
        // return result;
        // let result = [];
        // for (let i = 0; i < this.checkedCommunities.length; i++) {
        //   result.push({
        //     key: therapy,
        //     value: therapy.communities.includes(this.checkedCommunities[i]),
        //   });
        // }
        // let selectedT = [];
        // for (let i = 0; i < result.length; i++) {
        //   if (result[i].value == true) {
        //     selectedT.push(result[i].key);
        //   }
        // }
        // console.log(selectedT);
        // return selectedT;
      }, this);
    },

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
    },
  },
};
</script>

<style scoped>
.headline {
  color: black;
}
.normaltext {
  color: #3b3b3b;
}
.filterbutton {
  color: #3b3b3b;
}
</style>
