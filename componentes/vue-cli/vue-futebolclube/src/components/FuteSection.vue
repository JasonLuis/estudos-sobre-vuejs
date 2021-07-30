<template>
  <div>
      <div class="container">
          <div class="row mt-5">
              <h3>Você está vendo notícias do: {{ championship }}</h3>
          </div>
      </div>

      <component :is="currentComponent"> </component>

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
import FuteSectionBanner from './FuteSectionBanner';
import FuteInput from './FuteInput';
//import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    components: { 
        FuteSectionBanner,
        FuteSectionNews: () => import('./FuteSectionNews'),
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

</style>