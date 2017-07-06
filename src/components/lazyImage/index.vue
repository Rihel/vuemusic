<template>
    <img ref="lazyImage" :style="{height:height}" class="lazyImage" :src="finishSrc" />
</template>
<script>
export default {
    props: ['src'],
    data() {
        return {
            finishSrc: require('./default-image.png'),
            isShow: false,
            height: '100%'
        }
    },
    created() {


        //  怎么判断到达可视区域，如何替换图片路径
    },
    mounted() {
        // ref属性相当于给元素添加class或者id， this.$refs.refName===获取真实的dom
        let trueDom = this.$refs.lazyImage;
        this.show(trueDom);
        let timerId;
        const callback = () => {
            if (!this.isShow) {
                this.show(trueDom);
            }
        }

        window.addEventListener('scroll', () => {
            //    当  到达顶部的距离小于视口的高度的时候，图片路径将会替换
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(callback, 50);
        }, false)
    },
    methods: {
        show(trueDom) {

            console.log(1);
            if (trueDom.getBoundingClientRect().top < window.screen.height) {
                this.finishSrc = this.src;
                this.isShow = true;
                this.height='auto'
            }

        }
    }
}
</script>
<style lang="scss">
.lazyImage {
    width: 100%;
}
</style>
