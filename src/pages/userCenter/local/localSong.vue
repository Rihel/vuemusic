<template>
  <section class="music-content container ">
    <div class="clearfix">
      <div class="modules pull-left">
        <i class="fa fa-play-circle-o fa-fw"></i>
        <span>随机播放全部</span>
      </div>
      <div class="edit pull-right">批量管理</div>
    </div>
    <div class="name-abbr">A</div>
    <ul class="music-list">
      <li class="active">
        <div class="music-name"><span>爱火花</span></div>
        <div class="music-info"><span class="songer">周笔畅</span><span> -</span> <span class="ablum">我是歌手第二季 第六期</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
      <li>
        <div class="music-name"><span>爱人动物</span></div>
        <div class="music-info"><span class="songer">苏打绿</span><span> -</span> <span class="ablum">陪我歌唱</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
      <li>
        <div class="music-name"><span>爱在波西米亚</span></div>
        <div class="music-info"><span class="songer">几米</span><span> -</span> <span class="ablum">向左走，向右走...剧原声带</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
      <li>
        <div class="music-name"><span>爱转角</span></div>
        <div class="music-info"><span class="songer">罗志祥</span><span> -</span> <span class="ablum">残酷舞台 真实录</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
      <li>
        <div class="music-name"><span>安静在沸腾</span></div>
        <div class="music-info"><span class="songer">苏打绿</span><span> -</span> <span class="ablum"> DEMOL</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
    </ul>
    <div class="name-abbr">B</div>
    <ul class="music-list">

      <li>
        <div class="music-name"><span>被雨伤透</span></div>
        <div class="music-info"><span class="songer">苏打绿几米</span><span> -</span> <span class="ablum">小宇宙</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
      <li>
        <div class="music-name"><span>百日告白 </span></div>
        <div class="music-info"><span class="songer">苏打绿</span><span> -</span> <span class="ablum"> 在线热搜（华语）系列</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
      <li>
        <div class="music-name"><span>安静在沸</span></div>
        <div class="music-info"><span class="songer">苏打绿</span><span> -</span> <span class="ablum"> DEMOL</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
      <li>
        <div class="music-name"><span>百日告白 </span></div>
        <div class="music-info"><span class="songer">苏打绿</span><span> -</span> <span class="ablum"> 在线热搜（华语）系列</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
      <li>
        <div class="music-name"><span>安静在沸</span></div>
        <div class="music-info"><span class="songer">苏打绿</span><span> -</span> <span class="ablum"> DEMOL</span></div>
        <img src="./local_songs-list.png" alt="">
      </li>
    </ul>
    <ul class="letter">
      <li class="active">A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
      <li>F</li>
      <li>G</li>
      <li>H</li>
      <li>I</li>
      <li>J</li>
      <li>K</li>
      <li>L</li>
      <li>M</li>
      <li>N</li>
      <li>O</li>
      <li>P</li>
      <li>Q</li>
      <li>R</li>
      <li>S</li>
      <li>T</li>
      <li>U</li>
      <li>V</li>
      <li>W</li>
      <li>X</li>
      <li>Y</li>
      <li>Z</li>
    </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

    .music-content {
      margin-top: 8rem;
      padding: 1rem 0 5rem 0.5rem;
      background: url(./local_songs-bg.png) no-repeat center;
      background-size: cover;
      .modules {
        font-size: 16px;
        color: #94908b;
        span {
          font-size: 14px;
          color: #000;
          font-weight: bold;
        }
      }
      .edit {
        margin-right: 20px;
        font-size: 14px;
        font-weight: bold;
      }
      .name-abbr {
        padding: 20px 0 0;
        font-size: 18px;
        color: #b30000;
      }
      .name-abbr.active {
        color: #b30000;
      }
      .music-list {
        li {
          position: relative;
          width: 97%;
          padding: 13px 0;
          border-bottom: 1px solid #bebebe;
          .music-name {
            margin-bottom: 10px;
          }
          span {
            font-size: 16px;
          }
          img {
            position: absolute;
            top: 50%;
            right: 20px;
            width: 35px;
            height: 35px;
            transform: translateY(-50%);
          }
        }
        li.active {
          span {
            color: #b30000;
          }
        }
      }
      .letter {
        position: fixed;
        top: 78px;
        right: 0;
        background: rgba(0, 0, 0, .2);
        li {
          padding: 5px 10px;
          padding-right: 5px;
          font-size: 12px;
          color: #fff;
        }
        li.active {
          color: #b30000;
        }
      }
    }

</style>
