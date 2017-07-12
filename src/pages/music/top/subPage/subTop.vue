<template>
    <div>
        <template v-if="isDone">
            <listtop></listtop>
            <div class="c-list-info">
                <div class="c-image-info">
                    <img :src="coverImg" alt="">
                    <span class="c-play-count">
                        <i class="fa fa-headphones fa-fw"></i>{{playCount}}</span>
                    <span class="c-info-icon">
                        <i class="fa fa-info-circle fa-3x"></i>
                    </span>
                </div>
                <div class="c-text-info">
                    <h3>{{listName}}</h3>
                    <div class="c-author">
                        <img :src="avatarUrl" alt="">
                        <span class="c-name">{{listCreator}}
                            <i class="fa fa-angle-right fa-fw"></i>
                        </span>
                    </div>
                </div>
            </div>
            <listmenu :listData="listData" :tracks="tracks"></listmenu>
        </template>
        <loading v-if="!isDone"></loading>
    </div>
</template>
<script>
import listtop from '../../../../components/list_top/index';
import listmenu from '../../../../components/top_menu/index';
import loading from '../../../../components/loading/loading';

export default {
    components: {
        loading,
        listtop,
        listmenu
    },
    data() {
        return {
            listData: [],
            coverImg: '',
            listName: '',
            listCreator: '',
            playCount: '',
            shareCount: '',
            avatarUrl: '',
            tracks: [],

            listId: this.$route.params.id,
            isDone: false,
        }
    },
    created() {
        this.$http.get('http://localhost:3000/playlist/detail?id=' + this.listId)
            .then(data => {
                var result = data.body;
                this.listData = result.playlist;
                this.coverImg = result.playlist.coverImgUrl;
                this.listName = result.playlist.name;
                this.listCreator = result.playlist.creator.nickname;
                this.playCount = result.playlist.playCount;
                this.shareCount = result.playlist.shareCount;
                this.avatarUrl = result.playlist.creator.avatarUrl;
                this.tracks = result.playlist.tracks;
                this.isDone = true;
            });
    },

}
</script>
<style lang="scss">
@import '../../../../scss/_function.scss';

.c-list-info {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: rem(85);
    height: rem(300);
    padding: 20px;
    overflow: hidden;
    z-index: 999;
    background: #fff;
    .c-image-info {
        position: relative;
        width: 48%;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            z-index: 1;
        }
        .c-play-count {
            position: absolute;
            top: rem(4);
            right: rem(10);
            z-index: 2;
            font-size: rem(16);
            color: #fff;
        }
        .c-info-icon {
            position: absolute;
            bottom: rem(-30);
            right: rem(10);
            z-index: 2;
            font-size: rem(16);
            color: #fff;
        }
    }
    .c-text-info {
        width: 48%;
        height: 100%;
        h3 {
            margin: 20px 0;
            line-height: rem(40);
            font-size: rem(32);
        }
        .c-author {
            display: flex;
            align-items: center;
            img {
                display: inline-block;
                width: rem(50);
                height: rem(50);
                border-radius: rem(25);
                margin-right: 10px;
            }
        }
    }
}

.c-menu {
    display: flex;
    justify-content: space-between;
    padding: rem(20) rem(80);
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: rem(28);
        .fa {
            font-size: rem(36)
        }
    }
}

.c-title {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    .c-play-all {
        padding-left: 20px;
        font-size: rem(28);
        span {
            color: gray;
        }
    }
    .c-select {
        padding-right: 20px;
    }
}

.c-songs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    .c-no {
        padding: 0 20px;
    }
    .c-songs-info {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;
        .c-songs-name {
            font-weight: bold;
        }
        .c-songer {
            padding: 8px 0;
            color: gray;
        }
        .c-ellipsis {
            padding-right: 20px;
        }
    }
}
</style>

