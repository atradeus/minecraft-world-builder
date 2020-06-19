<template>
  <v-dialog v-model="dialog" width="850">
    <template v-slot:activator="{ on }">
      <v-btn
          rounded
          v-on="on"
          small
          color="primary"
      >
        Generator Settings
      </v-btn>
    </template>
    <v-card flat min-height="800">
      <v-card-title class="headline grey darken-3" primary-title>
        Noise Generator Settings
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
        <v-tabs v-model="tab">
          <v-tab key="settings">
            Settings
          </v-tab>
          <v-tab key="structures">
            Structures
          </v-tab>
          <v-tab key="noise">
            Noise
          </v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item key="settings">
              <v-card flat>
                <v-card-text>
                  <v-row class="mt-3">
                    <v-col>
                      <v-text-field
                          filled rounded
                          label="Bedrock Floor Position"
                          v-model="settings.bedrock_floor_position"
                          type="number"
                          @change="emitInput"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                          filled rounded
                          label="Bedrock Roof Position"
                          v-model="settings.bedrock_roof_position"
                          type="number"
                          @change="emitInput"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                          filled rounded
                          label="Sea Level"
                          v-model="settings.sea_level"
                          type="number"
                          @change="emitInput"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-select
                          filled rounded
                          label="Disable Mob Generation"
                          v-model="settings.disable_mob_generation"
                          :items="[true, false]"
                          @change="emitInput"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="5">
                      <v-select
                          filled rounded
                          label="Default Block"
                          v-model="settings.default_block.Name"
                          :items="defaultBlocks"
                          item-text="name"
                          item-value="namespaceId"
                          @change="emitInput"
                      ></v-select>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                          filled rounded
                          label="Block State"
                          v-model="settings.default_block.Properties.state"
                          @change="emitInput"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="5">
                      <v-select
                          filled rounded
                          label="Default Fluid"
                          v-model="settings.default_fluid.Name"
                          :items="defaultFluids"
                          item-text="text"
                          item-value="value"
                          @change="emitInput"
                      ></v-select>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                          filled rounded
                          label="Block State"
                          v-model="settings.default_fluid.Properties.state"
                          @change="emitInput"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
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

            <v-tab-item key="noise">
              <noise-view v-if="settings" v-model="settings.noise" :show-hints="showHints"/>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {GeneratorSettingsFlat, GeneratorSettingsNoise, instanceOfGeneratorSettingsFlat, instanceOfGeneratorSettingsNoise} from "@/types";
  import StructureView from "@/components/builder/generator/StructureView.vue";
  import NoiseView from "@/components/builder/generator/NoiseView.vue";
  import LayerView from "@/components/builder/generator/LayerView.vue";
  import {getBiomes, getBlocks} from "@/data";

  @Component({
    components: {
      StructureDialog: StructureView,
      NoiseView,
      LayerView
    },
  })
  export default class NoiseGeneratorSettingsDialog extends Vue {

    @Prop() value?: GeneratorSettingsNoise;
    @Prop() showHints?: boolean;
    @Prop() seed?: number;

    settings?: GeneratorSettingsNoise;

    dialog = false;
    tab = 'settings';

    defaultBlocks = getBlocks();

    defaultFluids = [
      {
        text: 'Empty',
        value: 'empty'
      },
      {
        text: 'Flowing Lava',
        value: 'flowing_lava'
      },
      {
        text: 'Flowing Water',
        value: 'flowing_water'
      },
      {
        text: 'Lava',
        value: 'lava'
      },
      {
        text: 'Water',
        value: 'water'
      },
    ];

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.settings = this.value;
      }
    }

    emitInput() {
      this.$emit('input', this.settings);
    }
  }
</script>

<style scoped>

</style>