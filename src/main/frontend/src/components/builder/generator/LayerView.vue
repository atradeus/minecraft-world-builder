<template>
  <v-card height="400">
    <v-card-text>
      <!--      <v-row dense>-->
      <!--        <v-col>-->
      <!--          L-->
      <!--        </v-col>-->
      <!--      </v-row>-->
      <v-row dense>
        <v-col>
          <v-combobox
              label="Blocks"
              item-text="name"
              item-value="namespaceId"
              v-model="block"
              :items="options"
          ></v-combobox>
        </v-col>
        <v-col>
          <v-btn
              class="mt-3 ml-2"
              rounded text outlined
              @click="addSelected"
          >
            Add Layer
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-card elevation="3" v-for="(l, i) in layers" :key="i" class="mt-2">
            <v-row no-gutters align="center">
              <v-col cols="6" class="title ml-3">
                {{ l.block }}
              </v-col>
              <v-col cols="3">
                <v-text-field
                    min="0"
                    class="mt-6"
                    filled rounded clearable
                    label="Height"
                    v-model="l.height"
                    type="number"
                    @change="emitInput"
                ></v-text-field>
                <v-spacer></v-spacer>
              </v-col>
              <v-col class="ml-12 mt-0">
                <v-btn small fab outlined color="red" @click="removeSelected(i)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {Layer} from "@/types";
  import {getBlocks} from "@/data";

  // export interface Layer {
  //   height: number;
  //   block: string;
  // }

  @Component
  export default class LayerView extends Vue {

    @Prop() value?: Layer[];
    @Prop() showHints?: boolean;

    block = {
      name: 'Grass Block',
      namespaceId: 'minecraft:grass_block'
    };

    layers: Layer[] = [];

    options = getBlocks();

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.layers = this.value;
      }
    }

    addSelected() {
      this.$nextTick(() => {
        this.layers.unshift({
          height: 1,
          block: `minecraft:${this.block.namespaceId}`
        });
        this.emitInput();
      });
    }

    removeSelected(index: number) {
      this.layers.splice(index, 1);
      this.emitInput();
    }

    emitInput() {
      this.$emit('input', this.layers);
    }
  }
</script>

<style scoped>

</style>