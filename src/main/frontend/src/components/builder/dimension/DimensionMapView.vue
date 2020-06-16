<template>
  <div class="d-flex flex-column">
    <div class="mb-3">
      <add-dimension-dialog v-model="dimensions" :seed="seed"/>
    </div>
    <div v-for="(name, i) in dimensionKeys" :key="i" class="mb-8">
      <dimension-view v-model="dimensions[name]" :name="name" :dimensions="dimensions" :show-hints="showHints"/>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import RemoveDimensionDialog from "@/components/builder/dimension/RemoveDimensionDialog.vue";
  import AddDimensionDialog from "@/components/builder/dimension/AddDimensionDialog.vue";
  import DimensionView from "@/components/builder/dimension/DimensionView.vue";
  import {DimensionMap} from "@//types";

  @Component({
    components: {
      AddDimensionDialog,
      RemoveDimensionDialog,
      DimensionView,
    },
  })
  export default class DimensionMapView extends Vue {

    @Prop() value?: DimensionMap;
    @Prop() seed?: number;
    @Prop() showHints?: boolean;
    dimensions: DimensionMap | null = null;

    get dimensionKeys() {
      return this.dimensions ? Object.entries(this.dimensions).map(([key, value]) => key) : [];
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
