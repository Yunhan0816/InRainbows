<template>
  <v-container>
    <Appbar />
    <h2>Nearby LGBTQ+ Events</h2>
    <gmap />
    <Footer />
  </v-container>
</template>
<script>
import gmap from "../components/gmap";
import Appbar from "../components/Appbar";
import Footer from "../components/footer";
export default {
  name: "Events",
  components: {
    gmap,
    Appbar,
    Footer
  }
};
</script>
<style scoped>
#buttontext {
  color: teal;
}
</style>
