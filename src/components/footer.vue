<template>
  <v-footer padless>
    <v-col class="whoweare" cols="12" id="whoweareid">
      <br />
      <h1>WHO WE ARE</h1>
      <p id="ourmission">
        Our
        <a id="mission">mission</a> is to make
        <a id="lgbt">LGBTQ+</a>
        <br />friendly <a id="therapist">therapist</a> and
        <a id="mental health">
          mental health
          <br />resources
        </a>
        more readily
        <a id="accessible">accessible</a>
      </p>
    </v-col>
    <v-col class="howitworks" cols="12" id="worksid">
      <br />
      <h1 id="howitworks">HOW IT WORKS</h1>
      <br />
      <p id="subtitle">Start your journey in just a few steps</p>

      <br />
      <v-row>
        <v-col cols="3">
          <i class="fas fa-map-marker-alt" id="mapicon"></i>
          <br />
          <br />
          <br />
          <h3 class="steps">
            Enter your
            <br />location
          </h3>
        </v-col>
        <v-col cols="3">
          <i class="fas fa-filter" id="filtericon"></i>
          <br />
          <br />
          <br />

          <h3 class="steps">
            Apply filters to fit your
            <br />preferences
          </h3>
        </v-col>
        <v-col cols="3">
          <i class="fas fa-search" id="searchicon"></i>
          <br />
          <br />
          <br />
          <h3 class="steps">
            Search through our
            <br />selections of LGBTQ+ <br />mental health resources
          </h3>
        </v-col>
        <v-col cols="3">
          <i class="fas fa-user-md " id="doctoricon"></i>
          <br />
          <br />
          <br />
          <h3 class="steps">Find your therapist!</h3>
        </v-col>
      </v-row>
      <br />
    </v-col>
    <v-col class="emergency" cols="12" id="emergencyid">
      <v-container id="text_emergency">
        <h3>If you are in a life threatening situation,</h3>
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
#ourmission {
  font-size: 25px;
}
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
  font-size: 50px;
  font-weight: 400;
  padding-bottom: 40px;
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
  font-size: 300%;

  color: #cc0000;
}
#filtericon {
  font-size: 300%;

  color: #dd4f1a;
}
#searchicon {
  font-size: 300%;

  color: #6aa84f;
}
#doctoricon {
  font-size: 300%;
  color: #674ea7;
}
#subtitle {
  font-size: 25px;
  font-weight: 400;
}
@media only screen and (max-width: 600px) {
  #filtericon {
    font-size: 90%;
  }
  #mapicon {
    font-size: 90%;
  }
  #searchicon {
    font-size: 90%;
  }

  #doctoricon {
    font-size: 90%;
  }
  .steps {
    font-size: 80%;
  }
  #subtitle {
    font-size: 90%;
  }
  #howitworks {
    font-size: 95%;
  }
  .whoweare {
    font-size: 50%;
  }
  #ourmission {
    font-size: 20px;
  }
}
</style>
