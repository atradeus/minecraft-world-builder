<template>
  <v-card elevation="3">
    <v-card-title>Generator</v-card-title>
    <v-card-text>
      <div class="d-flex flex-column">
        <!--        <div>-->
        <v-text-field
            label="Type"
            v-model="generator.type"
        ></v-text-field>
        <!--        </div>-->
        <!--        <div>-->
        <v-text-field
            label="Seed"
            v-model="generator.seed"
        ></v-text-field>
        <!--        </div>-->
        <!--        <div>-->
        <v-text-field
            label="Settings"
            v-model="generator.settings"
        ></v-text-field>
        <!--        </div>-->
        <biome-source-view v-model="generator.biome_source"/>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {Generator} from "@/components/builder/types";
  import BiomeSourceView from "@/components/builder/generator/BiomeSourceView.vue";

  @Component({
    components: {
      BiomeSourceView
    },
  })
  export default class GeneratorView extends Vue {

    @Prop() value?: Generator;
    @Prop() seed?: number;
    generator: Generator | null = null;

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.generator = this.value;
      }
    }

    emitInput() {
      this.$emit('input', this.generator);
    }

  }
</script>

<style scoped>

</style>
