<template>
    <div class="container">
        <div class="c-list-top">
            <div class="c-list-left">
                <span><i class="fa fa-music"></i></span>
                全部
                <i class="fa fa-chevron-down fa-fw"></i>
            </div>
            <ul class="c-list-right">
                <li class="active">最热</li>
                <li>最新</li>
            </ul>
        </div>
        <div class="c-list">
            <div class="c-list-item" v-for="item,index in lists">
                <div class="c-list-cover">
                    <img :src="item.coverImgUrl" alt="">
                    <i class="fa fa-play-circle-o"></i>
                     <p><i class="fa fa-headphones"></i>{{item.playCount}}</P>
                     <span><i class="fa fa-user"></i>{{item.creator.nickname}}</span>
                </div>
                
                <h2>{{item.name}}</h2>
            </div>
           
        </div>   
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: []
        }
    },
    created() {
        this.$http.get('http://localhost:3000/top/playlist')
            .then(function (data) {
                // console.log(data)
                var result = data.body;
                this.lists = result.playlists;
            });
    },
}

</script>
<style lang="scss">

.c-list-top {
    margin-top:100px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .c-list-left {
        font-size: 15px;
         span{
        color: #d30000;
    }     
    }
    .c-list-right {
        display: flex;
        justify-content: space-between;
        li {
            padding: 0 5px;
            font-size: 14px;
        }
        li+li {
            border-left: 1px solid #ddd;
        }
        &.active {
            color: #b30000;
        }
    }
}

.c-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
         
    .c-list-item {
        padding: 10px ;
        width:48%; 
        .c-list-cover {
            position: relative;
            img {
                width: 180px;
                height: 200px;
            }
            .fa-play-circle-o {
                position: absolute;
                bottom: 10px;
                right: 10px;
                font-size: 35px;
                color: #fff;
            }
            p{
                position:absolute;
                right:5px;
                top:10px;
            }
            span{
                position:absolute;
                left:5px;
                bottom:10px;
            }
        }
        h2 {
            padding: 10px 0;
            font-size: 15px;
        }
        p {
            font-size: 13px;
            color: #2e281e;
        }
    }
}
</style>
