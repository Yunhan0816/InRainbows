<template>
  <v-app-bar
    absolute
    color="white"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>In Rainbows LGBTQ</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn id="directToTherapist">
      <span>Therapists</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn id="directToEvents">
      <span>Events</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Communities</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script scoped>
export default {
  name: "Appbar"
};
</script>
