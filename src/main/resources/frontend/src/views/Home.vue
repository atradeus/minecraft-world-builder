<template>
  <v-container>
    <v-row>
      <v-col>
        <world-builder></world-builder>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";
  import WorldBuilder from "@/components/builder/WorldBuilder.vue";

  @Component({
    components: {
      WorldBuilder
    },
  })
  export default class Home extends Vue {

  }
</script>

<style scoped>

</style>