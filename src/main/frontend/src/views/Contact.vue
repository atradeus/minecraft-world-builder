<template>
  <div>
    <v-row dense class="mt=6">
      <v-col cols="5" offset="2" lg="3" offset-lg="4">
        <v-text-field
            filled rounded
            :disabled="disabled"
            label="Email"
            v-model="email"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-textarea
            filled
            :disabled="disabled"
            v-model="content"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col offset="2" offset-lg="4">
        <v-btn
            rounded
            :disabled="disableSubmit"
            @click="submit"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>

  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";

  // eslint-disable-next-line
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  @Component({
    components: {},
  })
  export default class Contact extends Vue {

    email = '';
    subject = '';
    content = '';
    disabled = false;

    get disableSubmit() {
      return !(this.email && emailRegex.test(String(this.email).toLowerCase()))
        || this.content.length == 0
        || this.disabled;
    }

    async submit() {
      this.disabled = true;
      try {
        console.log(JSON.stringify({
          email: this.email,
          subject: this.subject,
          content: this.content
        }));

        await this.$axios.post('/api/contact',
          {
            email: this.email,
            subject: this.subject,
            content: this.content
          });
        this.disabled = false;
      } catch (e) {
        console.error(e);
      }
    }

    async locale() {
      try {
        const response = await this.$axios.get('/api/locale');
        if (response.data) {
          console.log(response.data);
          console.log(navigator.languages);
        }
      } catch (e) {
        console.error(e);
      }
    }

    mounted() {
      //this.locale()
    }

  }
</script>

<style scoped>

</style>