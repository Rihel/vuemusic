<template>
    <div>
        <div class="recommend-title songlist-title">
            <p class="main-title">
                <img src="./hot-music-icon.png" alt="fff">推荐歌单</p>
            <p class="sub-title">更多></p>
        </div>
        <div class="recommend-songlist">
            <figure class="recommend-songitem" v-for="item,index in recommendList ">
                <img :src="item.picUrl" alt="fff">
                <figcaption>
                    {{item.name}}
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recommendList: [],
        }
    },
    created() {
        this.$http.get('http://localhost:3000/personalized')
            .then(function (data) {
                this.recommendList = data.body.result
            });

    },
}
</script>

<style>

</style>
