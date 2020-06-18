<template>
  <v-card>
    <v-card-title>
      {{ name }}
      <v-spacer/>
      <div class="caption">
        <v-tooltip v-model="copyTooltip" top :fixed="false">
          <template v-slot:activator="{ on }">
            {{ executeCommand }}
            <v-btn
                v-on="on"
                class="ml-3"
                x-small fab
                @click="copyToClipboard"
            >
              <v-icon dense>mdi-clipboard-text-outline</v-icon>
            </v-btn>
          </template>
          <span>{{ copyText }}</span>
        </v-tooltip>
      </div>
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="5">
          <v-select
              filled rounded
              label="Type"
              v-model="type"
              :items="types"
              item-text="text"
              item-value="value"
              @change="setType"
          ></v-select>
        </v-col>
        <v-col v-if="type === ''" class="ml-12 mt-3">
          <dimension-settings-dialog v-model="dimension.type" :show-hints="showHints"/>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <generator-view v-model="dimension.generator" :seed="seed" :show-hints="showHints"/>
        </v-col>
      </v-row>
    </v-card-text>
    <remove-dimension-dialog v-model="dimensions" :name="name"/>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from "vue-property-decorator";
  import {Dimension, DimensionMap, DimensionType, getDefaultDimensionType} from "@//types";
  import RemoveDimensionDialog from "@/components/builder/dimension/RemoveDimensionDialog.vue";
  import AddDimensionDialog from "@/components/builder/dimension/AddDimensionDialog.vue";
  import GeneratorView from "@/components/builder/generator/GeneratorView.vue";
  import DimensionSettingsDialog from "@/components/builder/dimension/DimensionSettingsDialog.vue";
  import SeedInputField from "@/components/builder/SeedInputField.vue";

  @Component({
    components: {
      AddDimensionDialog,
      RemoveDimensionDialog,
      GeneratorView,
      DimensionSettingsDialog
    },
  })
  export default class DimensionView extends Vue {

    @Prop() value?: Dimension;
    @Prop() name?: string;
    @Prop() seed?: number;
    @Prop() showHints?: boolean;
    @Prop() dimensions?: DimensionMap;

    dimension: Dimension | null = null;
    type = '';
    types = [
      {
        value: 'minecraft:overworld',
        text: 'Overworld'
      },
      {
        value: 'minecraft:the_nether',
        text: 'The Nether'
      },
      {
        value: 'minecraft:the_end',
        text: 'The End'
      },
      {
        value: '',
        text: 'Custom'
      },
    ]

    copyText = 'Copy command';
    copyTooltip = false;

    get executeCommand() {
      return `execute in ${this.name} run tp @s ~ ~ ~`;
    }

    copyToClipboard() {
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = this.executeCommand;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);

      this.copyTooltip = true;
      this.copyText = 'Copied!';
      setTimeout(() => {
        this.copyTooltip = false;
        this.copyText = 'Copy command';
      }, 2000);
    }

    setType() {
      this.$nextTick(() => {
        if (this.type == '') {
          if (this.dimension && this.name)
            this.dimension.type = getDefaultDimensionType(this.name);
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
        if (!this.instanceOfDimensionType(this.dimension.type)) {
          this.type = this.dimension.type;
        }
      }
    }

    instanceOfDimensionType(object: any): object is DimensionType {
      return (object as DimensionType).ambient_light != undefined;
    }
  }
</script>

<style scoped>

</style>
