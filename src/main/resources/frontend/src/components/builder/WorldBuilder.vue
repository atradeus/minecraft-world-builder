<template>
  <div>
    <v-row no-gutters>
      <v-col cols="3">
        <span class="title">World Builder</span>
      </v-col>
      <v-col cols="2">
        <div class="d-flex">
          <div class="mr-2">
<!--            <upload-dialog v-model="world"/>-->
          </div>
          <div>
            <download-dialog :json="json"/>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <div class="d-flex flex-column">
          <div>
            <v-text-field
                label="Seed"
                v-model="world.seed"
            ></v-text-field>
          </div>
          <div>
            <v-select
                label="Bonus Chest"
                v-model="world.bonus_chest"
                :items="[true, false]"
            ></v-select>
          </div>
          <div>
            <v-select
                label="Generate Features"
                v-model="world.generate_features"
                :items="[true, false]"
            ></v-select>
          </div>
          <div>
            <dimension-map-view v-model="world.dimensions" :seed="world.seed"></dimension-map-view>
          </div>
        </div>
      </v-col>
      <v-col cols="4" class="ml-6">
        <pre> {{ json }} </pre>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {getDefaultWorld, World} from "@/components/builder/types";
  import DimensionMapView from "@/components/builder/dimension/DimensionMapView.vue";
  import DownloadDialog from "@/components/DownloadDialog.vue";
  import UploadDialog from "@/components/UploadDialog.vue";

  @Component({
    components: {
      DimensionMapView,
      DownloadDialog,
      UploadDialog
    },
  })
  export default class WorldBuilder extends Vue {

    world: World | null = getDefaultWorld();

    get json() {
      return this.world ? JSON.stringify(this.world, null, 2) : '';
    }

  }
</script>

<style scoped>
</style>
