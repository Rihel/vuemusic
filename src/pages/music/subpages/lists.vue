<template>
  <!--榜单页面-->
  <!--作者：Lewis-->

  <div class="classify">
    <loading v-if="!isShow"></loading>
    <div class="title">官方榜</div>
    <div class=wl-list>
      <router-link v-for="item,index in list" :to="'/listsDelate/'+item.id">
        <figure>
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


        </figure>
      </router-link>
    </div>
    <div class="title">全球榜</div>
    <div class="wl-global">
      <div class="global-list" v-for="item,index in list">
        <a href="#">
          <lazy-image :src="item.coverImgUrl" alt=""></lazy-image>
          <span>每周更新</span>
        </a>
        <p>{{item.name}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import lazyImage from '../../../components/lazyImage'
import loading from '../../../components/loading'
import '../../../assets/scss/scssBypages/lists/lists.scss';
import { mapActions } from 'vuex'

export default {
        components: {
            'lazy-image': lazyImage,
            'loading': loading,
        },
        data() {

            return {
              isShow: false,
              list:[],
            }
        },
        created() {
         this.list=this.initlists();
         this.isShow=true;
        },
        methods: {
    
     ...mapActions([
      'initlists'
    ])
        }
                   
    }
</script>

<style lang="scss">
  @import "../../../assets/scss/_common.scss";

</style>
