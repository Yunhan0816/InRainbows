<template>
  <v-container grid-list-xl>
    <!-- <v-card class="mx-auto" outlined>
      <v-list-item-title class="headline mb-1">Therapists in Boston</v-list-item-title>
    </v-card>-->
    <h2 id="title" style="color:#3b3b3b ">Therapists in Boston</h2>

    <v-card class="mx-auto" outlined id="filtercard">
      <v-card-title id="findtherapists" style="color: #3b3b3b">
        <v-spacer></v-spacer>Personalize therapists <br />based on your
        preferences
        <v-spacer></v-spacer>
      </v-card-title>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            rounded
            @click="showInsurance"
            class="filterbutton"
            @mouseover="insuranceModal = true"
            @mouseout="insuranceModal = false"
          >
            Insurance
            <i class="fas fa-arrow-down"></i>
          </v-btn>
        </template>
        <span>Find therapists who fit on your insurance</span>
      </v-tooltip>

      <v-card v-if="insurance == true">
        <div class="col">
          <div v-for="ins in insuranceList" :key="ins">
            <input
              type="checkbox"
              :id="ins"
              :value="ins"
              v-model="checkedInsurance"
            />
            <label :for="ins">{{ ins }}</label>
          </div>
          <br />
          <span>You have chosen: {{ parseArr(checkedInsurance) }}</span>
          <br />
          <v-btn rounded @click="applyInsurance">Apply</v-btn>
        </div>
        <div class="col">
          <strong>Therapists in chosen Insurance(s)</strong>
        </div>
      </v-card>

      <!-- PAYBY filter -->
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" rounded @click="showPayBy" class="filterbutton">
            Pay By
            <i class="fas fa-arrow-down"></i>
          </v-btn>
        </template>
        <span>Find therapists accepts your payment methods</span>
      </v-tooltip>
      <v-card v-if="payby == true">
        <div class="col">
          <div v-for="pay in paybyList" :key="pay">
            <input
              type="checkbox"
              :id="pay"
              :value="pay"
              v-model="checkedPayby"
            />
            <label :for="pay">{{ pay }}</label>
          </div>
          <br />
          <span>You have chosen: {{ parseArr(checkedPayby) }}</span>
          <br />
          <v-btn rounded @click="applyPayby">Apply</v-btn>
        </div>
        <div class="col">
          <strong>Therapists in chosen Payby(s)</strong>
        </div>
      </v-card>

      <!-- COMMUNITY filter -->
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            rounded
            @click="showCommunities"
            class="filterbutton"
          >
            Communities
            <i class="fas fa-arrow-down"></i>
          </v-btn>
        </template>
        <span
          >Find therapists who ally with your sexualities and communities</span
        >
      </v-tooltip>
      <br />
      <br />

      <v-card v-if="communities == true">
        <div class="col">
          <div v-for="com in communityList" :key="com">
            <input
              type="checkbox"
              :id="com"
              :value="com"
              v-model="checkedCommunities"
            />
            <label :for="com">{{ com }}</label>
            <br />

            <br />
          </div>
          <br />
          <span>You have chosen: {{ parseArr(checkedCommunities) }}</span>
          <br />
          <v-btn rounded @click="applyCommunities">Apply</v-btn>
        </div>
        <div class="col">
          <strong>Therapists in chosen communitie(s)</strong>
        </div>
      </v-card>

      <div style="margin-left:10%; margin-right:10%; margin-bottom: 5%">
        <v-text-field
          id="zipcodeplace"
          v-model="userZipcode"
          label="Enter zip code to find therapists near you"
        ></v-text-field>
        <v-btn small @click="applyLocation">
          <i class="fas fa-search"></i>
        </v-btn>
      </div>
    </v-card>

    <v-layout v-bind="binding">
      <v-card v-for="p in paginatedData" :key="p.name">
        <!-- <v-card dark color="primary">{{p.name.first + " " + p.name.last}}</v-card> -->
        <v-card color="white" dark>
          <v-card-title id="headline">
            {{ p.name.first + " " + p.name.last }}
          </v-card-title>
          <v-card-text>
            <div class="normaltext">
              {{ p.address.city + ", " + p.address.state }}
            </div>
            <!-- </v-card-text> -->
            <!-- <v-card-text> -->
            <b id="card-text">Title:</b>
            <div class="normaltext">{{ parseArr(p.titles) }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn id="moreinfobtn" rounded v-on:click="moreInfo(p)"
              >More Info</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-card>
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
import gmapsInit from "../gmaps";

import { db } from "@/main";
export default {
  name: "TherapistList",
  async mounted() {
    this.getTherapist();
    const google = await gmapsInit();
    this.google = google;
    this.geocoder = new google.maps.Geocoder();
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
      geocoder: Object,

      google: Object,
      paybyList: ["Cash", "Check", "Visa", "PayPal", "Health Savings Account"],
      communityList: [
        "HIV / AIDS Allied",
        "Queer Allied",
        "Body Positivity",
        "Transgender Allied",
        "Gay Allied",
        "Lesbian Allied",
        "Bisexual Allied",
        "Open Relationships Non-Monogamy",
        "Veterans",
        "Kink Allied",
        "Sex Worker Allied",
        "Intersex Allied",
        "Non-Binary Allied",
        "Cancer",
      ],
      insuranceList: [
        "BlueCross and BlueShield",
        "Cigna",
        "Aetna",
        "Anthem",
        "Tufts",
        "Tufts PPO",
        "Aetna PPO",
        "Harvard Pilgrim",
      ],
      userZipcode: "",
      userLat: "",
      userLng: "",

      therapist: [],
      insuranceModal: false,
      pageNumber: 0,
      insurance: false,
      payby: false,
      communities: false,
      checkedCommunities: [],
      checkedPayby: [],
      checkedInsurance: [],
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
    applyInsurance() {
      if (this.selectedTherapistI != []) {
        this.therapist = this.selectedTherapistI;
      }
      if (this.selectedTherapistI == []) {
        console.log("empty list");
      }
      console.log(this.therapist);
      this.insurance = !this.insurance;
      alert("Succeessfully applied insurance preferences!");
    },
    applyPayby() {
      if (this.selectedTherapistP != []) {
        this.therapist = this.selectedTherapistP;
      }
      if (this.selectedTherapistP == []) {
        console.log("empty list");
      }
      console.log(this.therapist);
      this.payby = !this.payby;
      alert("Succeessfully applied payment method preferences!");
    },
    applyCommunities() {
      if (this.selectedTherapistC != []) {
        this.therapist = this.selectedTherapistC;
      }
      if (this.selectedTherapistC == []) {
        console.log("empty list");
      }
      console.log(this.therapist);
      this.communities = !this.communities;
      alert("Succeessfully applied community preferences!");
    },
    applyLocation() {
      this.userLat = this.zipcodeToLat;
      this.userLng = this.zipcodeToLng;
      console.log("applying zip code");
      console.log(this.userLat);
      console.log(this.userLng);

      alert("Successfully applied location preferences!");
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
      this.$emit("moreInfo", therapist);
    },
    callGeocoder(zipcode) {
      var address = zipcode;
      this.geocoder.geocode(
        {
          address: "zipcode" + address,
        },
        async function(results) {
          return await results[0].geometry.location.lat();
        }
      );
    },
  },
  asyncComputed: {
    async zipcodeToLat() {
      var zipcode = this.userZipcode;
      var lat = "";
      // var address = zipcode;
      lat = await this.callGeocoder(zipcode);
      console.log(lat);
      return lat;
      // this.geocoder.geocode({ address: "zipcode " + address },async function(
      //   results,
      //   status
      // ) {
      //   if (status == this.google.maps.GeocoderStatus.OK) {
      //     lat = await results[0].geometry.location.lat();
      //     console.log("status is OK");
      //   }
      // });
      // let result = lat;
      // console.log("Lattitue is:");
      // console.log(lat);
      // return result;
    },
  },
  computed: {
    zipcodeToLng: function() {
      var zipcode = this.userZipcode;
      var lng = "";
      var address = zipcode;
      this.geocoder.geocode({ address: "zipcode " + address }, function(
        results,
        status
      ) {
        if (status == this.google.maps.GeocoderStatus.OK) {
          lng = results[0].geometry.location.lng();
          console.log("Longtitue is:");
          console.log(lng);
        }
      });
      console.log(lng);
      return lng;
    },

    locationFilteredTherapist: function() {
      console.log("filtering location");
      return this.therapist;
      // return this.therapist.filter(function(therapy) {});
    },
    selectedTherapistC: function() {
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
      }, this);
    },
    selectedTherapistP: function() {
      return this.therapist.filter(function(therapy) {
        let intersection = therapy.payBy.filter((x) =>
          this.checkedPayby.includes(x)
        );
        console.log(intersection);
        if (intersection.length == 0) {
          console.log("empty!");
          console.log(therapy);
        } else {
          console.log("not empty!");
          return therapy;
        }
      }, this);
    },
    selectedTherapistI: function() {
      return this.therapist.filter(function(therapy) {
        let intersection = therapy.insurance.filter((x) =>
          this.checkedInsurance.includes(x)
        );
        console.log(intersection);
        if (intersection.length == 0) {
          console.log("empty!");
          console.log(therapy);
        } else {
          console.log("not empty!");
          return therapy;
        }
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
      this.$emit("newList", this.therapist.slice(start, end));
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
.downarrow {
  padding-left: 3px;
}
#headline {
  color: black;
}
.normaltext {
  color: #3b3b3b;
}
.filterbutton {
  font-size: 70%;
  color: #3b3b3b;
}
.mx-auto {
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .filterbutton {
    font-size: 50%;
  }
  #headline {
    font-size: 60%;
  }
  .normaltext {
    font-size: 70%;
  }
  #findtherapists {
    font-size: 60%;
  }
  #zipcodeplace {
    font-size: 30%;
  }
  #moreinfobtn {
    font-size: 50%;
  }
  #title {
    font-size: 70%;
  }
}
</style>
