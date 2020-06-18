<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on }">
      <v-btn
          rounded
          v-on="on"
          small
          color="primary"
      >
        <v-icon>mdi-plus</v-icon>
        Add Dimension
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline secondary" primary-title>
        Add Dimension
      </v-card-title>

      <v-card-text class="title text-lg-center mt-3">
        <v-row no-gutters>
          <v-col>
            <v-select
                filled rounded
                class="mx-12 my-3"
                label="Type"
                v-model="type"
                item-text="text"
                item-value="value"
                :items="items"
            ></v-select>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col v-if="type === ''">
            <v-text-field
                filled rounded
                class="mx-12"
                label="Name"
                v-model="name"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" rounded @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="primary" rounded :disabled="disabled" @click="add()">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {
    Dimension,
    DimensionMap,
    getDefaultDimension,
    getDefaultEndDimension,
    getDefaultNetherDimension,
    getDefaultOverworldDimension,
    Option
  } from "@//types";

  @Component
  export default class AddDimensionDialog extends Vue {

    @Prop() value?: DimensionMap;
    @Prop() seed?: number;
    // @Prop() types?: Option[];
    dimensions: DimensionMap | null = null;
    name = '';
    type = 'minecraft:overworld';
    dialog?: boolean = false;

    types = [
      {
        value: 'minecraft:overworld',
        text: 'Overworld'
      },
      {
        value: 'minecraft:the_nether',
        text: 'The Nether'
      },
      {
        value: 'minecraft:the_end',
        text: 'The End'
      },
      {
        value: '',
        text: 'Custom'
      },
    ]

    get items() {
      if (this.dimensions) {
        const items = this.types.filter(t => !Object.prototype.hasOwnProperty.call(this.dimensions, t.value));
        this.type = items[0].value;
        return items;
      } else {
        return [];
      }
    }

    get disabled() {
      if (this.type != '') {
        return false;
      }
      return this.dimensions ? this.name.length === 0 || Object.prototype.hasOwnProperty.call(this.dimensions, this.name) : true;
    }

    add() {
      const name = this.type != '' ? this.type : this.name;
      if (this.dimensions && name && this.seed) {
        let dimension: Dimension;
        switch (name) {
          case "minecraft:overworld":
            dimension = getDefaultOverworldDimension(this.seed);
            break;
          case "minecraft:the_nether":
            dimension = getDefaultNetherDimension(this.seed);
            break;
          case "minecraft:the_end":
            dimension = getDefaultEndDimension(this.seed);
            break;
          default:
            dimension = getDefaultDimension(name, this.seed);
        }

        Vue.set(this.dimensions, name, dimension);
        this.dialog = false;
        this.name = '';
        this.emitInput();
      }
    }

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.dimensions = this.value;
      }
    }

    emitInput() {
      this.$emit('input', this.dimensions);
    }
  }
</script>

<style scoped>

</style>