<template>
  <div id="app">
    <FuteHeader 
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />
    <FuteSection 
      :current-component="currentSectionComponent"
    />
    <FuteFooter />
  </div>
</template>

<script>

import FuteHeader from './components/FuteHeader';
import FuteFooter from './components/FuteFooter';
import FuteSection from './components/FuteSection';
import { mapActions } from "vuex";
// import { mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    FuteHeader,
    FuteFooter,
    FuteSection,
  },
  data() {
    return {   
      currentSectionComponent: 'FuteSectionBanner',
    }
  },
  methods: {
    /*
    ...mapMutations({
      changeChampionship: 'setChampionship',
    }),
    */
    ...mapActions(['changeChampionship']),
    /*changeChampionship: function(value) {
      this.$store.dispatch('changeChampionship', value);
    },*/
    changeComponent(value) {
      console.log(value)
      let component;
      switch (value) {
        case 'home':
          component = 'FuteSectionBanner';
        break;
        case 'news':
          component = 'FuteSectionNews'
        break;
      }
      this.currentSectionComponent = component;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
