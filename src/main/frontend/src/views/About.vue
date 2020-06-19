<template>
  <v-container>
    <v-row no-gutters align="center">
      <v-col cols="8" offset="2">
        <v-card height="500">
          <v-card-text class="text-subtitle-1">
            <p>
              Based on documentation from <a target="_blank" href="https://minecraft.gamepedia.com/Custom">Official Minecraft Wiki</a>
            </p>
            <p>
              Custom worlds are new feature in Minecraft 1.16. The documentation is incomplete and there are probably bugs in the tool and in the
              game.
              I have not tested every combination and I do not know many default values or ranges. Don't be surprised if something doesn't work.
              If you find a bug in the tool, you can send an email to
              <a href="mailto:support@logicaldata.io?subject=Minecraft%20world%20builder">minecraft@logicaldata.io</a>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";

  @Component({
    components: {},
  })
  export default class About extends Vue {

  }
</script>

<style scoped>

</style>