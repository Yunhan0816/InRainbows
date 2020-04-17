<template>
  <v-card class="overflow-hidden">
    <Appbar />

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="800"
    >
      <v-parallax
        height="800"
        src="https://images.unsplash.com/photo-1553242072-345b34e7b55b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
      >
        <div class="layer"></div>
        >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />

        <v-container class="card" style="height: 800px; max-width: 700px">
          <v-card class="mx-auto">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-3"></div>
                <v-list-item-title class="headline mb-1"
                  >Connect with LGBTQ+ friendly mental health
                  resources</v-list-item-title
                >
                <!-- <v-list-item-title class="headline mb-1">events, and communities</v-list-item-title> -->
              </v-list-item-content>

              <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
            </v-list-item>
            <div class="text">
              <b>Show me...</b>
              <b id="therapist">Therapist</b>
              <br />
              <br />
              <b>In...</b>
              <b id="boston">Boston</b>
              <br />
              <br />
            </div>
            <router-link :to="{ name: 'therapy' }" id="gobutton">
              <!-- <v-btn class="gobutton">Go</v-btn> -->
              Go
              <v-icon>fas fa-arrow-right</v-icon>
            </router-link>
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
</template>
<script>
import Appbar from "../components/Appbar";
import Footer from "../components/footer";
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  components: {
    Appbar,
    Footer,
  },
};
</script>
<style scoped>
.headline {
  font-weight: bold;
  color: #3b3b3b;
}
.text {
  text-align: left;
  padding: 30px;
  font-size: 20px;
}
#gobutton {
  color: rgb(54, 133, 236);
  text-decoration: none;
  padding: 200px 400px 40px 40px;
  font-weight: bold;
}
#therapist {
  color: rgb(54, 133, 236);
}
#boston {
  color: rgb(54, 133, 236);
}
.layer {
  background-color: rgba(239, 240, 241, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 96%;
}
</style>
