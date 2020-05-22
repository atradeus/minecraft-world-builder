<template>
  <v-app id="inspire" dark>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";

  @Component
  export default class SimpleLayout extends Vue {
    mounted() {
      this.$vuetify.theme.dark = true;
    }
  }
</script>

<style scoped>

</style>