<template>
  <v-container>
    <v-card color="#dedede" dark>
      <v-card-title id="headline">{{
        message.name.first + " " + message.name.last
      }}</v-card-title>
      <!-- <v-card-subtitle></v-card-subtitle> -->
      <v-card-text>
        <v-row>
          <v-col cols="7">
            <b>Bio:</b>
            <div class="normaltext">{{ message.blurb }}</div>
          </v-col>

          <v-col cols="5">
            <b>Title:</b>
            <div class="normaltext">{{ parseArr(message.titles) }}</div>
            <!-- <br />
            <b>Sexualities:</b>
            <div class="normaltext">{{parseArr(message.sexuality)}}</div>-->
            <br />
            <b>Specialties:</b>
            <div class="normaltext">{{ parseArr(message.specialties) }}</div>
            <br />
            <b>Communities:</b>
            <div class="normaltext">{{ parseArr(message.communities) }}</div>
            <br />
            <b>Mental Health:</b>
            <div class="normaltext">{{ parseArr(message.mentalHealth) }}</div>
            <br />
            <b>Insurance:</b>
            <div class="normaltext">{{ parseArr(message.insurance) }}</div>
            <br />
            <b>Pay By:</b>
            <div class="normaltext">{{ parseArr(message.payBy) }}</div>
            <br />

            <b>Ages:</b>
            <div class="normaltext">{{ parseArr(message.ages) }}</div>
            <br />

            <b>Location:</b>
            <div class="normaltext">
              {{
                message.address.street +
                  ", " +
                  message.address.city +
                  ", " +
                  message.address.state +
                  " " +
                  message.address.zipcode
              }}
            </div>
          </v-col>
        </v-row>
        <br />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    message: Array,
  },
  mounted() {
    console.log(this.message);
  },
  methods: {
    parseArr(arr) {
      let res = "";
      for (let i = 0; i < arr.length; i++) {
        res = res + arr[i] + ", ";
      }
      if (res.length != 0) {
        return res.substring(0, res.length - 2);
      } else {
        return "N/A";
      }
    },
  },
  // watch: {
  //   'message': function() {
  //     this.displayInfo();
  //   }
  // }
};
</script>
<style scoped>
#headline {
  color: black;
  font-weight: bold;
}
.normaltext {
  color: black;
}
b {
  color: #249df0;
}
@media only screen and (max-width: 600px) {
  #headline {
    font-size: 70%;
  }
}
</style>
