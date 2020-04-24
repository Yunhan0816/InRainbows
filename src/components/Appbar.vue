<template>
  <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
    <v-img class="mx-2" src="../assets/InRainbows.png" max-height="64" max-width="65" contain></v-img>

    <router-link :to="{ name: 'home' }" id="routerlink">
      <v-toolbar-title id="title">InRainbows LGBT</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'therapy' }" id="routerlink">
      <v-toolbar-title id="therapylink">Find Your Therapist</v-toolbar-title>
    </router-link>
    <router-link :to="{ name: 'emergency' }" id="routerlink">
      <v-toolbar-title id="therapylink">Emergency Resources</v-toolbar-title>
    </router-link>
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
#therapylink {
  font-size: 20px;
  color: #3b3b3b;
  margin-left: 25px;
  margin-right: 25px;
  font-weight: 500;
}
#therapylink:hover:after {
  width: 100%;
  left: 0;
}
#therapylink:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #3b3b3b;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
#title:hover:after {
  width: 100%;
  left: 0;
}
#title:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: navy;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
#routerlink {
  color: #fff;
  text-decoration: none;

  display: inline-block;
  /* padding: 15px 20px; */
  position: relative;
  text-decoration: none;
}
</style>
