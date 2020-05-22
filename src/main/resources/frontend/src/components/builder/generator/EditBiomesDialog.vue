<template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on }">
      <v-btn
          v-on="on"
          small
          color="indigo"
      >
        <v-icon>mdi-plus</v-icon>
        Edit Biomes
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey darken-3" primary-title>
        Edit Biomes
      </v-card-title>

      <v-card-text class="title text-lg-center mt-3">
<!--        <v-text-field-->
<!--            class="mx-12 my-3"-->
<!--            label="Name"-->
<!--            v-model="name"-->
<!--        ></v-text-field>-->
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn
            color="error"
            text
            :disabled="disabled"
            @click="add()"
        >
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {DimensionMap, getDefaultOverworldDimension} from "../types";

  @Component
  export default class EditBiomesDialog extends Vue {
    @Prop() value?: DimensionMap;
    @Prop() seed?: number;
    dimensions: DimensionMap | null = null;
    name = '';
    dialog?: boolean = false;

    get disabled() {
      return this.dimensions ? this.name.length === 0 || Object.prototype.hasOwnProperty.call(this.dimensions, this.name) : true;
    }

    add() {
      if (this.dimensions && this.name && this.seed) {
        Vue.set(this.dimensions, this.name, getDefaultOverworldDimension(this.seed));
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