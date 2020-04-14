<template>
  <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <router-link :to="{ name: 'home' }" id="routerlink">
      <v-toolbar-title id="title">In Rainbows LGBT</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
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
