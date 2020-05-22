<template>
  <v-card>
    <v-card-title>
      Biome Source
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
              label="Settings"
              v-model="biomeSource.seed"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-select
              label="Type"
              v-model="biomeSource.type"
              :items="types"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
              v-if="biomeSource.type === 'minecraft:multi_noise'"
              label="Preset"
              v-model="biomeSource.preset"
          ></v-text-field>
          <!--          <v-select-->
          <!--              v-if="biomeSource.type === 'minecraft:multi_noise'"-->
          <!--              label="Preset"-->
          <!--              v-model="biomeSource.preset"-->
          <!--              :items="presets"-->
          <!--          ></v-select>-->
          <v-select
              v-if="biomeSource.type === 'minecraft:vanilla_layered'"
              label="Large Biomes"
              v-model="biomeSource.large_biomes"
              :items="[true, false]"
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {Biome, BiomeSource} from "@/components/builder/types";

  // seed: number;
  // type: string;
  // large_biomes?: boolean;
  // preset?: string;
  // biomes?: Biome[];


  @Component
  export default class BiomeSourceView extends Vue {

    @Prop() value?: BiomeSource;
    @Prop() seed?: number;

    biomeSource?: BiomeSource;

    types = ['minecraft:vanilla_layered', 'minecraft:multi_noise', 'minecraft:the_end', 'fixed', 'checkerboard'];
    presets = ['minecraft:nether'];

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.biomeSource = this.value;
      }
    }

    emitInput() {
      this.$emit('input', this.biomeSource);
    }
  }
</script>

<style scoped>

</style>