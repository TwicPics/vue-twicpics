import Vue from 'vue';
import VueTwicpics from '@twicpics/vue';
import '@twicpics/vue/dist/vuetwicpics.css';

Vue.use(VueTwicpics, {
  domain: 'https://demo.twic.pics',
  defaultParams: {
    anticipation: 0.5,
    maxDpr: 2,
    step: 100,
  },
});
