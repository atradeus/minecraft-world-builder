<template>
  <v-card-text style="position: relative">
    <v-dialog v-model="dialog" width="700">
      <template v-slot:activator="{ on }">
        <v-btn
            v-on="on"
            small absolute fab bottom right
            color="red"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey darken-3" primary-title>
          Delete Dimension
        </v-card-title>

        <v-card-text class="title text-lg-center mt-3">
          Are you sure you want to delete <span class="red--text">{{ name }}</span>?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="error" text @click="remove(name)">
            Remove
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card-text>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {DimensionMap} from "@//types";

  @Component({
    components: {},
  })
  export default class RemoveDimensionDialog extends Vue {

    @Prop() value?: DimensionMap;
    @Prop() name?: string;
    dimensions: DimensionMap | null = null;
    dialog?: boolean = false;

    remove(name: string) {
      if (this.dimensions) {
        Vue.delete(this.dimensions, name);
        this.dialog = false;
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