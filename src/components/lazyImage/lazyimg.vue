<template>
    <img ref="lazyImage" :style="{height:height}" class="lazyImage" :src="finishSrc" >
</template>
<script>
export default {
    props: ['src'],
    data() {
        return {
            finishSrc: require('./loading.jpg'),
            isShow: false,
            height: '100%',
        }
    },
 
    mounted() {
        let trueDom = this.$refs.lazyImage;
        this.show(trueDom);
        let timerId;
        const callback = () => {
            if (!this.isShow) {
                this.show(trueDom);
            }
        }
        window.addEventListener('scroll', () => {
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(callback, 500);
        }, false)
    },
    methods: {
        show(trueDom) {
            if (trueDom.getBoundingClientRect().top < window.screen.height) {
                this.finishSrc = this.src;
                this.isShow = true;
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