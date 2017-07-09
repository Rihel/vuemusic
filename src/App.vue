<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "font-awesome/scss/font-awesome.scss";
export default {
 name: 'app',
}
</script>

<style lang="scss">
@import '../static/css/reset.css';
@import 'assets/scss/scssBypages/userCenter/userCenter';
@import 'assets/scss/scssBypages/songSheet/songSheet';
@import 'assets/scss/scssBypages/recommend/recommend';
@import 'assets/css/wyf-music.css';
@import 'assets/css/wyf-song.css';
@import 'assets/css/wzx-radio.css';
@import 'assets/css/wyf-late.css';
</style>
