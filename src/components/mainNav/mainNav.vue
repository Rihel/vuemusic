<template>
    <ul class="main-nav">
        <li class="active">
            <router-link to="/music/hot">热门推荐</router-link>
        </li>
        <li>
            <router-link to="/music/top">榜单</router-link>
        </li>
        <li>
            <router-link to="/music/list">歌单</router-link>
        </li>
        <li>
            <router-link to="/music/radio">电台</router-link>
        </li>
    </ul>
</template>

<script>


export default {
    data() {
        return {
            music: [
                {
                    path: '/music/hot',
                    title: '热门推荐'
                },
                {
                    path: '/music/top',
                    title: "榜单"
                },
                {
                    path: '/music/list',
                    title: "歌单",
                },
                {
                    path: '/music/radio',
                    title: '电台'
                }
            ],
            local: [
                {
                    path: '/local/song',
                    title: '热门推荐'
                },
                {
                    path: '/music/top',
                    title: "榜单"
                },
                {
                    path: '/music/list',
                    title: "歌单",
                },
                {
                    path: '/music/radio',
                    title: '电台'
                }
            ]

        }
    }
}
</script>

<style lang="scss">
.main-nav {
    position: fixed;
    top: 4rem;
    display: flex;
    width: 100%;
    height: 3.55rem;
    background: #fdfcfa;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
    li {
        width: 25%;
        height: 100%;
        border-bottom: 0.025rem solid #ddd9d2;
        line-height: 3.55rem;
        text-align: center;
        a {
            font-size: 1.55rem;
            font-weight: bold;
        }
    }
    li.active {
        border-color: #b30000;
        a {
            color: #b30000;
        }
    }
}
</style>
