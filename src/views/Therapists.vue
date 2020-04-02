<template>
  <v-container>
    <Appbar />
    <h2>Nearby Therapists</h2>

    <v-row>
      <v-col cols="5">
        <v-card class="mx-auto" max-width="400" tile>
          <TherapistList />
        </v-card>
      </v-col>

      <v-col cols="6">
        <gmap />
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>
<script>
import gmap from "../components/gmap";
import Appbar from "../components/Appbar";
import Footer from "../components/footer";
import TherapistList from "../components/therapistList";
export default {
  name: "Therapists",
  components: {
    gmap,
    Appbar,
    Footer,
    TherapistList
  }
};
</script>
<style scoped>
#buttontext {
  color: teal;
}
</style>
