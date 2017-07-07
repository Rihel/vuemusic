<template>
    <footer class="play">
        <div class="play-info pull-left">
            <img :src="pic" alt="fff">
            <h6 class="play-name">{{songname}}</h6>
            <p class="play-songer">{{singer}}</p>
        </div>
        <ul class="play-control pull-right">
            <li>
                <i class="fa fa-play fa-2x" v-if="isPlay" @click="play()"></i>
                 <i class="fa fa-pause fa-2x" v-if="!isPlay" @click="play()"></i>
            </li>
            <li>
                <i class="fa fa-step-forward fa-2x"></i>
            </li>
            <li>
                <i class="fa fa-list fa-2x"></i>
            </li>
        </ul>
        <audio :src="url" ></audio>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            isPlay:true,
            url:'',
            singer:'',
            songname:'',
            pic:'',
        }
    },
    created(){
        Promise.all([this.$http.get('http://localhost:3000/music/url?id=347231'),
        this.$http.get('http://localhost:3000/song/detail?ids=347231')]).
        then(data=>{
            console.log(data)
           this.url=data[0].body.data[0].url;
           this.singdata=data[1].data.songs[0];
           console.log(this.singdata)
           this.songname=this.singdata.name;
           this.singer=this.singdata.ar[0].name;
           this.pic=this.singdata.al.picUrl;

        })
    },
    methods:{
        play(){
            this.isPlay=!this.isPlay
        }
    }
}
</script>

<style lang="scss">
.play {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 8px;
    background: rgba(255, 255, 255, .8);
    .play-info {
        width: 70%;
        img {
            float: left;
            margin-right: 10px;
            width: 50px;
        }
        .play-name {
            margin-top: 8px;
            font-size: 16px;
        }
        .play-songer {
            margin-top: 10px;
            font-size: 14px;
            color: #94908b;
        }
    }
    .play-control {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        right: 30px;
        width: 30%;
        transform: translateY(-50%);
        li {
            color: #b30000;
        }
    }
}
</style>
