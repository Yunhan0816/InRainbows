<template>
  <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <router-link :to="{ name: 'home' }">
      <v-toolbar-title id="title">In Rainbows LGBT</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>

    <v-btn id="directToTherapist">
      <span>Therapists</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script scoped>
export default {
  name: "Appbar"
};
</script>
<style scoped>
#title {
  font-size: 30px;
  color: navy;
}
</style>
