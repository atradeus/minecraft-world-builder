<template>
  <v-dialog v-model="dialog" width="800">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" rounded small color="primary">
<!--        <v-icon>mdi-pencil-outline</v-icon>-->
        Dimension Settings
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey darken-3" primary-title>
        Dimension Settings
        <v-spacer/>
        <v-btn
            class="mt-1"
            color="red"
            text fab small
            @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-row dense class="mt-8">
          <v-col>
            <v-select
                filled rounded
                label="Ultrawarm"
                v-model="dimensionType.ultrawarm"
                :items="[true, false]"
                hint="Whether the dimensions behaves like the nether (water evaporates and sponges dry) or not. Also causes lava to spread thinner"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
                filled rounded
                label="Natural"
                v-model="dimensionType.natural"
                :items="[true, false]"
                hint="When false, compasses will spin randomly. When true, nether portals can spawn zombified piglins"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
                filled rounded
                label="Shrunk"
                v-model="dimensionType.shrunk"
                :items="[true, false]"
                hint="Determines whether the dimension is treated as eight meters per block like in the Nether"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-select
                filled rounded
                label="Has Ceiling"
                v-model="dimensionType.has_ceiling"
                :items="[true, false]"
                hint="Whether the dimension has a bedrock ceiling or not. When true, causes lava to spread faster"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
                filled rounded
                label="Has Skylight"
                v-model="dimensionType.has_skylight"
                :items="[true, false]"
                hint="Whether the dimension has skylight access or not"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field
                filled rounded
                label="Ambient Light"
                v-model="dimensionType.ambient_light"
                hint="How much light the dimension has, default is 0.5 in the demo file (for upper and lower bounds as well as precise effect"
                :persistent-hint="showHints"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-select
                filled rounded
                label="Piglin Safe"
                v-model="dimensionType.piglin_safe"
                :items="[true, false]"
                hint="Whether piglins will shake and transform to zombified piglins"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
                filled rounded
                label="Has Raids"
                v-model="dimensionType.has_raids"
                :items="[true, false]"
                hint="Whether players with the Bad Omen effect can cause a raid"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field
                filled rounded
                label="Fixed Time"
                v-model="dimensionType.fixed_time"
                hint="Can be false or any integer from 0 to 24000. If this is set to a number, the time of the day will always be the specified value. However, in at least some worlds,[needs testing] false is interpreted as 0, giving constant sunrise. To ensure a normal time cycle, leave the attribute undefined (i.e, do not include it)"
                :persistent-hint="showHints"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-select
                filled rounded
                label="Bed Works"
                v-model="dimensionType.bed_works"
                :items="[true, false]"
                hint="Whether players can use a bed to sleep"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
                filled rounded
                label="Respawn Anchor Works"
                v-model="dimensionType.respawn_anchor_works"
                :items="[true, false]"
                hint="Whether piglins will shake and transform to zombified piglins"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
          <v-col>
            <!-- Empty -->
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-text-field
                filled rounded
                label="Logical Height"
                v-model="dimensionType.logical_height"
                hint="The maximum height to which chorus fruits and nether portals can bring players within this dimension. This excludes portals that were already built above the limit as they still connect normally"
                :persistent-hint="showHints"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
                filled rounded
                :items="infiniburnOptions"
                item-value="value"
                item-text="text"
                label="Infiniburn"
                v-model="dimensionType.infiniburn"
                hint="A resource location defining what block tag to use for infiniburn"
                :persistent-hint="showHints"
            ></v-select>
          </v-col>
          <v-col>
            <!-- Empty -->
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {Biome, DimensionType, getBiome, getDefaultDimensionType} from "@/types";
  import {getBiomes, MinecraftType} from "@/data";

  @Component
  export default class DimensionSettingsDialog extends Vue {

    @Prop() value?: DimensionType;
    @Prop() showHints?: boolean;

    dimensionType?: DimensionType = getDefaultDimensionType('minecraft:overworld');

    infiniburnOptions = [
      {
        text: 'Overworld',
        value: 'minecraft:infiniburn_overworld'
      },
      {
        text: 'Nether',
        value: 'minecraft:infiniburn_nether'
      },
      {
        text: 'End',
        value: 'minecraft:infiniburn_end'
      }
    ];

    dialog = false;

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.dimensionType = this.value;
      }
    }

    emitInput() {
      this.$emit('input', this.dimensionType);
    }
  }
</script>

<style scoped>

</style>