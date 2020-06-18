<template>
  <v-card elevation="3">
    <v-card-title>
      Generator
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="4">
          <v-select
              filled rounded
              label="Type"
              v-model="type"
              :items="typeOptions"
              @change="setType"
              item-text="text"
              item-value="value"
          ></v-select>
        </v-col>
        <v-col cols="4" cols-xl="3">
          <v-select
              v-if="type === 'minecraft:noise'"
              filled rounded
              label="Settings"
              v-model="settings"
              :items="settingsOptions"
              @change="setSettings"
              item-text="text"
              item-value="value"
          ></v-select>
        </v-col>
        <v-col v-if="settings === '' && type === 'minecraft:noise'" class="mt-3 ml-3">
          <noise-generator-settings-dialog v-model="generator.settings" :show-hints="showHints"/>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6" v-if="type === 'minecraft:noise'">
          <seed-input-field v-model="generator.seed" :show-hints="showHints"/>
        </v-col>
      </v-row>
      <v-row dense v-if="type === 'minecraft:noise'">
        <v-col>
          <biome-source-view :key="type" v-model="generator.biome_source" :seed="seed" :show-hints="showHints"/>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col v-if="type === 'minecraft:flat'" class="mt-3 ml-3">
          <flat-generator-settings-dialog v-model="generator.settings" :show-hints="showHints"/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {
    Generator, getGeneratorSettingsNoiseDefault,
    instanceOfGeneratorSettingsNoise, instanceOfGeneratorSettingsFlat, getGeneratorSettingsFlatDefault, getRandomSeed
  } from "@//types";
  import BiomeSourceView from "@/components/builder/generator/BiomeSourceView.vue";
  import FlatGeneratorSettingsDialog from "@/components/builder/generator/FlatGeneratorSettingsDialog.vue";
  import NoiseGeneratorSettingsDialog from "@/components/builder/generator/NoiseGeneratorSettingsDialog.vue";
  import {getBiomes, MinecraftType} from "@/data";
  import SeedInputField from "@/components/builder/SeedInputField.vue";

  @Component({
    components: {
      BiomeSourceView,
      FlatGeneratorSettingsDialog,
      NoiseGeneratorSettingsDialog,
      SeedInputField
    },
  })
  export default class GeneratorView extends Vue {

    @Prop() value?: Generator;
    @Prop() seed?: number;
    @Prop() showHints?: boolean;
    generator?: Generator;

    type = 'minecraft:noise';
    typeOptions = [
      {
        value: 'minecraft:noise',
        text: 'Noise'
      },
      {
        value: 'minecraft:flat',
        text: 'Flat'
      }
    ];

    settings = 'minecraft:overworld';
    settingsOptions = [
      {
        value: 'minecraft:overworld',
        text: 'Overworld'
      },
      {
        value: 'minecraft:amplified',
        text: 'Amplified'
      },
      {
        value: 'minecraft:nether',
        text: 'Nether'
      },
      {
        value: 'minecraft:caves',
        text: 'Caves'
      },
      {
        value: 'minecraft:end',
        text: 'End'
      },
      {
        value: '',
        text: 'Custom'
      },
    ];

    setType() {
      // this.$nextTick(() => {
      if (this.generator) {
        this.generator.type = this.type;

        if (this.type == 'minecraft:flat') {
          this.settings = '';
          this.generator.settings = getGeneratorSettingsFlatDefault();
          this.generator.biome_source = undefined;
          //Vue.delete(this.generator, 'biome_source');
        }
        if (this.type == 'minecraft:noise') {
          //this.settings = '';
          //this.generator.settings = getGeneratorSettingsNoiseDefault();
          this.settings = 'minecraft:overworld';
          this.generator.settings = this.settings;
          this.generator.biome_source = {
            seed: getRandomSeed(),
            large_biomes: false,
            type: "minecraft:vanilla_layered"
          };
        }
        this.emitInput();
      }
      // });
    }

    setSettings() {
      // this.$nextTick(() => {
      if (this.generator) {
        if (this.settings == '') {
          this.generator.settings = getGeneratorSettingsNoiseDefault();
        } else {
          this.generator.settings = this.settings;
        }
        this.emitInput();
      }
      // });
    }

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.generator = this.value;
        this.type = this.generator.type;
        if (instanceOfGeneratorSettingsNoise(this.generator.settings)
          || instanceOfGeneratorSettingsFlat(this.generator.settings)) {
          this.settings = '';
        } else {
          this.settings = this.generator.settings;
        }
      }
    }

    @Watch('generator', {immediate: true, deep: true})
    generatorChanged() {
      this.emitInput();
    }

    emitInput() {
      this.$emit('input', this.generator);
    }
  }
</script>

<style scoped>

</style>
