
<template>
    <div>
        <!--<template v-if="isDone">-->
            <div class="bg">
                <img :src="pic">
                <div class="mark"></div>
            </div>
            <div class="content">
                <img :src="pic">
                <h2>{{songname}}</h2>
                <h3>{{singer}}</h3>
            </div>
       
    </div>
</template>

<script>
import loading from '../../components/loading/loading'
import { mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            isDone: false,
            url: '',
            songname: '',
            singer: '',
            pic: ''

        }
    },
    computed: {
        ...mapState({
            musicId: state => state.musicId
        })
    },
    watch: {
        musicId(newValue, old) {
            if (newValue !== old) {
                this.getId(newValue)
            }
        }
    },
    methods: {
        getId(id) {
            Promise.all([this.$http.get('http://localhost:3000/music/url?id=' + id),
            this.$http.get('http://localhost:3000/song/detail?ids=' + id)]).
                then(data => {
                    this.url = data[0].body.data[0].url;
                    this.singdata = data[1].data.songs[0];
                    this.songname = this.singdata.name;
                    this.singer = this.singdata.ar[0].name;
                    this.pic = this.singdata.al.picUrl;

                })

        },
    },
    components: {
        loading,
    },
    created() {
        
            this.getId(this.musicId)
        
    },
}
</script>

<style lang="scss">

.bg {
    position: fixed;
    top: 0;
        left: 0;
    width: 100%;
    height: 100%;
    img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        filter: blur(10px);
        margin-left: -150px;
    }
    .mark {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(255, 255, 255, .5);
    }
}

.content {
    position: relative;
    top: 150px;
    left: 20%;
    width: 60%;
    text-align: center;
    img {
        width: 100%;
        height: auto;
    }
    h2{
        padding: 50px 0 30px;
        font-size: 28px;
        font-weight: bold;
    }
    h3{
        font-size: 20px;
    }
}
</style>
