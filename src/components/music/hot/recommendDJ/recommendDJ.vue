<template>
    <div>
        <div class="recommend-title normal-title  dj-title">
            主播电台
            <i class="fa fa-angle-right"></i>
        </div>
        <div class="recommend-djprogram">
            <figure class="recommend-item" v-for="item,index in djprogram ">
                <img :src="item.picUrl">
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
            djprogram: [],
        }
    },
    created() {
        this.$http.get('http://localhost:3000/personalized/djprogram')
            .then(function (data) {
                this.djprogram = data.body.result;
            });
    },
}
</script>

<style>

</style>
