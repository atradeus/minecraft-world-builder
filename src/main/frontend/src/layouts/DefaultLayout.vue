<template>
  <v-app id="inspire">
    <v-app-bar app dense :color="color" extension-height="30">
      <v-toolbar-title class="flex text-center">{{ title }}</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs centered>
          <v-tab to="/">Home</v-tab>
          <v-tab to="about">About</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row no-gutters align="center" justify="top">
          <v-col>
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer :color="color" app align-right fixed dense class="caption">
      <span>
        &copy; {{ copyright }}
      </span>
<!--      <v-tooltip top>-->
<!--        <template v-slot:activator="{ on, attrs }">-->
<!--          <v-btn-->
<!--              class="ml-6"-->
<!--              small text fab-->
<!--              v-on="on"-->
<!--              v-bind="attrs"-->
<!--              @click.stop="snackbar = !snackbar"-->
<!--          >-->
<!--            <v-icon small>mdi-view-headline</v-icon>-->
<!--          </v-btn>-->
<!--        </template>-->
<!--        <span>Privacy & Cookie Policy</span>-->
<!--      </v-tooltip>-->
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="ml-6"
              small text fab
              v-on="on"
              v-bind="attrs"
              :color="dark ? 'white' : 'black'"
              @click="setDark"
          >
            <v-icon small>mdi-opacity</v-icon>
          </v-btn>
        </template>
        <span>Toggle Dark/Light</span>
      </v-tooltip>
      <v-spacer/>
      <span>
       <a target="_blank" href="https://www.minecraft.net/">Minecraft</a> is copyright
         <a target="_blank" href="https://www.mojang.com/">Mojang AB</a> and is not affiliated with this site
      </span>
    </v-footer>

    <v-snackbar v-model="snackbar" :timeout="-1" multi-line>
      <v-row no-gutters justify="center" align="center">
        <v-col cols="8">
          <v-card>
            <v-card-title>
              <span class="flex text-center">
                Privacy and Cookie Policy
              </span>
            </v-card-title>
            <v-card-text>
              This site uses cookies to store user preferences. There is no user tracking and the JSON produced by this app is not stored or logged.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="flex text-center">
          <v-btn color="error" small @click="privacyPolicyClicked">
            Accept and Close
          </v-btn>
        </v-col>
      </v-row>
    </v-snackbar>

  </v-app>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";

  interface SettingsCookie {
    dark: boolean;
    privacyPolicyAccepted: boolean;
  }

  @Component
  export default class DefaultLayout extends Vue {

    title = 'Minecraft World Builder';
    copyright = 'Logical Data 2020';
    cookieKey = 'settings';
    dark = true;
    snackbar = false;

    get color() {
      return this.dark ? 'blue-grey darken-3' : 'blue-grey lighten-3';
    }

    setDark() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
      const settings: SettingsCookie = this.$cookies.get(this.cookieKey);
      settings.dark = this.dark;
      this.setSettingsCookie(settings);
    }

    privacyPolicyClicked() {
      this.snackbar = false;
      const settings: SettingsCookie = this.$cookies.get(this.cookieKey);
      settings.privacyPolicyAccepted = true;
      this.setSettingsCookie(settings);
    }

    setSettingsCookie(settings: SettingsCookie) {
      this.$cookies.set(this.cookieKey, settings, Infinity,
        undefined, undefined, undefined, "Strict");
    }

    mounted() {
      //this.$cookies.remove(this.cookieKey);
      if (!this.$cookies.isKey(this.cookieKey)) {
        this.setSettingsCookie({
          dark: true,
          privacyPolicyAccepted: false
        });
      }

      const settings: SettingsCookie = this.$cookies.get(this.cookieKey);
      this.dark = settings.dark;
      //this.snackbar = !settings.privacyPolicyAccepted;
      this.$vuetify.theme.dark = this.dark;
    }
  }
</script>

<style scoped>

</style>