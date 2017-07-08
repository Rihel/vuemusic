<template>
  <div id="app">
    
    <router-view></router-view>
    <musicbox></musicbox>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import "font-awesome/scss/font-awesome.scss";
import musicPlayBox from './components/musicPlayBox';
export default {
  name: 'app',
  components:{
    'musicbox':musicPlayBox
  },
  created(){
    this.getBanners();
  },
  methods: {
    ...mapActions([
      'getBanners'
    ])
  }
}
</script>

<style lang="scss">

</style>
