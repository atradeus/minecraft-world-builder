<template>
  <v-text-field
      filled rounded
      label="Seed"
      v-model="seed"
      :hint="hint"
      :persistent-hint="showHints"
      append-icon="mdi-autorenew"
      @click:append="getNewSeed"
      @change="emitInput"
  />
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {getRandomSeed} from "@/types";

  @Component
  export default class SeedInputField extends Vue {

    @Prop() value?: number;
    @Prop() showHints?: boolean;
    @Prop() hint?: string;

    seed = getRandomSeed();

    getNewSeed() {
      this.seed = getRandomSeed();
      this.emitInput();
    }

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.seed = this.value;
      }
    }

    emitInput() {
      this.$emit('input', this.seed);
    }
  }
</script>

<style scoped>

</style>