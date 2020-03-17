<template>
  <v-container>
    <h2>Nearby LGBTQ+ Events</h2>
    <gmap />

    <v-card height="150">
      <v-footer absolute class="font-weight-medium">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>In Rainbows</strong>
        </v-col>
      </v-footer>
    </v-card>
  </v-container>
</template>
<script>
import gmap from "../components/gmap";
export default {
  name: "Events",
  components: {
    gmap
  }
};
</script>
<style scoped>
#buttontext {
  color: teal;
}
</style>