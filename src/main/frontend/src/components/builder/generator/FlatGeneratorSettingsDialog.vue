<template>
  <v-card flat>
    <v-card-title class="">
      Flat Generator Settings
    </v-card-title>
    <v-card-text class="mt-3">
      <v-tabs background-color="" v-model="tab">
        <v-tab key="layers">
          Layers
        </v-tab>
        <v-tab key="structures">
          Structures
        </v-tab>
        <v-tabs-items v-model="tab">
          <v-tab-item key="layers">
            <v-row dense class="mt-6">
              <v-col>
                <layer-view v-if="settings" v-model="settings.layers" :show-hints="showHints"/>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item key="structures">
            <v-row dense class="mt-6">
              <v-col cols="6">
                <v-select
                    label="Village Type"
                    v-model="biome"
                    item-text="name"
                    item-value="namespaceId"
                    :items="biomes"
                    @change="selectBiome"
                    hint="Biome for village type"
                    :persistent-hint="showHints"
                ></v-select>
              </v-col>
            </v-row>
            <v-row dense class="mt-6">
              <v-col>
                <structure-dialog
                    v-if="settings && settings.structures"
                    v-model="settings.structures.structures"
                    :show-hints="showHints"
                />
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {GeneratorSettingsFlat, instanceOfGeneratorSettingsFlat} from "@/types";
  import StructureView from "@/components/builder/generator/StructureView.vue";
  import NoiseView from "@/components/builder/generator/NoiseView.vue";
  import LayerView from "@/components/builder/generator/LayerView.vue";

  @Component({
    components: {
      StructureDialog: StructureView,
      NoiseView,
      LayerView
    },
  })
  export default class FlatGeneratorSettingsDialog extends Vue {

    @Prop() value?: GeneratorSettingsFlat;
    @Prop() showHints?: boolean;
    @Prop() seed?: number;

    settings?: GeneratorSettingsFlat;

    dialog = false;
    tab = 'settings';

    biome = 'plains';

    biomes = [
      {
        name: 'Plains',
        namespaceId: 'plains'
      },
      {
        name: 'Desert',
        namespaceId: 'desert'
      },
      {
        name: 'Savanna',
        namespaceId: 'savanna'
      },
      {
        name: 'Taiga',
        namespaceId: 'taiga'
      },
      {
        name: 'Snowy',
        namespaceId: 'snowy'
      },
    ];

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      //console.log(" FlatGeneratorSettingsDialog valueChanged");
      //console.log(JSON.stringify(this.value));
      if (this.value) {
        this.settings = this.value;
        if (this.settings.biome) {
          this.biome = this.settings.biome.replace('minecraft:', '');
        }
      }
    }

    selectBiome() {
      this.$nextTick(() => {
        if (this.settings && instanceOfGeneratorSettingsFlat(this.settings)) {
          this.settings.biome = `minecraft:${this.biome}`
          this.emitInput();
        }
      });
    }

    emitInput() {
      this.$emit('input', this.settings);
    }
  }
</script>

<style scoped>

</style>