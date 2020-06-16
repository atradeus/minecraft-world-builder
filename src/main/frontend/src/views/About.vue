<template>
  <v-container>
    <v-row no-gutters align="center">
      <v-col cols="8" offset="2">
        <v-card height="500">
          <!-- <v-card-title>About</v-card-title>-->
          <v-card-text>
            Based on documentation from
            <a target="_blank" href="https://minecraft.gamepedia.com/Custom">Official Minecraft Wiki</a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";

  @Component({
    components: {},
  })
  export default class About extends Vue {

  }
</script>

<style scoped>

</style>