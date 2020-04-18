<template>
  <v-container id="page-container">
    <Appbar />
    <br />
    <br />

    <div id="content-wrap">
      <v-card class="mx-auto" max-width="1200">
        <v-container fluid>
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="500px"
                >
                  <v-card-title
                    v-text="card.title"
                    id="cardtitle"
                  ></v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-container id="headline">
              <p style="font-size: 25px;font-weight: 400;">
                If you or anyone you know are in crisis or in danger
                <br />Please use the following resources to get immediate help.
              </p>
            </v-container>
          </v-row>
          <v-row>
            <v-container>
              <h2>United States</h2>
              <br />
              <v-container id="resources">
                <div id="resources">
                  <v-list-item>911 Emergency</v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 799-7233</a>
                    National Domestic Violence Hotline
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 273-8255</a>
                    National Suicie Prevention lifeline
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 996-6228</a>
                    Family Violence Helpline
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 366-8288</a>
                    Self-Harm Hotline
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 230-7526</a>Planned Parenthood
                    Hotline
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 222-1222</a>
                    American Association of Poison Control Centers
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 622-2255</a>
                    Alcoholism & Drug Dependency Hope Line
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 233-4357</a>
                    National Crisis Line, Anorexia and Bulimia
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 843-4564</a>
                    GLBT Hotline
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 488-7386</a> TREVOR Crsis Hotline
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 221-7044</a>AIDS Crisis Line
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 422-4453</a>The Childhelp National
                    Child Abuse Hotline
                  </v-list-item>
                  <v-list-item>
                    <a id="phone">+1 (800) 565-8860</a>
                    The Trans Lifeline
                  </v-list-item>
                </div>
              </v-container>
            </v-container>
          </v-row>
        </v-container>
      </v-card>
      <v-col class="emergency" cols="12" id="emergencyid">
        <v-container id="text_emergency">
          <h3>
            If you are in a life threatening situation, please do not use this
            site.
          </h3>
          <br />

          <h3>
            Call (800) 273-825 or use these
            <router-link to="/emergency" id="routerlink">resources</router-link
            >for help.
          </h3>
          <br />
          <h3>Contact us</h3>
        </v-container>
      </v-col>
      <v-col class="text-center" cols="12" id="footername">
        {{ new Date().getFullYear() }} —
        <strong>In Rainbows</strong>
      </v-col>
      <!-- <Footer /> -->
    </div>
  </v-container>
</template>
<script>
import Appbar from "../components/Appbar";
// import Footer from "../components/footer";
export default {
  name: "Emergency",
  components: {
    Appbar,
    // Footer
  },
  data: () => ({
    cards: [
      {
        title: "EMERGENCY RESOURCES",
        align: "center",
        src:
          "https://images.unsplash.com/photo-1564097060855-4b930b5f1d7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        flex: 12,
      },
    ],
  }),
};
</script>
<style scoped>
#phone {
  text-decoration: none;
  color: #434343;
  padding-right: 30px;
}
#resources {
  color: #aeadb1;
}
#cardtitle {
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
#headline {
  text-align: center;
  color: #434343;
}
</style>

<style scoped>
#routerlink {
  padding: 1%;
  color: white;
}

#emergencyid {
  background-color: #3c78d8;
}
#text_emergency {
  text-align: center;
  color: white;
}
#footername {
  color: navy;
}
</style>
