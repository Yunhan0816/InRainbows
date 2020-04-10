<template>
  <v-container>
    <Appbar />
    <h2>Nearby Therapists</h2>

    <v-row>
      <v-col cols="5" width="100%" height="100%" tile>
        <!-- <v-card class="mx-auto" tile> -->
        <TherapistList />
        <!-- </v-card> -->
      </v-col>

      <v-col cols="7">
        <gmap />
        <moreInfo />
      </v-col>
    </v-row>
    <!-- <Footer /> -->
  </v-container>
</template>
<script>
import gmap from "../components/gmap";
import Appbar from "../components/Appbar";
// import Footer from "../components/footer";
import TherapistList from "../components/therapistList";
import moreInfo from "../components/moreInfo";
export default {
  name: "Therapists",
  components: {
    gmap,
    Appbar,
    moreInfo,
    // Footer,
    TherapistList
  }
};
</script>
<style scoped>
#buttontext {
  color: teal;
}
</style>
