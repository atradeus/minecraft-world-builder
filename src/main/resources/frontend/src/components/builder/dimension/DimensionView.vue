<template>
  <v-card>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-text>
      <div class="d-flex flex-column">
        <div>
          <v-select
              label="Type"
              v-model="type"
              :items="types"
              @change="setType"
          ></v-select>
        </div>
        <div v-if="type === 'custom'">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-select
                      label="Ultrawarm"
                      v-model="dimensionType.ultrawarm"
                      :items="[true, false]"
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                      label="Natural"
                      v-model="dimensionType.natural"
                      :items="[true, false]"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                      label="Fixed Time"
                      v-model="dimensionType.fixed_time"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                      label="Ambient Light"
                      v-model="dimensionType.ambient_light"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                      label="Has Ceiling"
                      v-model="dimensionType.has_ceiling"
                      :items="[true, false]"
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                      label="Has Skylight"
                      v-model="dimensionType.has_skylight"
                      :items="[true, false]"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                      label="Shrunk"
                      v-model="dimensionType.shrunk"
                      :items="[true, false]"
                  ></v-select>
                </v-col>
                <v-col cols="6">

                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
        <div>
          <generator-view v-model="dimension.generator" :seed="seed"/>
        </div>
      </div>
    </v-card-text>
    <remove-dimension-dialog v-model="dimensions" :name="name"/>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {Dimension, DimensionMap, DimensionType, getDefaultDimensionType} from "@/components/builder/types";
  import RemoveDimensionDialog from "@/components/builder/dimension/RemoveDimensionDialog.vue";
  import AddDimensionDialog from "@/components/builder/dimension/AddDimensionDialog.vue";
  import GeneratorView from "@/components/builder/generator/GeneratorView.vue";

  @Component({
    components: {
      AddDimensionDialog,
      RemoveDimensionDialog,
      GeneratorView,
    },
  })
  export default class DimensionView extends Vue {

    @Prop() value?: Dimension;
    @Prop() name?: string;
    @Prop() seed?: number;
    @Prop() dimensions?: DimensionMap;

    dimension: Dimension | null = null;

    type = '';
    types = ['minecraft:overworld', 'minecraft:the_nether', 'minecraft:the_end', 'custom'];
    dimensionType = getDefaultDimensionType();

    setType() {
      this.$nextTick(() => {
        if (this.type == 'custom') {
          if (this.dimension)
            this.dimension.type = this.dimensionType;
        } else {
          if (this.dimension)
            this.dimension.type = this.type;
        }
      });
    }

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.dimension = this.value;
        if (this.instanceOfDimensionType(this.dimension.type)) {
          this.dimensionType = this.dimension.type;
        } else {
          this.type = this.dimension.type;
        }
      }
    }

    instanceOfDimensionType(object: any): object is DimensionType {
      return (object as DimensionType).fixed_time != undefined;
    }
  }
</script>

<style scoped>

</style>
