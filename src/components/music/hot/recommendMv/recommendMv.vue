<template>
    <div>
        <div class="recommend-title normal-title  mv-title">
            推荐MV
            <i class="fa fa-angle-right"></i>
        </div>
        <div class="recommend-mv">
            <figure class="recommend-item" v-for="item,index in newMv ">
                <img :src="item.picUrl" />
                <figcaption>
                    <p class="song-name"> {{item.name}}</p>
                    <p class="singer-name"> {{item.artistName}}</p>
                    <p class="play-count">
                        <i class="fa fa-video-camera"></i>&nbsp{{Math.floor(item.playCount)}}</p>
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newMv: [],
        }
    },
    created() {
        this.$http.get('http://localhost:3000/personalized/mv')
            .then(function (data) {
                this.newMv = data.body.result;
                console.log(this.newMv)
            });
    },
}
</script>

<style>

</style>
