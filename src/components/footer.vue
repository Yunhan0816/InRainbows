<template>
  <v-footer padless>
    <v-col class="emergency" cols="12" id="emergencyid">
      <v-container id="text_emergency">
        <h3>If you are in a life threatening situation, please do not use this site.</h3>
        <br />

        <h3>
          Call (800) 273-825 or use these
          <router-link to="/emergency" id="routerlink">resources</router-link>for help.
        </h3>
        <br />
        <h3>Contact us</h3>
      </v-container>
    </v-col>
    <v-col class="text-center" cols="12" id="footername">
      {{ new Date().getFullYear() }} —
      <strong>In Rainbows</strong>
    </v-col>
  </v-footer>
</template>

<script scoped>
export default {
  name: "Footer"
};
</script>

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
