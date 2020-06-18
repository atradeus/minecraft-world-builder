import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  dark: true,
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken1,
        // primary: colors.indigo.darken1,
        // secondary: colors.grey.darken1,
        // accent: colors.shades.black,
        // error: colors.red.accent3,
        // info: colors.red.accent3,
        // success: colors.red.accent3,
        // warning: colors.red.accent3,
      },
      dark: {
        primary: colors.indigo.lighten1,
      },
    },
  },
});
