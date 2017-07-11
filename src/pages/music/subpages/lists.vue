<template>
<!--榜单页面-->
<!--作者：hubvues-->


<div class="classify">
  <loading v-if="!isShow"></loading>
  <div class="title">官方榜</div>
  <div class=wl-list>
    <figure v-for="item,index in list">
      <router-link :to="'/listsDelate/'+item.id" class="list-item">
        <div class="wl-songs">
          <lazy-image :src="item.coverImgUrl"></lazy-image>
        </div>
        <ul>
          <li class="textLine">
            <span>1.</span>{{item.tracks[0].name}}-{{item.tracks[0].artists[0].name}}</li>
          <li class="textLine">
            <span>2.</span>{{item.tracks[1].name}}-{{item.tracks[1].artists[0].name}}</li>
          <li class="textLine">
            <span>3.</span>{{item.tracks[2].name}}-{{item.tracks[2].artists[0].name}}</li>
        </ul>

      </router-link>

    </figure>

  </div>
  <div class="title">全球榜</div>
  <div class="wl-global">
    <div class="global-list" v-for="item,index in list1">
      <router-link :to="'/listsDelate/'+item.id">
        <div class="golbal-info">

   
          <lazy-image :src="item.coverImgUrl" alt=""></lazy-image>
          <span>每周更新</span>
        </div>
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </div>

</div>
</template>

<script>

import lazyImage from '../../../components/lazyImage';
import loading from '../../../components/loading';
import '../../../assets/scss/scssBypages/lists/lists.scss';

export default {
  components: {
    'lazy-image': lazyImage,
    'loading': loading
  },
  data() {

    return {
      list: [],
      list1: [],
      isShow: false

    }
  },
  created() {

    for (var i = 0; i < 4; i++) {
      this.number1 = i;
      this.$http.get('http://localhost:3000/top/list?idx=' + this.number1).then(data => {
        if (data.data.code === 200) {
          this.list.push(data.data.result);
          this.isShow = true;
        }
      })
    }
    for (var i = 4; i < 22; i++) {
      this.number2 = i;
      this.$http.get('http://localhost:3000/top/list?idx=' + this.number2).then(data => {
        if (data.data.code === 200) {
          this.list1.push(data.data.result);
          this.isShow = true;
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/_common.scss";
</style>
