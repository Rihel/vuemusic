<template>
  <div>
    <div class="cjy-songer">
      <div class="container">
        <ul class="cjy-songer-list">
          <li>
            <img class="cjy-songer-face" src="./local_songer-1.png" alt="">
            <div class="cjy-songer-info">
              <div>
                <div class="cjy-songer-name">陈奕迅</div>
                <div class="cjy-songer-num">3首</div>
              </div>
              <i class="fa fa-ellipsis-v"></i>
            </div>
  
          </li>
          <li>
            <img class="cjy-songer-face" src="./local_songer-2.png" alt="">
            <div class="cjy-songer-info">
              <div>
                <div class="cjy-songer-name">苏打绿</div>
                <div class="cjy-songer-num">132首</div>
              </div>
              <i class="fa fa-ellipsis-v"></i>
            </div>
  
          </li>
          <li>
            <img class="cjy-songer-face" src="./local_songer-3.png" alt="">
            <div class="cjy-songer-info">
              <div>
                <div class="cjy-songer-name">王力宏</div>
                <div class="cjy-songer-num">7首</div>
              </div>
              <i class="fa fa-ellipsis-v"></i>
            </div>
  
          </li>
          <li>
            <img class="cjy-songer-face" src="./local_songer-4.png" alt="">
            <div class="cjy-songer-info">
              <div>
                <div class="cjy-songer-name">张震岳</div>
                <div class="cjy-songer-num">1首</div>
              </div>
              <i class="fa fa-ellipsis-v"></i>
            </div>
  
          </li>
          <li>
            <img class="cjy-songer-face" src="./local_songer-5.png" alt="">
            <div class="cjy-songer-info">
              <div>
                <div class="cjy-songer-name">张靓颖</div>
                <div class="cjy-songer-num">3首</div>
              </div>
              <i class="fa fa-ellipsis-v"></i>
            </div>
  
          </li>
          <li>
            <img class="cjy-songer-face" src="./local_songer-6.png" alt="">
            <div class="cjy-songer-info">
              <div>
                <div class="cjy-songer-name">张杰</div>
                <div class="cjy-songer-num">2首</div>
              </div>
              <i class="fa fa-ellipsis-v"></i>
            </div>
  
          </li>
          <li>
            <img class="cjy-songer-face" src="./local_songer-7.png" alt="">
            <div class="cjy-songer-info">
              <div>
                <div class="cjy-songer-name">TF boy</div>
                <div class="cjy-songer-num">4首</div>
              </div>
              <i class="fa fa-ellipsis-v"></i>
            </div>
  
          </li>
  
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../../scss/_function.scss';
.cjy-songer {
  margin-top: -110px;
  background: url(./local_songs-bg.png) no-repeat center;
  .cjy-songer-list {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #6f6964;
      .cjy-songer-face {
        width: 20%;
        margin-right: 20px;
      }
      .cjy-songer-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        padding-right: 20px;
        .cjy-songer-name {
          margin-bottom: 10px;
          font-size: rem(36);
          font-weight: bold;
        }
        .cjy-songer-num {
          font-size: rem(32);
          color: #6f6964;
        }
        .fa {
          font-size: rem(36);
          color: gray;
        }
      }
    }
  }
}
</style>
