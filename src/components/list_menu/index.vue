<template>
    <div>
        <ul class="c-menu">
            <li>
                <i class="fa fa-star-o fa-fw"></i>
                <p>{{listData.subscribedCount}}</p>
            </li>
            <li>
                <i class="fa fa-commenting-o fa-fw"></i>
                <p>{{listData.commentCount}}</p>
            </li>
            <li>
                <i class="fa fa-share-alt fa-fw"></i>
                <p>{{listData.shareCount}}</p>
            </li>
            <li>
                <i class="fa fa-download fa-fw"></i>
                <p>下载</p>
            </li>
        </ul>
        <div class="c-title">
            <div class="c-play-all">
                <i class="fa fa-play fa-fw"></i>
                播放全部
                <span>(共{{tracks.length}}首)</span>
            </div>
            <div class="c-select">
                <i class="fa fa-list-ul fa-fw"></i>
                多选
            </div>
        </div>
        <div class="c-songs" v-for="item,index in tracks" :key="index">
            <span class="c-no">{{index+1}}</span>
            <div class="c-songs-info">
                <div class="c-songs-info-2">
                    <h4 class="c-songs-name">{{item.al.name}}{{item.name}}</h4>
                    <p class="c-songer">{{item.ar[0].name}}-{{item.alia[0]}}{{item.al.name}}</p>
                </div>
                <span class="c-ellipsis">
                    <i class="fa fa-ellipsis-v"></i>
                </span>
            </div>
    
        </div>
    </div>
</template>
<script>
export default {
    props: ['listData','tracks'],
    data() {
        return {
           
        }
    },
    created(){
       
    }
}
</script>
<style lang="scss">
@import "../../scss/_function.scss";
// .c-menu {
//     display: flex;
//     justify-content: space-between;
//     padding: rem(20) rem(80);
//     li {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         font-size: rem(32);
//         // color: #fff;
//     }
// }
// .c-title {
//     display: flex;
//     justify-content: space-between;
//     padding: 20px 0;
//     border-bottom: 1px solid #ddd;
//     .c-play-all{
//         padding-left: 20px;
//         font-size: rem(30);
//         span{
//             color: gray;
//         }
//     }
//     .c-select{
//         padding-right: 20px;
//     }
// }
// .c-songs {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px 0;
//     .c-no{
//           padding: 0 20px;
//         }
//     .c-songs-info {
//         width: 90%;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         border-bottom: 1px solid #ddd;
//         .c-songs-name{
//             font-weight: bold;
//         }
//         .c-songer {
//             padding: 8px 0;
//             color: gray;
//         }
//         .c-ellipsis{
//             padding-right: 20px;
//         }
//     }
// }
</style>