<!--
    懒加载组件
    作者：Lewis
-->
<template>
    <img ref="lazyImage" :src="finishSrc" :style="{width:width}"/>
</template>

<script>
export default {
    props: ['src'],
    data() {
        return {
            finishSrc: require('./placeImage.gif'),
            isShow: false,
            width:'100%'
        }
    },
    created() {

    },
    mounted() {
        let trueDom = this.$refs.lazyImage;
        let timerId;
        const callback = () => {
            this.show(trueDom);
        }

      // 懒加载显示图片
        this.show(trueDom);
     //监听滚动事件，通过setTimeout延迟懒加载图片
        window.addEventListener('scroll', () => {
            if (this.isShow) {
                return;
            } else {
                if (timerId) {
                    clearTimeout(timerId);
                }
                timerId = setTimeout(callback, 50);
            }
        })
    },
    methods: {
        show(trueDom) {
            if (trueDom.getBoundingClientRect().top < window.screen.height) {
                // console.log(111);
                this.finishSrc = this.src;
                this.isShow = true;
            }
        }
    }
}
</script>

<style lang="scss">

</style>
