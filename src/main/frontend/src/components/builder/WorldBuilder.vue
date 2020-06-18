<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="4" :offset="offset">
        <div class="d-flex">
          <!--          <div class="mr-2">-->
          <!--             <upload-dialog v-model="world"/>-->
          <!--          </div>-->
          <div class="mt-1">
            <v-btn small rounded outlined text @click="showHints = !showHints">
              <span v-if="showHints">Hide Hints</span>
              <span v-else>Show Hints</span>
            </v-btn>
          </div>
          <div class="mt-1 ml-2">
            <v-btn small rounded outlined text @click="toggleJson">
              <span v-if="showJson">Hide JSON</span>
              <span v-else>Show JSON</span>
            </v-btn>
          </div>
          <div class="ml-12">
            <download-dialog :json="json"/>
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <v-select
            filled rounded
            label="Presets"
            v-model="preset"
            :items="presetItems"
            append-outer-icon="mdi-check"
            @click:append-outer="setWorld"
        ></v-select>
      </v-col>
    </v-row>
    <v-row dense class="mt-6">
      <v-col cols="3" :offset="offset">
        <seed-input-field
            v-model="world.seed"
            :show-hints="showHints"
            hint="The numerical seed of the world"
        />
      </v-col>
      <v-col cols="2">
        <v-select
            filled rounded
            label="Bonus Chest"
            v-model="world.bonus_chest"
            :items="[true, false]"
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-select
            filled rounded
            label="Generate Features"
            v-model="world.generate_features"
            :items="[true, false]"
        ></v-select>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="showJson ? 7 : 8" :offset="offset">
        <dimension-map-view
            v-model="world.dimensions"
            :seed="world.seed"
            :show-hints="showHints"
        />
      </v-col>
      <v-col cols="3" class="ml-6" v-if="showJson">
        <pre> {{ json }} </pre>
      </v-col>
    </v-row>

<!--    <v-row>-->
<!--      <v-col>{{ world }}</v-col>-->
<!--    </v-row>-->

  </v-container>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import {getDefaultWorld, getEmptyWorld, getRandomSeed, getSuperflatExample, getWorldExample, World} from "@//types";
  import DimensionMapView from "@/components/builder/dimension/DimensionMapView.vue";
  import DownloadDialog from "@/components/DownloadDialog.vue";
  import UploadDialog from "@/components/UploadDialog.vue";
  import SeedInputField from "@/components/builder/SeedInputField.vue";

  const json_beautifier = require('../../../node_modules/csvjson-json_beautifier/json_beautifier.js');

  @Component({
    components: {
      DimensionMapView,
      DownloadDialog,
      UploadDialog,
      SeedInputField
    },
  })
  export default class WorldBuilder extends Vue {

    showHints = false;
    showJson = true;
    offset = 1;

    world = getEmptyWorld();

    preset = 'Empty World';
    presetItems = ['Empty World', 'Standard World', 'Superflat'];

    get json() {
      return this.world ? json_beautifier(this.world, {dropQuotesOnNumbers: true}) : '';
    }

    setWorld() {
      switch (this.preset) {
        case 'Empty World':
          this.world = getEmptyWorld();
          break;
        case 'Standard World':
          this.world = getDefaultWorld();
          break;
        case 'Superflat':
          this.world = getSuperflatExample();
          break;
        default:
          this.world = getDefaultWorld();
      }
      this.$forceUpdate();
    }

    toggleJson() {
      //console.log(`${this.$vuetify.breakpoint.name} ${this.$vuetify.breakpoint.height} ${this.$vuetify.breakpoint.width}`);
      this.showJson = !this.showJson;
      if (this.$vuetify.breakpoint.name == 'xl') {
        //this.offset = this.offset == 1 ? 2 : 1;
        this.offset = this.showJson ? 1 : 2;
      } else {
        this.offset = this.showJson ? 0 : 2;
      }
    }

    setOffset() {
      if (this.$vuetify.breakpoint.name == 'xl') {
        this.offset = this.showJson ? 1 : 2;
      } else {
        this.offset = this.showJson ? 0 : 2;
      }
    }

    @Watch('world', {deep: true})
    worldChanged() {
      if (this.world) {
        this.$store.commit("SET_WORLD", this.world);
      }
    }

    mounted() {
      if (Object.keys(this.$store.state.world).length) {
        this.world = this.$store.state.world;
      }
      this.setOffset();
    }
  }
</script>

<style scoped>
</style>
