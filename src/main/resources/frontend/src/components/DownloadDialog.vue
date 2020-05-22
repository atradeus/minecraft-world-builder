<template>
  <v-btn
      small
      fab
      color="blue-grey"
      @click="exportJson"
  >
    <v-icon small>mdi-download</v-icon>
    <!--    Export-->
  </v-btn>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";
  import {saveAs} from "file-saver";

  @Component
  export default class DownloadDialog extends Vue {

    @Prop() json?: string;

    exportJson() {
      if (this.json) {
        saveAs(new Blob([this.json]), "worldgen_settings_export.json");
      }
    }
  }
</script>

<style scoped>

</style>