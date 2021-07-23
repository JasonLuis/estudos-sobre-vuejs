<template>
  <div id="app">
    <FuteHeader 
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />
    <FuteSection 
      :championship="championship"
      :current-component="currentSectionComponent"
    />
    <FuteFooter />
  </div>
</template>

<script>

import FuteHeader from './components/FuteHeader';
import FuteFooter from './components/FuteFooter';
import FuteSection from './components/FuteSection';
export default {
  name: 'App',
  components: {
    FuteHeader,
    FuteFooter,
    FuteSection,
  },
  data() {
    return {
      championship: 'Campeonato Brasileiro',
      currentSectionComponent: 'HcodeSectionBanner',
    }
  },
  methods: {
    changeChampionship(value){
      this.championship = value;
    },
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
