<template>
    <div>
        <div class="recommend-title normal-title  oneOnly-title">
            独家放送
            <i class="fa fa-angle-right"></i>
        </div>
        <div class="recommend-oneOnly">
            <div class="recommend-songitem" v-for="item,index in oneOnly" v-if="index>0">
                <img :src="item.picUrl" alt="fff">
                <p>{{item.name}}</p>
            </div>
            <div class="recommend-songitem huge-screen" v-for="item,index in oneOnly" v-if="index===0">
                <img :src="item.picUrl" alt="fff">
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            oneOnly: [],
        }
    },
    created() {
        this.$http.get('http://localhost:3000/personalized/privatecontent')
            .then(function (data) {
                this.oneOnly = data.body.result;
            });
    },
}
</script>

<style>

</style>
