<template>
    <img ref="lazyImage" :src="finishSrc" />
</template>
<script>
export default {
    props: ['src'],
    data() {
        return {
            finishSrc: ''
        }
    },
    created() {
        console.log(this.src);

        //  怎么判断到达可视区域，如何替换图片路径
    },
    mounted() {
        // ref属性相当于给元素添加class或者id， this.$refs.refName===获取真实的dom
        let trueDom = this.$refs.lazyImage;
        this.show(trueDom);
        let timerId;
        const callback = () => {
            console.log(1);
            this.show(trueDom);
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
            if (trueDom.getBoundingClientRect().top < window.screen.height) {
                this.finishSrc = this.src;
            }
        }
    }
}
</script>
<style lang="scss">

</style>
