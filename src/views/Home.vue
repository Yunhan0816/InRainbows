<template>
  <v-container>
    <v-card class="overflow-hidden">
      <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="800">
        <Appbar />

        <v-parallax
          height="580"
          src="https://images.unsplash.com/photo-1553242072-345b34e7b55b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
        >
          <div class="layer"></div>>
          <br />
          <br />
          <br />
          <br />
          <br />

          <v-container class="card" style="height: 800px; max-width: 550px; margin-right:50%">
            <v-card class="mx-auto" id="roundedcard">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-3"></div>
                  <v-list-item-title
                    class="mb-1"
                    style="font-size:25px; font-weight:bold; color: #434343;margin: 10px"
                  >
                    Connect with LGBTQ+ friendly
                    <br />therapists near you
                  </v-list-item-title>
                  <!-- <v-list-item-title class="headline mb-1">events, and communities</v-list-item-title> -->
                </v-list-item-content>

                <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
              </v-list-item>
              <div class="text" style="margin: 10px">
                <b style="padding-right:7px;">Show me</b>
                <b id="therapist">Therapists</b>
                <br />
                <b style="padding-right:7px;">In</b>
                <b id="boston">Boston</b>
                <br />
              </div>
              <v-btn id="gobutton">
                <router-link :to="{ name: 'therapy' }" id="gorouter">
                  <!-- <v-btn class="gobutton">Go</v-btn> -->
                  <div>
                    <a id="go">Go</a>
                  </div>
                  <!-- <v-icon>fas fa-arrow-right</v-icon> -->
                </router-link>
              </v-btn>
              <br />
              <br />

              <!-- </v-card-actions> -->
            </v-card>
          </v-container>
          <!-- <v-footer padless>
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>In Rainbows</strong>
          </v-col>
          </v-footer>-->
        </v-parallax>
        <Footer />
      </v-sheet>
    </v-card>
  </v-container>
</template>
<script>
import Appbar from "../components/Appbar";
import Footer from "../components/footer";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  components: {
    Appbar,
    Footer
  }
};
</script>
<style scoped>
.text {
  text-align: left;
  padding: 30px;
  font-size: 20px;
}

#therapist {
  color: #3c78d8;
}
#boston {
  color: #3c78d8;
}
.layer {
  background-color: rgba(239, 240, 241, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#go {
  font-weight: 1000;
  color: white;
}
#gobutton {
  text-decoration: none;
  background-color: #3c78d8;
  float: right;
  margin-right: 30px;
}
#gorouter {
  text-decoration: none;
}
#roundedcard {
  border-radius: 30px;
  color: #434343;
}
#gobutton {
  border-radius: 10px;
}
</style>
