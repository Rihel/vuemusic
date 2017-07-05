<template>
    <footer class="play">
        <div class="play-info pull-left">
            <img src="img/local_songs-face.png" alt="">
            <h6 class="play-name">不该(with AMEI)</h6>
            <p class="play-songer">周杰伦</p>
        </div>
        <ul class="play-control pull-right">
            <li>
                <i class="fa fa-play fa-2x"></i>
            </li>
            <li>
                <i class="fa fa-step-forward fa-2x"></i>
            </li>
            <li>
                <i class="fa fa-list fa-2x"></i>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.play {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 8px;
    background: rgba(255, 255, 255, .8);
    .play-info {
        width: 70%;
        img {
            float: left;
            margin-right: 10px;
        }
        .play-name {
            margin-top: 20px;
            font-size: 16px;
        }
        .play-songer {
            margin-top: 10px;
            font-size: 14px;
            color: #94908b;
        }
    }
    .play-control {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        right: 30px;
        width: 30%;
        transform: translateY(-50%);
        li {
            color: #b30000;
        }
    }
}
</style>
