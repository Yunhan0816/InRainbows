<template>
  <v-footer padless>
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
#footername {
  color: navy;
}
</style>
