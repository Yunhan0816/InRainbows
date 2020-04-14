  
<template>
  <v-container id="map">
    <div class="googleMap" />
  </v-container>
</template>

<script>
import gmapsInit from "../gmaps";
export default {
  name: "gmap",
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);
      geocoder.geocode({ address: "Boston" }, (results, status) => {
        if (status !== "OK" || !results[0]) {
          throw new Error(status);
        }
        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });

      // function geocodeAddress(geocoder, resultsMap, addressString) {
      //   // var address = document.getElementById("address").value;
      //   geocoder.geocode({ address: addressString }, function(results, status) {
      //     if (status === "OK") {
      //       resultsMap.setCenter(results[0].geometry.location);
      //       var marker = new google.maps.Marker({
      //         map: resultsMap,
      //         position: results[0].geometry.location
      //       });
      //       marker.location;
      //     } else {
      //       alert(
      //         "Geocode was not successful for the following reason: " + status
      //       );
      //     }
      //   });
      // }

      // console.log(
      //   "TRY THESE COORDS:",
      //   geocodeAddress(geocoder, map, "1079 Commonwealth Ave., Boston MA 02215")
      // );
      const location = [
        { lat: 42.3348, lng: -71.0733 },
        { lat: 42.362, lng: -71.06 },
        { lat: 42.3361, lng: -71.1075 },
        { lat: 42.3397, lng: -71.1049 }
      ];

      geocoder.geocode(
        { address: "1079 Commonwealth Ave., Boston MA 02215" },
        function(results, status) {
          if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
            marker.location;
          } else {
            alert("shits messed up");
          }
        }
      );

      const marker1 = new google.maps.Marker({
        position: location[0],
        map: map
      });
      marker1.location;
      const marker2 = new google.maps.Marker({
        position: location[1],
        map: map
      });
      marker2.location;
      const marker3 = new google.maps.Marker({
        position: location[2],
        map: map
      });
      marker3.location;
      const marker4 = new google.maps.Marker({
        position: location[3],
        map: map
      });
      marker4.location;
      //   console.log(marker)
    } catch (error) {
      console.error(error);
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