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
    this.getMusicData();
  },
  methods: {
    ...mapActions([
      'getMusicData'
    ])
  }
}
</script>

<style lang="scss">

</style>
