<template>
  <v-footer padless>
    <v-col class="whoweare" cols="12" id="whoweareid">
      <h1>WHO WE ARE</h1>
      <br />
      <p id="aboutustext">
        Our <a id="mission">mission </a> is to make <a id="lgbt"> LGBTQ+ </a>
        <br />friendly <a id="therapist">therapist </a> and
        <a id="mental health"> mental health<br />resources</a> more readily
        <a id="accessible"> accessible</a>
      </p>
    </v-col>
    <v-col class="howitworks" cols="12" id="worksid">
      <h1>HOW IT WORKS</h1>
      <h2>Start your journey in just a few steps</h2>

      <br />
      <v-row>
        <v-col cols="3">
          <i class="fas fa-map-marker-alt" id="mapicon"></i>

          <h3>Enter your location</h3>
        </v-col>
        <v-col cols="3">
          <i class="fas fa-filter"></i>
          <h3>Apply filters to fit your preferences</h3>
        </v-col>
        <v-col cols="3">
          <i class="fas fa-search"></i>
          <h3>
            Search through our selections of LGBTQ+ mental health resources
          </h3>
        </v-col>
        <v-col cols="3">
          <i class="fas fa-user-md"></i>
          <h3>Find your therapist!</h3>
        </v-col>
      </v-row>
      <br />
    </v-col>
    <v-col class="emergency" cols="12" id="emergencyid">
      <v-container id="text_emergency">
        <h3>
          If you are in a life threatening situation, please do not use this
          site.
        </h3>
        <br />

        <h3>
          Call (800) 273-825 or use these
          <router-link to="/emergency" id="routerlink">resources</router-link
          >for help.
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
  name: "Footer",
};
</script>

<style scoped>
#routerlink {
  padding: 1%;
  color: white;
}
#whoweareid {
  background-color: white;
  text-align: center;
  color: #434343;
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
#aboutustext {
  /* padding: 0.5px; */
  font-size: 25px;
  font-weight: 400;
}
#mission {
  color: #cc0000;
}
#lgbt {
  color: #e65722;
}
#therapist {
  color: green;
}
#accessible {
  color: purple;
}
#worksid {
  text-align: center;
  color: #434343;
}
#mapicon {
  color: red;
  size: 300%;
}
</style>
