<template>
  <section class="cjy-ablum">
    <ul class="cjy-ablum-list">
      <li>
        <img class="cjy-ablum-face" src="./local_album-1.png" alt="">
        <div class="cjy-ablum-info">
          <div>
            <div class="cjy-ablum-name">迟到千年</div>
            <span class="cjy-ablum-num">2首</span>
            <span class="cjy-songer-name">Blive In Music </span>
          </div>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </li>
       <li>
        <img class="cjy-ablum-face" src="./local_album-2.png" alt="">
        <div class="cjy-ablum-info">
          <div>
            <div class="cjy-ablum-name">迟到千年</div>
            <span class="cjy-ablum-num">2首</span>
            <span class="cjy-songer-name">Blive In Music </span>
          </div>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </li>
       <li>
        <img class="cjy-ablum-face" src="./local_album-3.png" alt="">
        <div class="cjy-ablum-info">
          <div>
            <div class="cjy-ablum-name">迟到千年</div>
            <span class="cjy-ablum-num">2首</span>
            <span class="cjy-songer-name">Blive In Music </span>
          </div>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </li>
       <li>
        <img class="cjy-ablum-face" src="./local_album-4.png" alt="">
        <div class="cjy-ablum-info">
          <div>
            <div class="cjy-ablum-name">迟到千年</div>
            <span class="cjy-ablum-num">2首</span>
            <span class="cjy-songer-name">Blive In Music </span>
          </div>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </li>
       <li>
        <img class="cjy-ablum-face" src="./local_album-5.png" alt="">
        <div class="cjy-ablum-info">
          <div>
            <div class="cjy-ablum-name">迟到千年</div>
            <span class="cjy-ablum-num">2首</span>
            <span class="cjy-songer-name">Blive In Music </span>
          </div>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </li>
       <li>
        <img class="cjy-ablum-face" src="./local_album-1.png" alt="">
        <div class="cjy-ablum-info">
          <div>
            <div class="cjy-ablum-name">迟到千年</div>
            <span class="cjy-ablum-num">2首</span>
            <span class="cjy-songer-name">Blive In Music </span>
          </div>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </li>
       <li>
        <img class="cjy-ablum-face" src="./local_album-7.png" alt="">
        <div class="cjy-ablum-info">
          <div>
            <div class="cjy-ablum-name">迟到千年</div>
            <span class="cjy-ablum-num">2首</span>
            <span class="cjy-songer-name">Blive In Music </span>
          </div>
          <i class="fa fa-ellipsis-v"></i>
        </div>
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
@import '../../../scss/_function.scss';
@import '../../../scss/_function.scss';
.cjy-ablum {
  margin-top: 90px;
  background: url(./local_songs-bg.png) no-repeat center;
  .cjy-ablum-list {
    max-width: 93%;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #6f6964;
      .cjy-ablum-face {
        width: 20%;
        margin-right: 20px;
      }
      .cjy-ablum-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        padding-right: rem(20);
        .cjy-ablum-name {
          margin-bottom: 10px;
          font-size: rem(36);
          font-weight: bold;
        }
        .cjy-ablum-num,
        .cjy-songer-name {
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
  .letter {
    position: fixed;
    top: 95px;
    right: 0;
    background: rgba(0, 0, 0, .2);
    li {
      padding: 5px 10px;
      padding-right: 5px;
      font-size: 12px;
      color: #fff;
      &.active {
        color: #b30000;
      }
    }
  }
}
</style>
