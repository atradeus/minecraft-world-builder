<template>
  <div>
    <v-row no-gutters>
      <v-col cols="8">
        <v-combobox
            multiple chips solo
            label="Structures"
            item-text="name"
            item-value="namespaceId"
            v-model="selected"
            :items="items"
        ></v-combobox>
      </v-col>
      <v-col class="flex text-center mt-1">
        <v-btn
            rounded
            color="primary"
            :disabled="selected.length === 0"
            @click="addSelected"
        >
          Add Structures
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-chip
            v-for="(s, i) in structuresSet.values()" :key="i"
            @click:close="removeStructure(s)"
            @click="showStructure(s)"
            close
            class="ma-1"
        >
          {{ s }}
        </v-chip>
      </v-col>
    </v-row>
    <v-card v-if="structuresSet.size > 0" class="mt-6">
      <v-card-text>
        <v-row class="mt-0" dense>
          <v-col class="text-h6 text-center">
            {{ structureName }}
          </v-col>
        </v-row>
        <v-row class="mt-0" justify="center">
          <v-col cols="3" class="">
            <v-text-field
                filled rounded
                label="Spacing"
                v-model="structure.spacing"
                type="number"
                @change="setStructure"
                hint="Average distance between two structure placement attempts of this type in chunks"
                :persistent-hint="showHints"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                filled rounded
                label="Separation"
                v-model="structure.separation"
                type="number"
                @change="setStructure"
                hint="Minimum distance between two structures of this type in chunks; must be less than spacing"
                :persistent-hint="showHints"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                filled rounded
                label="Salt"
                v-model="structure.salt"
                type="number"
                @change="setStructure"
                hint="A number that assists in randomization"
                :persistent-hint="showHints"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {getRandomInt, Structure, StructureMap} from "@/types";
  import {getStructures, MinecraftType} from "@/data";

  @Component
  export default class StructureView extends Vue {

    @Prop() value?: StructureMap;
    @Prop() showHints?: boolean;

    structures?: StructureMap;
    structuresSet: Set<string> = new Set();

    structure?: Structure;
    structureName = '';

    selected: MinecraftType[] = [];
    items: MinecraftType[] = getStructures();

    // dialog = false;

    @Watch('value', {immediate: true, deep: true})
    valueChanged() {
      if (this.value) {
        this.structures = this.value;

        this.structuresSet.clear();
        Object.entries(this.structures).forEach(([key, value]) => this.structuresSet.add(key));

        if (this.structuresSet.size == 0) {
          this.items = getStructures();
        } else {
          if (!this.structureName || !this.structuresSet.has(this.structureName)) {
            this.structureName = Array.from(this.structuresSet.keys())[0];
          }
          this.structure = this.structures[this.structureName];
          this.filterItems();
        }
      } else {
        this.items = getStructures();
      }
    }

    addSelected() {
      this.$nextTick(() => {
        if (this.selected) {
          this.selected
            .forEach(s => {
              const key = `minecraft:${s.namespaceId}`
              if (this.structures)
                Vue.set(this.structures, key, {
                  spacing: 32,
                  separation: 8,
                  salt: getRandomInt(10000000, 19999999)
                });
              this.structuresSet.add(key);
              this.selected = [];
            });
          this.filterItems();
          this.emitInput();
        }
      });
    }

    removeStructure(s: string) {
      if (this.structures) {
        Vue.delete(this.structures, s);
        this.structuresSet.delete(s);
        this.filterItems();
        this.emitInput();
      }
    }

    showStructure(s: string) {
      if (this.structures) {
        this.structureName = s;
        this.structure = this.structures[s];
      }
    }

    setStructure() {
      if (this.structures && this.structure) {
        this.structures[this.structureName] = this.structure;
        this.emitInput()
      }
    }

    filterItems() {
      this.items = getStructures().filter(i => !this.structuresSet.has(`minecraft:${i.namespaceId}`));
    }

    emitInput() {
      this.$emit('input', this.structures);
    }
  }
</script>

<style scoped>

</style>
