<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          small fab
          color="blue-grey"
          v-on="on"
          v-bind="attrs"
          @click="exportJson"
      >
        <v-icon small>mdi-download</v-icon>
      </v-btn>
    </template>
    <span>Download JSON</span>
  </v-tooltip>
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