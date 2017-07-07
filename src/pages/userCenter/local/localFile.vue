<template>
  <section class="cjy-files container">
    <ul class="cjy-files-list">
      <li>
        <i class="fa  fa-envelope-o fa-fw fa-2x"></i>
        <div class="cjy-files-name">
          <h2>我的下载 </h2>
          <p>12首/storage/sdcad1/i音乐/</p>
        </div>
        <img class="cjy-files-meun" src="./local_songs-list.png" alt="">
      </li>
      <li>
        <i class="fa  fa-envelope-o fa-fw fa-2x"></i>
        <div class="cjy-files-name">
          <h2>录音 </h2>
          <p>1首/storage/sdcad0/i音乐/</p>
        </div>
        <img class="cjy-files-meun" src="./local_songs-list.png" alt="">
      </li>
      <li>
        <i class="fa  fa-envelope-o fa-fw fa-2x"></i>
        <div class="cjy-files-name">
          <h2>song </h2>
          <p> 162首/storage/sdcad1/i音乐/</p>
        </div>
        <img class="cjy-files-meun" src="./local_songs-list.png" alt="">
      </li>
      <li>
        <i class="fa  fa-envelope-o fa-fw fa-2x"></i>
        <div class="cjy-files-name">
          <h2>12530 </h2>
          <p> 120首/storage/sdcad1/i音乐/</p>
        </div>
        <img class="cjy-files-meun" src="./local_songs-list.png" alt="">
      </li>
      <li>
        <i class="fa  fa-envelope-o fa-fw fa-2x"></i>
        <div class="cjy-files-name">
          <h2>audios </h2>
          <p> 120首/storage/sdcad1/i音乐/</p>
        </div>
        <img class="cjy-files-meun" src="./local_songs-list.png" alt="">
      </li>
    </ul>
    <div class="cjy-files-num">5个文件夹</div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .cjy-files {
    height: 100vh;
    margin: 0;
    background: url(./local_songs-bg.png) no-repeat center;
    background-size: cover;
    .cjy-files-list {
      padding-top: 7.8rem;
      li {
        display: flex;
        align-items: center;
        position: relative;
        padding: 30px 0 20px;
        border-bottom: 1px solid #9e9688;
        color: #9e9688;
        .cjy-files-name {
          display: inline-block;
          margin-left: 10px;
          h2 {
            margin-bottom: 10px;
            font-size: 20px;
            font-weight: bold;
            color: #000;
          }
          p {
            font-size: 14px;
            color: #9e9688;
          }
        }
      }
      .cjy-files-meun {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
    .cjy-files-num {
      padding: 40px 0;
      font-size: 14px;
      color: #9e9688;
      text-align: center;
    }
  }

</style>
