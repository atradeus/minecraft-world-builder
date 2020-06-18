<template>
  <div>
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
    <v-row dense>
      <v-col>
        <draggable v-model="layers" @start="drag=true" @end="drag=false" @change="emitInput" class="mt-2">
          <v-card elevation="1" v-for="(l, i) in layers" :key="i" class="mt-2">
            <v-row no-gutters align="center" justify="center">
              <v-col cols="6" class="text-h6 ml-6">
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
              </v-col>
              <v-col no-gutters class="ml-12 mt-0">
                <v-btn small fab outlined color="error" @click="removeSelected(i)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </draggable>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {Layer} from "@/types";
  import {getBlocks} from "@/data";
  import draggable from 'vuedraggable'
  import * as _ from 'lodash'

  @Component({
    components: {
      draggable,
    }
  })
  export default class LayerView extends Vue {

    @Prop() value?: Layer[];
    @Prop() showHints?: boolean;

    block = {
      name: 'Grass Block',
      namespaceId: 'grass_block'
    };

    layers: Layer[] = [];
    options = getBlocks();

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        // IMPORTANT
        // Reverse is done so that in teh UI the top layer is on top,
        // but for Minecraft, the top layer is the last layer in the array
        this.layers = _.cloneDeep(this.value).reverse();
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
      // IMPORTANT
      // Reverse is done so that in teh UI the top layer is on top,
      // but for Minecraft, the top layer is the last layer in the array
      this.$emit('input', _.cloneDeep(this.layers).reverse());
    }
  }
</script>

<style scoped>

</style>