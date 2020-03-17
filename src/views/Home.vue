<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      dark
      shrink-on-scroll
      prominent
      src="https://images.unsplash.com/photo-1562592619-908ca07deace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>InRainbows LGBTQ</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link :to="{ name: 'events' }">
        <v-btn id="findevents">
          <a id="buttontext">Events and Communities</a>
        </v-btn>
      </router-link>
      <router-link :to="{ name: 'therapy' }">
        <v-btn id="findevents">
          <a id="buttontext">Therapists</a>
        </v-btn>
      </router-link>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques" class="overflow-y-auto">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <v-spacer></v-spacer>

      <v-container style="height: 1000;">
        <v-card class="mx-auto" width="80%" height="100%">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-3">I want to find..</div>
              <v-list-item-title class="headline mb-1">Connect with LGBTQ+ friendly therapists,</v-list-item-title>
              <v-list-item-title class="headline mb-1">events, and communities</v-list-item-title>
            </v-list-item-content>

            <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
          </v-list-item>
          <!-- <v-card-actions> -->
          <router-link :to="{ name: 'events' }">
            <v-btn id="findevents">
              <a id="buttontext">Events and Communities</a>
            </v-btn>
          </router-link>

          <router-link :to="{ name: 'therapy' }">
            <v-btn id="findevents">
              <a id="buttontext">Therapists</a>
            </v-btn>
          </router-link>
          <!-- </v-card-actions> -->
        </v-card>
      </v-container>

      <v-card height="150">
        <v-footer absolute class="font-weight-medium">
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} —
            <strong>In Rainbows</strong>
          </v-col>
        </v-footer>
      </v-card>
    </v-sheet>
  </v-card>
</template>