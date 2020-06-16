<template>
  <v-card flat>
    <v-card-text>
      <v-row dense>
        <v-col cols="">
          <v-select
              filled rounded
              label="Island Noise Override"
              v-model="noise.island_noise_override"
              :items="[true, false]"
              @change="emitInput"
              hint="Causes the world to generate like The End with a big island in the center and smaller ones around. Optional"
              :persistent-hint="showHints"
          ></v-select>
        </v-col>
        <v-col cols="">
          <v-select
              filled rounded
              label="Simplex Surface Noise"
              v-model="noise.simplex_surface_noise"
              :items="[true, false]"
              @change="emitInput"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
              filled rounded
              label="Amplified"
              v-model="noise.amplified"
              :items="[true, false]"
              hint="Toggles between amplified and normal terrain generation. Can be used alongside large biomes in `vanilla_layered` types, and in any dimension (Nether, End, and custom)"
              :persistent-hint="showHints"
          ></v-select>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="4">
          <v-text-field
              filled rounded
              label="Density Factor"
              v-model="noise.density_factor"
              type="number"
              @change="emitInput"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              filled rounded
              label="Density Offset"
              v-model="noise.density_offset"
              type="number"
              @change="emitInput"
              hint="Affects the average land level (not sea level). Values between -1 and 1"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
              filled rounded
              label="Random Density Offset"
              v-model="noise.random_density_offset"
              :items="[true, false]"
          ></v-select>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="">
          <v-text-field
              filled rounded
              label="Size Horizontal"
              v-model="noise.size_horizontal"
              type="number"
              @change="emitInput"
              hint="Changes the X/Z scale of the landmass, but not the biomes"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col cols="">
          <v-text-field
              filled rounded
              label="Size Vertical"
              v-model="noise.size_vertical"
              type="number"
              @change="emitInput"
              hint="Changes the Y scale of the landmass. Values between 1 and 15 gradually increase the hill height, above 20 are all above the normal sea level of 63, and higher than 32 give normal land levels of 100+"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col cols="">
          <v-text-field
              filled rounded
              label="Height"
              v-model="noise.height"
              type="number"
              @change="emitInput"
              hint="Changes the max height of generated terrain by squashing the world. For example, with height=128, the ground is set to Y=32. this does not affect sea level"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense class="mt-3">
        <v-col>
          <p class="subtitle-2">Top Slide</p>
          <p v-if="showHints" class="caption">Settings for the curve at the top of the world</p>
        </v-col>
        <v-col cols="">
          <v-text-field
              filled rounded
              label="Density Offset"
              v-model="noise.top_slide.target"
              type="number"
              @change="emitInput"
              hint="The value of the curve. Negative values will round off the top of the hills in the affected area, positive values will create a roof. The higher the value is, the larger the effect will be"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col cols="">
          <v-text-field
              filled rounded
              label="Size"
              v-model="noise.top_slide.size"
              type="number"
              @change="emitInput"
              hint="Defines the size of the affected area from the top of the world. Size is calculated using the formula size = <height in blocks> * 0.25 / size_vertical"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col cols="">
          <v-text-field
              filled rounded
              label="Offset"
              v-model="noise.top_slide.offset"
              type="number"
              @change="emitInput"
              hint="Moves the affected area from the top of the world. offset uses the same formula as size so offset = <height in blocks> * 0.25 / size_vertical. For top_slide, positive values move the area down and negative values bring it up"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense class="mt-3">
        <v-col>
          <p class="subtitle-2">Bottom Slide</p>
          <p v-if="showHints" class="caption">Settings for the curve at the bottom of the world</p>
        </v-col>
        <v-col cols="">
          <v-text-field
              filled rounded
              label="Density Offset"
              v-model="noise.bottom_slide.target"
              type="number"
              @change="emitInput"
              hint="The value of the curve. Negative values will remove the floor and round off the bottom of the islands, positive values will make a floor. The higher the value is, the larger the effect will be"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col cols="">
          <v-text-field
              filled rounded
              label="Size"
              v-model="noise.bottom_slide.size"
              type="number"
              @change="emitInput"
              hint="Defines the size of the affected area from the bottom of the world. Uses the same formula as in top_slide"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col cols="">
          <v-text-field
              filled rounded
              label="Offset"
              v-model="noise.bottom_slide.offset"
              type="number"
              @change="emitInput"
              hint="Moves the affected area from the bottom of the world. Uses the same formula as in top_slide. For bottom_slide, positive values move the area up and negative values bring it down"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense class="mt-3">
        <v-col>
          Sampling
        </v-col>
        <v-col>
          <v-text-field
              filled rounded
              label="XZ Scale"
              v-model="noise.sampling.xz_scale"
              type="number"
              @change="emitInput"
              hint="Scales the X and Z axis of the noise. Higher values results in more intricate horizontal shapes"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              filled rounded
              label="XZ Factor"
              v-model="noise.sampling.xz_factor"
              type="number"
              @change="emitInput"
              hint="Smoothes the noise on the horizontal axis"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              filled rounded
              label="Y Scale"
              v-model="noise.sampling.y_scale"
              type="number"
              @change="emitInput"
              hint="Scales the Y axis of the noise. Higher values will result in more intricate vertical shapes"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              filled rounded
              label="Y Factor"
              v-model="noise.sampling.y_factor"
              type="number"
              @change="emitInput"
              hint="Smoothes the noise on the vertical axis"
              :persistent-hint="showHints"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {Noise} from "@/types";

  @Component
  export default class NoiseView extends Vue {

    @Prop() value?: Noise;
    @Prop() showHints?: boolean;
    noise?: Noise;

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.noise = this.value;
      }
    }

    emitInput() {
      this.$emit('input', this.noise);
    }
  }
</script>

<style scoped>

</style>