<template>
  <div id="app">
    <main>
        <div class="container">
            <div class="hot clearfix">
                <div class="hot-left">
                    <img class="img1" src="simg.png" alt="">
                    <h2>全部</h2>
                    <img class="img2" src="simg1.png" alt="">
                </div>
                <div class="hot-right">
                    <span>最热</span>
                    <span>最新</span>
                </div>
            </div>
            <div class="play">
                <div class="play-mo">
                    <img class="img3" src="simg2.png" alt="">
                    <img class="img4" src="simg4.png" alt="">
                    <h4>执子之手，鞋子之老</h4>
                    <p>by<span>莫洋洋</span></p>
                </div>
                <div class="play-mo">
                    <img class="img3" src="simg3.png" alt="">
                    <img class="img4" src="simg4.png" alt="">
                    <h4>执子之手，鞋子之老</h4>
                    <p>by<span>莫洋洋</span></p>
                </div>
                </div>
                <div class="play">
                     <div class="play-mo">
                    <img class="img3" src="simg5.png" alt="">
                    <img class="img4" src="simg4.png" alt="">
                    <h4>执子之手，鞋子之老</h4>
                    <p>by<span>莫洋洋</span></p>
                </div>
                <div class="play-mo">
                    <img class="img3" src="simg6.png" alt="">
                    <img class="img4" src="simg4.png" alt="">
                    <h4>执子之手，鞋子之老</h4>
                    <p>by<span>莫洋洋</span></p>
                </div>
                </div>
                <div class="play">
                 <div class="play-to">
                    <img class="img5" src="simg7.png" alt="">
                    <div class="gaylon">
                    <img class="img6" src="simg9.png" alt="">
                     <div class="gaylon-right">
                          <h3>不该（csadcsa)</h3>
                          <i>周杰伦</i>
                     </div>
                    </div>
                </div>
                     <div class="play-mo">
                    <img class="img7" src="simg8.png" alt="">
                </div>
                </div>
                 <!--<div class="play">
                    <div class="play-to">
                    <img class="img3" src="simg7.png" alt="">
                    <img src="sing9.png" alt="">
                </div>
                     <div class="play-to">
                    <img class="img3" src="simg8.png" alt="">
                </div>
                </div>    
                </div>                   
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
main{
    background:#efba8b;
}
    main .hot .hot-left {
        float: left;
        height: 77px;
    }
    
    main .hot .hot-left .img1 {
        float: left;
        height: 34px;
        width: 18px;
        margin-top: 20px;
    }
    
    main .hot .hot-left h2 {
        font-size: 33px;
        float: left;
        line-height: 77px;
        margin-left: 10px;
    }
    
    main .hot .hot-left .img2 {
        float: left;
        margin-top: 20px;
        margin-left: 16px;
    }
    
    main .hot .hot-right {
        float: right;
        /*border:1px solid red;*/
        width: 200px;
        height: 30px;
        margin-top: 26px;
    }
    
    main .hot .hot-right span {
        font-size: 27px;
        display: inline-block;
        width: 96px;
        height: 30px;
        text-align: center;
    }
    
    main .hot .hot-right span:nth-of-type(1) {
        border-right: 1px solid #98968b;
        color: red;
    }
    
    .play {
        margin-top:30px;
        display: flex;
        justify-content: space-between;
    }
    
    main .play .play-mo {
        width: 400px;
        height: 406px;
        /*background: red;*/
        position: relative;
    }
    
    main .play .play-mo .img3 {
        width: 400px;
        height: 320px;
    }
    
    main .play .play-mo .img4 {
        position: absolute;
        top: 200px;
        right: 50px;
    }
    
    main .play .play-mo h4 {
        font-size: 25px;
        margin-top: 20px;
    }
    
    main .play .play-mo span {
        font-size: 25px;
        margin-left: 10px;
    }
    
    main .play .play-mo p {
        font-size: 25px;
        margin-top: 12px;
        color: #615846;
    }
    main .play .play-to{
        position:relative;
    }
       main .play .play-to .gaylon .img6{
           float:left;
       }
       main .play .play-to .gaylon .gaylon-right{
           float:left;
       }
        main .play .play-to .gaylon .gaylon-right h3{
            font-size:25px;
            margin-top:19px;
        }
         main .play .play-to .gaylon .gaylon-right i{
             font-size:16px;
             display:inline-block;
             margin-top:14px;
         }
     main .play .play-to .gaylon{
         background:rgba(255, 255 ,255,.3);
         height: 90px;
         width: 410px;
         /*background:#e7e3e4;*/
       position:absolute;
       left:0;

       top:180px;
     }
</style>
