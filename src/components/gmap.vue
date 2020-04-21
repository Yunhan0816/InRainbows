  
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
    mapTherapist: Object
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
      markers: []
    };
  },
  methods: {
    parseAddress(arr) {
      return (
        arr.street +
        " " +
        arr.unit +
        " " +
        arr.city +
        " " +
        arr.state +
        " " +
        arr.zipcode
      );
    },
    updateMap() {
      console.log(this.mapTherapist);
      this.geocoder.geocode(
        { address: this.parseAddress(this.mapTherapist[0].address) },
        function(results, status) {
          if (status === "OK") {
            this.marker1.setPosition(results[0].geometry.location);
            this.marker1.location;
          } else {
            console.log(status);
          }
        }
      );
      this.geocoder.geocode(
        { address: this.parseAddress(this.mapTherapist[1].address) },
        function(results, status) {
          if (status === "OK") {
            this.marker2.setPosition(results[0].geometry.location);
            this.marker2.location;
          } else {
            console.log(status);
          }
        }
      );
      this.geocoder.geocode(
        { address: this.parseAddress(this.mapTherapist[2].address) },
        function(results, status) {
          if (status === "OK") {
            this.marker3.setPosition(results[0].geometry.location);
            this.marker3.location;
          } else {
            console.log(status);
          }
        }
      );
      this.geocoder.geocode(
        { address: this.parseAddress(this.mapTherapist[3].address) },
        function(results, status) {
          if (status === "OK") {
            this.marker4.setPosition(results[0].geometry.location);
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
      this.google = await gmapsInit();
      this.geocoder = new this.google.maps.Geocoder();
      this.map = new this.google.maps.Map(this.$el);
      this.geocoder.geocode({ address: "Boston" }, (results, status) => {
        if (status !== "OK" || !results[0]) {
          throw new Error(status);
        }
        this.map.setCenter(results[0].geometry.location);
        this.map.fitBounds(results[0].geometry.viewport);
      });
      this.geocoder.geocode(
        { address: "700 Commonwealth Ave, Boston MA 02215" },
        function(results, status) {
          if (status === "OK") {
            this.map.setCenter(results[0].geometry.location);
            this.marker1 = new this.google.maps.Marker({
              map: this.map,
              position: results[0].geometry.location
            });
            this.marker2 = new this.google.maps.Marker({
              map: this.map,
              position: results[0].geometry.location
            });
            this.marker3 = new this.google.maps.Marker({
              map: this.map,
              position: results[0].geometry.location
            });
            this.marker4 = new this.google.maps.Marker({
              map: this.map,
              position: results[0].geometry.location
            });
          } else {
            console.log(status);
          }
        }
      );
      // showme = function(index) {
      //   if (
      //     this.markers[index].getAnimation() != google.maps.Animation.BOUNCE
      //   ) {
      //     this.markers[index].setAnimation(google.maps.Animation.BOUNCE);
      //   } else {
      //     this.markers[index].setAnimation(null);
      //   }
      // };
    } catch (error) {
      console.error(error);
    }
  },
  watch: {
    mapTherapist: function() {
      console.log("updating map");
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