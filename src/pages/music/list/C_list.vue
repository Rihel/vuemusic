<template>
  <div>
    <template v-if="isDone">
      <div class="container">
        <div class="c-list-top">
          <div class="c-list-left">
            <span>
                    <i class="fa fa-music"></i>
                </span> 全部
            <i class="fa fa-chevron-down fa-fw"></i>
          </div>
          <ul class="c-list-right">
            <li class="active">最热</li>
            <li>最新</li>
          </ul>
        </div>
        <div class="c-list">
          <router-link class="c-list-item" v-for="item,index in lists" :to="'/subList/'+item.id" >
            <div class="c-list-cover">
              <lazyImg :src="item.coverImgUrl"></lazyImg>
              <i class="fa fa-play-circle-o"></i>
              <p>
                <i class="fa fa-headphones"></i>&nbsp{{item.playCount}}</P>
              <span>
                        <i class="fa fa-user"></i>&nbsp{{item.creator.nickname}}</span>
            </div>

            <h2>{{item.name}}</h2>
          </router-link>

        </div>
      </div>
    </template>

    <loading v-if="!isDone"></loading>
  </div>
</template>
<script>
import loading from "../../../components/loading/loading.vue"
import lazyImg from '../../../components/lazyImage/lazyimg';

export default {
    data() {
        return {
            lists: [],
            isDone:false,
            listId:''
        }
    },
    components:{
        loading,lazyImg
    },
    created() {
        if(!this.isDone){
            this.$http.get('http://localhost:3000/top/playlist')
            .then(function (data) {
                // console.log(data)
                var result = data.body;
                this.lists = result.playlists;
            //  console.log(result.playlists[0].id)
                        this.isDone=true;
        
            
            });
        }
    },
   
}

</script>
<style lang="scss">
  .c-list-top {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .c-list-left {
      font-size: 15px;
      span {
        color: #d30000;
      }
    }
    .c-list-right {
      display: flex;
      justify-content: space-between;
      li {
        padding: 0 5px;
        font-size: 14px;
      }
      li+li {
        border-left: 1px solid #ddd;
      }
      &.active {
        color: #b30000;
      }
    }
  }

  .c-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .c-list-item {
      width: 49%;
      .c-list-cover {
        position: relative;
        img {
          width: 100%;
        }
        .fa-play-circle-o {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 35px;
          color: #fff;
        }
        p {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 0.5rem;
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), transparent);
          text-align: right;
          font-size: 1.25rem;
          color: #fff;
        }
        span {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 0.8rem;
          background-image: linear-gradient(to top, rgba(0, 0, 0, .5), transparent);
          font-size: 1.5rem;
          color: #fff;
        }
      }
      h2 {
        padding: 10px 0;
        font-size: 15px;
      }
      p {
        font-size: 13px;
        color: #2e281e;
      }
    }
  }

</style>
