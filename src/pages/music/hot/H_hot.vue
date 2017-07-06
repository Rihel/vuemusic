<template>
    <div>
        <section class="jem-hot-main">
            <div class="main-content">
                <banner></banner>
                <div class="classify">
                    <div class="song-recommend">
                        <img src="./hot-radio.png" alt="fff">
                        <p>每日歌曲推荐</p>
                    </div>
                    <div class="singer-recommend">
                        <img src=".//hot-microphone.png" alt="fff">
                        <p>歌手</p>
                    </div>
                    <div class="songtype-recommend">
                        <img src="./hot-clipboard.png" alt="fff">
                        <p>歌曲</p>
                    </div>
                </div>
                <recommendList></recommendList>
                <oneOnly></oneOnly>
                <mv></mv>
                <DJ></DJ>
            </div>
        </section>
    </div>
</template>

<script>
import banner from '../../../components/music/hot/banner/banner'
import recommendList from '../../../components/music/hot/recommendSong/recommendSong'
import oneOnly from '../../../components/music/hot/recommendOnly/recommendOnly'
import mv from '../../../components/music/hot/recommendMv/recommendMv'
import DJ from '../../../components/music/hot/recommendDJ/recommendDJ'

export default {
    components: {
        banner: banner,
        recommendList: recommendList,
        oneOnly: oneOnly,
        mv: mv,
        DJ: DJ,
    },
}

</script>

<style lang="scss">
@import '../../../scss/_H_hot.scss';
</style>