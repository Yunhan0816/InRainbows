<template>
  <v-container>
    <Appbar />
    <h2>Nearby LGBTQ+ Events</h2>
    <v-row>
      <v-col cols="5">
        <v-card class="mx-auto" max-width="400" tile> <EventList /> </v-card
      ></v-col>
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
import EventList from "../components/eventList";
export default {
  name: "Events",
  components: {
    gmap,
    Appbar,
    Footer,
    EventList
  }
};
</script>
<style scoped>
#buttontext {
  color: teal;
}
</style>
