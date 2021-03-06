<template>
  <v-card flat>
    <v-card-title>
      Biome Source
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="8" lg="6">
          <seed-input-field
              v-model="biomeSource.seed"
              :show-hints="showHints"
              hint="The seed used for biome generation. In most cases, this is exactly the same as the dimension seed (and by extension the world seed), but can be different and the biome generation for this dimension will be based upon this seed and not the dimension seed"
          />
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="5">
          <v-select
              filled rounded
              label="Type"
              v-model="type"
              :items="types"
              item-value="value"
              item-text="text"
              @change="changeType"
          ></v-select>
        </v-col>
      </v-row>

      <v-row v-if="type === 'minecraft:vanilla_layered'" dense>
        <v-col cols="4" lg="3">
          <v-select
              filled rounded
              label="Large Biomes"
              v-model="biomeSource.large_biomes"
              :items="[true, false]"
          ></v-select>
        </v-col>
      </v-row>

      <v-row v-if="type === 'minecraft:multi_noise'" dense>
        <v-col cols="5">
          <v-select
              filled rounded
              label="Preset"
              v-model="preset"
              :items="presets"
              @change="changePreset"
          ></v-select>
        </v-col>
        <v-col v-if="preset === ''" class="mt-3 ml-6">
          <edit-biomes-dialog v-model="biomeSource.biomes" :show-hints="showHints"/>
        </v-col>
      </v-row>

      <v-row v-if="type === 'minecraft:fixed'" dense>
        <v-col cols="8" lg="8">
          <v-select
              filled rounded
              label="Biome"
              v-model="biome"
              :items="allBiomes"
              @change="changeBiome"
              item-text="name"
              item-value="namespaceId"
          ></v-select>
        </v-col>
      </v-row>

      <template v-if="type === 'minecraft:checkerboard'">
        <v-row no-gutters>
          <v-col cols="3" lg="2">
            <v-text-field
                filled rounded
                label="Scale"
                v-model="biomeSource.scale"
                hint="Determines the size of the squares on an exponential scale"
                :persistent-hint="showHints"
                @change="emitInput"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="10" lg="8" class="mt-0">
            <v-select
                filled rounded multiple
                label="Biomes"
                v-model="biomeSource.biomes"
                :items="allBiomes"
                item-text="name"
                item-value="namespaceId"
                @change="emitInput"
            ></v-select>
          </v-col>
        </v-row>
      </template>

      <v-row v-if="type === 'minecraft:the_end'">
        <v-col>
          <!-- Placeholder: nothing to do here -->
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {BiomeSource, getBiome, getRandomSeed} from "@//types";
  import EditBiomesDialog from "@/components/builder/generator/EditBiomesDialog.vue";
  import {getBiomes, getBlocks, MinecraftType} from "@/data";
  import SeedInputField from "@/components/builder/SeedInputField.vue";

  @Component({
    components: {
      EditBiomesDialog,
      SeedInputField
    },
  })
  export default class BiomeSourceView extends Vue {

    @Prop() value?: BiomeSource;
    @Prop() seed?: number;
    @Prop() showHints?: boolean;

    biome = 'plains';
    biomeSource?: BiomeSource;

    allBiomes: MinecraftType[] = getBiomes();

    type = '';
    types = [
      {
        text: 'Vanilla Layered',
        value: 'minecraft:vanilla_layered'
      },
      {
        text: 'Multi Noise',
        value: 'minecraft:multi_noise'
      },
      {
        text: 'The End',
        value: 'minecraft:the_end'
      },
      {
        text: 'Fixed',
        value: 'minecraft:fixed'
      },
      {
        text: 'Checkerboard',
        value: 'minecraft:checkerboard'
      },
    ];

    preset? = '';
    presets = [
      {
        text: 'Nether',
        value: 'minecraft:nether'
      },
      {
        text: 'Custom',
        value: ''
      }
    ];

    changeType() {
      if (this.biomeSource) {
        this.biomeSource = {
          seed: this.biomeSource.seed,
          type: this.type
        };
        switch (this.type) {
          case 'minecraft:vanilla_layered':
            this.biomeSource = Object.assign({}, this.biomeSource, {large_biomes: false})
            break;
          case 'minecraft:multi_noise':
            this.preset = 'minecraft:nether';
            this.biomeSource = Object.assign({}, this.biomeSource, {preset: 'minecraft:nether'})
            break;
          case 'minecraft:the_end':
            // nothing to do
            break;
          case 'minecraft:fixed':
            this.biome = 'plains'
            this.biomeSource = Object.assign({}, this.biomeSource, {biome: 'minecraft:plains'})
            break;
          case 'minecraft:checkerboard':
            this.biomeSource = Object.assign({}, this.biomeSource,
              {
                scale: 256,
                biomes: ['plains']
              });
            break;
        }
        this.emitInput();
      }
    }

    changeBiome() {
      this.$nextTick(() => {
        if (this.biomeSource) {
          this.biomeSource.biome = `minecraft:${this.biome}`;
          this.emitInput();
        }
      });
    }

    getNewSeed() {
      if (this.biomeSource)
        this.biomeSource.seed = getRandomSeed();
      this.emitInput();
    }

    changePreset() {
      if (this.biomeSource) {
        this.biomeSource = {
          seed: this.biomeSource.seed,
          type: this.type
        };
        if (this.preset == 'minecraft:nether') {
          this.biomeSource = Object.assign({}, this.biomeSource, {preset: 'minecraft:nether'})
        } else {
          this.biomeSource = Object.assign({}, this.biomeSource,
            {biomes: [getBiome('minecraft:plains')]})
        }
        this.emitInput();
      }
    }

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.biomeSource = this.value;
        this.type = this.biomeSource.type;
        if (this.biomeSource.preset) {
          this.preset = this.biomeSource.preset;
        } else {
          this.preset = '';
        }
      }
    }

    emitInput() {
      this.$emit('input', this.biomeSource);
    }
  }
</script>

<style scoped>

</style>