<template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" rounded small color="indigo">
        <v-icon>mdi-pencil-outline</v-icon>
        Edit Biomes
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey darken-3" primary-title>
        Edit Biomes
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
        <v-row dense class="mt-3">
          <v-col cols="9">
            <v-combobox
                chips solo rounded filled
                :multiple="true"
                label="All Biomes"
                v-model="selected"
                item-text="name"
                :items="allBiomes"
            ></v-combobox>
          </v-col>
          <v-col class="mt-4">
            <v-btn
                rounded small
                :disabled="selected.length === 0"
                @click="addSelected">
              <v-icon>mdi-plus</v-icon>
              Add Selected
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense v-if="biomes.length > 0">
          <v-col>
            <v-card>
              <v-card-text>
                <v-chip
                    v-for="(b, i) in biomes" :key="i"
                    @click:close="removeBiome(b)"
                    @click="showBiome(b)"
                    class="ma-1"
                    close>
                  {{ b.biome }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense v-if="biomes.length > 0" class="mt-3">
          <v-col class="title">
            {{ biome.biome }}
          </v-col>
        </v-row>
        <v-row dense v-if="biomes.length > 0">
          <v-col cols="4">
            <v-text-field
                rounded filled
                label="Altitude"
                v-model="biome.parameters.altitude"
                type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                rounded filled
                label="Weirdness"
                v-model="biome.parameters.weirdness"
                type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                rounded filled
                label="Offset"
                v-model="biome.parameters.offset"
                type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense v-if="biomes.length > 0">
          <v-col cols="4">
            <v-text-field
                rounded filled
                label="Temperature"
                v-model="biome.parameters.temperature"
                type="number"
                hint="Affects rain/snow and the color of leaves and grass"
                :persistent-hint="showHints"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                rounded filled
                label="humidity"
                v-model="biome.parameters.humidity"
                type="number"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>

</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {Biome, getBiome} from "@/types";
  import {getBiomes, MinecraftType} from "@/data";

  @Component
  export default class EditBiomesDialog extends Vue {

    @Prop() value?: Biome[];
    @Prop() showHints?: boolean;

    biome: Biome = getBiome('');
    biomes: Biome[] = [];

    allBiomes: MinecraftType[] = getBiomes();
    selected: MinecraftType[] = [];

    // multiple = false;
    dialog = false;

    addSelected() {
      if (this.selected) {
        this.selected.map((b) => this.biomes.push(getBiome(b.namespaceId)));
        this.biome = this.biomes[0];
      }
      this.selected = [];
      this.emitInput();
    }

    removeBiome(biome: Biome) {
      this.biomes = this.biomes.filter(b => b.biome != biome.biome);
      this.emitInput();
    }

    showBiome(biome: Biome) {
      this.biome = biome;
    }

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.biomes = this.value;
        //this.biome = this.biomes[0];
      } else {
        this.biomes = [];
      }
    }

    emitInput() {
      this.$emit('input', this.biomes);
    }

    // async getBiomes() {
    //   try {
    //     const response = await this.$axios.get('/api/biomes');
    //     if (response.data) {
    //       this.allBiomes = response.data;
    //       this.$store.commit("SET_BIOMES", this.allBiomes);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    // mounted() {
    //   if (this.$store.state.biomes.length > 0) {
    //     this.allBiomes = this.$store.state.biomes;
    //   } else {
    //     this.getBiomes();
    //   }
    // }
  }
</script>

<style scoped>

</style>