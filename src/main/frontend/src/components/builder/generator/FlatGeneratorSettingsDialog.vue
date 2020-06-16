<template>
  <v-dialog v-model="dialog" width="850">
    <template v-slot:activator="{ on }">
      <v-btn
          rounded
          v-on="on"
          small
          color="indigo"
      >
        Generator Settings
      </v-btn>
    </template>
    <v-card flat height="700">
      <v-card-title class="headline grey darken-3" primary-title>
        Flat Generator Settings
        <v-spacer/>
        <v-btn
            class="mt-1"
            color="red"
            text fab small
            @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="mt-3">
        <v-tabs background-color="" v-model="tab">
          <v-tab key="settings">
            Settings
          </v-tab>
          <v-tab key="layers">
            Layers
          </v-tab>
          <v-tab key="structures">
            Structures
          </v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item key="settings">
              <v-card flat>
                <v-card-text>
                  <v-row class="mt-3" dense>
                    <v-col cols="6">
                      <v-combobox
                          label="Biome"
                          v-model="biome"
                          item-text="name"
                          :items="biomes"
                          @change="selectBiome"
                          hint="Biome for village type"
                          :persistent-hint="showHints"
                      ></v-combobox>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item key="layers">
              <layer-view v-if="settings" v-model="settings.layers" :show-hints="showHints"/>
            </v-tab-item>

            <v-tab-item key="structures">
              <v-card flat>
                <v-card-text>
                  <structure-dialog
                      v-if="settings && settings.structures"
                      v-model="settings.structures.structures"
                      :show-hints="showHints"
                  />
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {GeneratorSettingsFlat, instanceOfGeneratorSettingsFlat} from "@/types";
  import StructureDialog from "@/components/builder/generator/StructureDialog.vue";
  import NoiseView from "@/components/builder/generator/NoiseView.vue";
  import LayerView from "@/components/builder/generator/LayerView.vue";

  @Component({
    components: {
      StructureDialog,
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

    biome = {
      name: 'Plains',
      namespaceId: 'plains'
    }
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
      if (this.value) {
        this.settings = this.value;
      }
    }

    selectBiome() {
      this.$nextTick(() => {
        if (this.settings && instanceOfGeneratorSettingsFlat(this.settings)) {
          this.settings.biome = `minecraft:${this.biome.namespaceId}`
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