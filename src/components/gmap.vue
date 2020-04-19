  
<template>
  <v-container id="map">
    <div class="googleMap" />
  </v-container>
</template>

<script>
import gmapsInit from "../gmaps";
export default {
  name: "gmap",
  props: {
    mapTherapist: Object,
  },
  data() {
    return {
      google: Object,
      geocoder: Object,
      map: Object,
      marker1: Object,
      marker2: Object,
      marker3: Object,
      marker4: Object,
    }
  },
  methods: {
    parseAddress(arr) {
      return arr.street + " " + arr.unit + " " + arr.city + " " + arr.state + " " + arr.zipcode
    },
    updateMap() {
      console.log(this.mapTherapist)
      this.geocoder.geocode({ address: this.parseAddress(this.mapTherapist[0].address) },
        function(results, status) {
          if (status === "OK") {
            this.marker1.setPosition(results[0].geometry.location)
            this.marker1.location;
          } else {
          console.log(status);
          }
        }
      );
      this.geocoder.geocode({ address: this.parseAddress(this.mapTherapist[1].address) },
        function(results, status) {
          if (status === "OK") {
            this.marker2.setPosition(results[0].geometry.location)
            this.marker2.location;
          } else {
          console.log(status);
          }
        }
      );
      this.geocoder.geocode({ address: this.parseAddress(this.mapTherapist[2].address) },
        function(results, status) {
          if (status === "OK") {
            this.marker3.setPosition(results[0].geometry.location)
            this.marker3.location;
          } else {
          console.log(status);
          }
        }
      );
      this.geocoder.geocode({ address: this.parseAddress(this.mapTherapist[3].address) },
        function(results, status) {
          if (status === "OK") {
            this.marker4.setPosition(results[0].geometry.location)
            this.marker4.location;
          } else {
          console.log(status);
          }
        }
      );
    }
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      this.google = google;
      this.geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);
      this.map = map;
      this.geocoder.geocode({ address: "Boston" }, (results, status) => {
        if (status !== "OK" || !results[0]) {
          throw new Error(status);
        }
        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
      this.geocoder.geocode({ address: "700 Commonwealth Ave, Boston MA 02215" },
        function(results, status) {
          if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            this.marker1 = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
            this.marker2 = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
            this.marker3 = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
            this.marker4 = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
          console.log(status);
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  },
  watch: {
    'mapTherapist': function() {
      console.log("updating map")
      this.updateMap();
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.googleMap {
  width: 100%;
  height: 100%;
}
.container {
  height: 100vh;
  width: 100wh;
}
#map {
  max-height: 400px;
}
</style>