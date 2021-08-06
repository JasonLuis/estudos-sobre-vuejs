<template>
  <div>
      <div class="container">
          <div class="row mt-5">
              <h3>Você está vendo notícias do: {{ championship }}</h3>
          </div>
      </div>
      <transition name="fade-view">
          <router-view></router-view>  
      </transition>  
      <!-- <component :is="currentComponent"> </component> -->

      <div class="container">
          <div class="row my-club mt-5">
              <div class="col-6">
                 
                  <h2>Seu clube é: {{ myClub }}</h2>
              </div>
              <div class="col-6">
                <FuteInput />
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import FuteInput from './FuteInput';
//import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    components: { 
        FuteInput,
    },
    data() {
        return {
            
        } 
    },
    props: {
        currentComponent: String,
    },
    computed: {
        ...mapGetters({
            championship: 'getChampionship',
            myClub: 'getClubName',
        }),
        /*
        ...mapState(['championship']),
        ...mapState({
            myClub: 'clubName',
        })
        */
    } 
}
</script>

<style scoped> 
.fade-view-enter, .fade-view-leave-to {
    opacity: 0;
}
.fade-view-enter-active, .fade-view-leave-active {
    transition: opacity .5s ease-in-out;
}
</style>