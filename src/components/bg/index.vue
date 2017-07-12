<template>
    <div class="global-bg">
        <img :src="bgPic" />
        <div class="mark"></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'bgPic'
        ])
    }
}    
</script>
<style lang="scss">
.global-bg {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scale(1.5);
        z-index: 1;
        filter: blur(5px);
    }
    .mark {
        position: absolute;
        z-index: 2;
        background: rgba(255,255,255,.9);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      
    }
}
</style>
