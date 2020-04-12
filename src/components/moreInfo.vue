<template>
  <v-container>
    <v-card color="primary" dark>
      <v-card-title class="headline">{{message.name.first + " " + message.name.last}}</v-card-title>
      <v-card-subtitle>{{message.address.city + ", " + message.address.state}}</v-card-subtitle>
      <v-card-text>
        <b>Title:</b>
        {{parseArr(message.titles)}}
        <br />
        <br />
        <b>Insurance:</b>
        {{parseArr(message.insurance)}}
        <br />
        <br />
        <b>Pay By:</b>
        {{parseArr(message.payBy)}}
        <br />
        <br />
        <b>Communities:</b>
        {{parseArr(message.communities)}}
        <br />
        <br />
        <b>Blurb:</b>
        {{message.blurb}}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    message: Object
  },
  mounted(){
    console.log(this.message);
  },
  methods: {
    // displayInfo() {
    //   console.log(this.message);
    //   console.log("I GOT CALLED")
    // },
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
}
</script>