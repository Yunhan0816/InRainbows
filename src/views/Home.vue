<template>
  <v-card class="overflow-hidden">
    <Appbar />

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="1000"
    >
      <v-parallax
        height="1000"
        src="https://images.unsplash.com/photo-1553242072-345b34e7b55b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
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

        <v-container style="height: 800px;">
          <v-card class="mx-auto">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-3">I want to find..</div>
                <v-list-item-title class="headline mb-1"
                  >Connect with LGBTQ+ friendly therapists,</v-list-item-title
                >
                <v-list-item-title class="headline mb-1"
                  >events, and communities</v-list-item-title
                >
              </v-list-item-content>

              <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
            </v-list-item>
            <!-- <v-card-actions> -->
            <router-link :to="{ name: 'events' }">
              <v-btn id="findevents">
                <a id="buttontext">Events and Communities</a>
              </v-btn>
            </router-link>

            <router-link :to="{ name: 'therapy' }">
              <v-btn id="findevents">
                <a id="buttontext">Therapists</a>
              </v-btn>
            </router-link>
            <!-- </v-card-actions> -->
          </v-card>
        </v-container>
        <v-footer padless>
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>In Rainbows</strong>
          </v-col>
        </v-footer>
      </v-parallax>
    </v-sheet>
  </v-card>
</template>
<script>
import Appbar from "../components/Appbar";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  components: {
    Appbar
  }
};
</script>
