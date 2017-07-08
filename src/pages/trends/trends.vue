<template>
<div >
   <navTop></navTop>
    <div class="song-logo">
        <div class="container">
            <img src="./img.png" alt="">
        <div class="song-case">
            <h2>#你最想看谁的演唱会？</h2>
           <p>已有167人加入</p>
        </div>
        <div class="topic">
            <h3>热门话题</h3>
            <span>更多》</span>
        </div>
        <div class="sing">
            <div class="banner-left">
                <img src="./img1.png" alt="">
                <p>#你最想听的歌是哪一首单曲循环？</p>
            </div>
             <div class="banner-right">
                 <img src="./img2.png" alt="">
                 <p>你期待的一首歌</p>
             </div>
        </div>
        <div class="joy">
            <div class="joy-left">
                <img src="./img3.png" alt="">
                <div class="joy-right">
                    <p>欢乐颂带你发现世界</p>
                    <span>11-29</span>
                </div>
            </div>
            <div class="follow">
                <p>+关注</p>
            </div>
        </div>
        <div class="characters">
            <p>浮动司机刚飞到手机哦城市新农村疾控中心你唱从is多次哦啊上次
                参赛此三刺杀从三杀查库存撒VCD搜每次都是菜市场内删除撒
            </p>
            <p>唱吧丝产能删除三次才能杀才能撒出门扫除吃的是草你说的
                刹车才能三尺三盲从三偶是脑残
            </p>
        </div>
        <div class="hand">
            <p>#手拉手一起做歌单</p>
        </div>
        <div class="base">
            <img src="./img4.png" alt="">
            <div class="base-right">
                <img src="./img5.png" alt="">
                 <img src="./img6.png" alt="">
            </div>
        </div>
        </div>
    </div>
</div>
  
  
</template>

<script>
import navTop from '../../components/J_navTop/navTop'

export default {
       data(){
         return{
           logos:[],
         }
       },
  components: {
    navTop: navTop,
   
  },
  created(){
    this.$http.get('http://localhost:3000/event')
    .then(function(data){
        console.log(data)
      var resuIt =data.doby;
      this.logos =resuIt.record;
    });
  },
}
</script>
   
        
<style lang="scss">
   .song-logo{
       margin-top:10px;
       img{
           width:100%;
           position:relative;
       }
       .song-case{
        border:4px solid #fff;;
        width: 300px;
        height:150px;
        border-radius:4px;
        position:absolute;
        top:80px;
        left:60px;
        h2{
              font-size:2rem;
          color:#fff;
          margin-top:40px;
          margin-left:20px;
        }
        p{
            font-size:2rem;
            color:#fff;
            position:absolute;
            top:80px;
            left:120px;
        }
       }
       .topic{
           height:72px;
           display:flex;
         justify-content: space-around;
         h3{
              font-size:2rem;
              line-height:72px;
         }
         span{
              font-size:2rem;
             line-height:72px;
         }
       }
       .sing{
           display:flex;
           justify-content:space-between;
              margin-top:0;
             border:none;
             img{
             width: 200px;
             height: 190px;
             }
             .banner-left{
                  float:left;
             margin-left:0;
             position:relative;
             p{
              position:absolute;
             font-size:1.5rem;
             color:#fff;
             width: 150px;
             left:30px;
             top:80px;
             }
             }
             .banner-right{
                   float:right;
              margin-left:0;
             position:relative;
             p{
                     position:absolute;
             font-size:2rem;
             color:#fff;
             width: 204px;
             left:100px;
             top:80px;
             }
             }

       }
       .joy{
           diaplay:flex;
           justify-content:space-between;
            height:78px;
            margin-top:10px;
        .joy-left img{
            width:50px;
            height:50px;
            float:left;
            .joy-right{
                float:left;
            }
           
        }
        .follow{
            float:right;
             border:1px solid red;
                width:50px;
                height:26px;
                 border-radius:4px;
                 background:#e7a173;
            p{
              text-align:center; 
               line-height:26px;
            }
        }
        }
      
    .characters{
         margin-top:10px;
         p{
            line-height:20px;
            margin-left:10px;
         }
         p+p{
           margin-top:10px;
          line-height:20px;
          margin-left:0;
         }
    }
    .hand{
        margin-top:30px;
        p{
              width: 238px;
                   height: 36px;
                   border:1px solid #e18661;
                   background:#e18661;
                   color:#b30000;
                   font-size:2rem;
                   border-radius:4px;
                   padding-left:10px;
                 line-height:36px;
        }
    }
    .base{
         margin-top:20px;
         img{
              width: 250px;
             height: 180px;
            float:left;
         }
         .base-right img{
             float:right;
              width:150px;
             height: 90px;
         }
    }
       

   }
</style>
