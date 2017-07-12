<template>
  <div id="app">
    <router-view></router-view>
    <musicbox></musicbox>
    <bg></bg>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import "font-awesome/scss/font-awesome.scss";
import musicPlayBox from './components/musicPlayBox';
import bg from './components/bg';
export default {
  name: 'app',
  components: {
    'musicbox': musicPlayBox,
    bg
  },
  created() {
    this.getMusicData();
    this.getNowMusic(28375374)
  },
  methods: {
    ...mapActions([
      'getMusicData',
      'getNowMusic'
    ])
  }
}
</script>

<style lang="scss">

</style>
