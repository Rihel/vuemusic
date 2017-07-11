<template>
    <ul class="play-list">
        <li v-for="item,index in privileges" @click="chageMusicId(item.id)">
            {{index+1}} 歌曲ID {{item.id}}
        </li>
    </ul>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            privileges: state => state.music.privileges,
        })
    },
    created() {
        const id = this.$route.params.id;
        console.log(this.$store.state.music)
        this.getPlayListDetail(id);
    },
    methods: {
        ...mapMutations([
            'chageMusicId'
        ]),
        ...mapActions([
            'getPlayListDetail'
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