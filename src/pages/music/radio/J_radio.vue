<template>
  <section class="yao-radio-main">
    <div class="main-content">
      <banner> </banner>
      <div class="classify">
        <div class="raido-recommend radio-classify">
          <img src="./radio-radio.png" alt="fff">
          <p>每日歌曲推荐</p>
        </div>
        <div class="raido-recommend radio-ranking">
          <img src=".//radio-microphone.png" alt="fff">
          <p>歌手</p>
        </div>
      </div>
      <div class="radio-type" v-for="item,index in radioType">
        <div class=" radio-title">
          {{item[0].category}}
          <i class="fa fa-angle-right"></i>
        </div>
        <div class="recommend-radioItem">
          <figure class="recommend-item" v-for="items,indexs in item" v-if="indexs<3">
                    <lazyImg :src="items.picUrl"></lazyImg>
            <figcaption>
              {{items.name}}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import banner from '../../../components/music/radio/banner/banner'
import navTop from '../../../components/J_navTop/navTop'
import lazyImg from '../../../components/lazyImage/lazyimg';



export default {
    components: {
        banner: banner,
        navTop: navTop,
        lazyImg,


    },

    data() {
        return {
            total: '',
            radioType: [],
        }
    },
    created() {
        this.$http.get('http://localhost:3000/dj/catelist')
            .then(function (data) {
                this.total = data.body.categories.length;
            })
            .then(function () {
                for (var i = 0; i < this.total + 1; i++) {
                    this.$http.get('http://localhost:3000/dj/recommend/type?type=' + i)
                        .then(function (data) {
                            if (data.body.djRadios.length > 0) {
                                this.radioType.push(data.body.djRadios)
                            }
                        });
                }
                console.log(this.radioType)

            })




    },

}


</script>

<style lang="scss">
  @import '../../../scss/_J_radio.scss';

</style>
