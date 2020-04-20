<template>
  <v-container>
    <v-card class="overflow-hidden">
      <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="800">
        <Appbar />
        <h2>Nearby Therapists</h2>

        <v-row>
          <v-col cols="5" width="100%" height="100%" tile>
            <!-- <v-card class="mx-auto" tile> -->
            <TherapistList v-on:moreInfo="changeInfo" v-on:newList="updateMap" />
            <!-- </v-card> -->
          </v-col>

          <v-col cols="7">
            <gmap :mapTherapist="mapTherapist" />
            <moreInfo :message="therapist" />
          </v-col>
        </v-row>
      </v-sheet>
    </v-card>

    <!-- <Footer /> -->
  </v-container>
</template>
<script>
import gmap from "../components/gmap";
import Appbar from "../components/Appbar";
import TherapistList from "../components/therapistList";
import moreInfo from "../components/moreInfo";

export default {
  // provide:{
  //   therapist
  // },
  name: "Therapists",
  components: {
    gmap,
    Appbar,
    moreInfo,
    TherapistList
  },
  data() {
    return {
      therapist: "test",
      mapTherapist: "test"
    };
  },
  methods: {
    changeInfo(info) {
      this.therapist = info;
    },
    updateMap(info) {
      this.mapTherapist = info;
    }
  }
};
</script>
<style scoped>
#page-container {
  position: relative;
  min-height: 100vh;
}
#content-wrap {
  padding-bottom: 2.5rem; /* Footer height */
}
#buttontext {
  color: teal;
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
}
</style>

<style scoped>
#routerlink {
  padding: 1%;
  color: white;
}

#emergencyid {
  background-color: #3c78d8;
}
#text_emergency {
  text-align: center;
  color: white;
}
#footername {
  color: navy;
}
</style>
