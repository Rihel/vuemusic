<template>
  <!--榜单页面-->
  <!--作者：Lewis-->

  <div class="classify">
    <loading v-if="!isShow"></loading>
    <div class="title">官方榜</div>
    <div class=wl-list>
      <router-link to='/listsDelate'>
        <figure v-for="item,index in list1">
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
      <div class="global-list" v-for="item,index in list2">
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

    export default {
        components: {
            'lazy-image': lazyImage,
            'loading': loading
        },
        data() {

            return {
                list: [],
                list1: [],
                list2: [],
                isShow: false

            }
        },
        created() {

            for (var i = 0; i < 22; i++) {
                this.number = i;
                this.$http.get('http://localhost:3000/top/list?idx=' + this.number).then(data => {
                    if (data.data.code === 200) {
                        this.list.push(data.data.result);
                    
                        
                        this.list1 = this.list;
                        this.list2 = this.list.slice(4);
                        this.isShow = true;
                    }
                })
            }
            // console.log(this.list)
console.log(this.list);
        }
    }
</script>

<style lang="scss">
  @import "../../../assets/scss/_common.scss";

</style>
