<template>
    <ul class="play-list">
        <li v-for="item,index in privileges" @click="chageMusicId(item.id)">
            {{index+1}} 歌曲ID {{item.id}}
        </li>
    </ul>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            playList: {},
            privileges: []
        }
    },
    created() {
        let id = this.$route.params.id;
        Promise.all([
            this.$http.get('http://localhost:3000/playlist/detail?id=' + id)
        ])
            .then(data => {
                this.privileges = data[0].data.privileges;
                console.log(this.privileges);
            })
    },
    methods: {
        ...mapMutations([
            'chageMusicId'
        ])
    }
}
</script>
<style lang="scss">
.play-list {
    text-align: center;
    li {
        display: flex;
        word-spacing: 20px;
        padding: 20px 0;
    }
}
</style>