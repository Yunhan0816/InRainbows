<template>
  <v-container>
    <h2>Nearby Therapists</h2>
    <gmap />
    <router-link :to="{ name: 'assault' }">
      <v-layout align-center justify-center>
        <v-btn
          id="findassualt"
          rounded
          type="danger"
          align="center"
          @click="toggleLable"
          x-large="true"
        >
          <a id="buttontext">Show Me Map of Therapist resources nearby</a>
        </v-btn>
      </v-layout>
    </router-link>
  </v-container>
</template>
<script>
import gmap from "../components/gmap";
export default {
  name: "Therapists",
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