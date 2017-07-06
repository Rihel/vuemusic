<template>
<!--音乐>歌单 的页面组件
作者：陈嘉验-->
    <main>
        <div class="container">
            <ul class="c-top" >

                <li class="c-item" v-for="item,index in newList " >
                    <div class="c-billboard">
                        <div class="c-img">
                            <img :src="item.coverImgUrl" alt="">
                            <i class="fa fa-play-circle-o"></i>
                        </div>
                        <dl>
                            <dt>{{item.name}}</dt>
                            <dd>
                                <span class="NO-1">1</span>告白气球-　周杰伦</dd>
                            <dd>
                                <span class="NO-2">2</span>天若有情 - Lin</dd>
                            <dd>
                                <span class="NO-3">3</span>July - 吴亦凡</dd>
                        </dl>
                    </div>
                    <i class="fa fa-chevron-right c-more"></i>
                </li>
              
                 <!--<li class="c-item" v-for="item,index in hotList " >
                    <div class="c-billboard">
                        <div class="c-img">
                            <img :src="item.coverImgUrl" alt="">
                            <i class="fa fa-play-circle-o"></i>
                        </div>
                        <dl>
                            <dt>{{item.name}}</dt>
                            <dd>
                                <span class="NO-1">1</span>告白气球-　周杰伦</dd>
                            <dd>
                                <span class="NO-2">2</span>天若有情 - Lin</dd>
                            <dd>
                                <span class="NO-3">3</span>July - 吴亦凡</dd>
                        </dl>
                    </div>
                    <i class="fa fa-chevron-right c-more"></i>
                </li>
                
                  <li class="c-item" v-for="item,index in originList " >
                    <div class="c-billboard">
                        <div class="c-img">
                            <img :src="item.coverImgUrl" alt="">
                            <i class="fa fa-play-circle-o"></i>
                        </div>
                        <dl>
                            <dt>{{item.name}}</dt>
                            <dd>
                                <span class="NO-1">1</span>告白气球-　周杰伦</dd>
                            <dd>
                                <span class="NO-2">2</span>天若有情 - Lin</dd>
                            <dd>
                                <span class="NO-3">3</span>July - 吴亦凡</dd>
                        </dl>
                    </div>
<<<<<<< HEAD
                    <i class="fa fa-chevron-right c-more"></i>
                </li>-->
            </ul>
        </div>
=======
                </div>
                     <div class="play-mo">
                    <img class="img7" src="./simg8.png" alt="">
                </div>
                </div>
                 <div class="play">
                    <div class="play-to">
                    <img class="img3" src="./simg7.png" alt="">
                    <img src="./simg9.png" alt="">
                </div>
                     <div class="play-to">
                    <img class="img3" src="./simg8.png" alt="">
                </div>
                </div>    
                </div>                   
>>>>>>> 91c8edd5d5faf8f3561341003c7f4cae2ec05d07
    </main>
</template>
<script>
export default {
    data(){
        return{
            newList:[],
            hotList:[],
            originList:[],
        }
    },
     created() {
        this.$http.get('http://localhost:3000/top/list?idx=0')
            .then(function (data) {
                console.log(data)
                var result=data.body;
                this.newList=result;
                console.log(this.newList,result,1
                )
            });
             this.$http.get('http://localhost:3000/top/list?idx=1')
            .then(function (data) {
                console.log(data)
                var result=data.body;
                this.hotList=result;
            });
             this.$http.get('http://localhost:3000/top/list?idx=2')
            .then(function (data) {
                console.log(data)
                var result=data.body;
                this.originList=result;
            });
            
    },
    
}
</script>
<style lang="scss">
// main {
//     background: url(./C_list-bg.png) no-repeat;
// }

.c-top {
    .c-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 20px 10px;
        border-bottom: 1px solid #c4c3b6;
        .c-billboard {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .c-img {
                position: relative;
                margin-right: 20px;
                img {
                    width: 116px;
                    height: 116px;
                }
                .fa {
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                    font-size: 30px;
                    color: #fff;
                }
            }
        }
        dl {
            dt {
                margin-bottom: 20px;
                font-size: 18px;
                font-weight: bold;
            }
            dd {
                margin: 5px 0;
                font-size: 14px;
                span {
                    margin-right: 10px;
                    font-size: 14px;
                }
                .NO-1 {
                    color: red;
                }
                .NO-2 {
                    color: orangered;
                }
                .NO-3 {
                    color: orange;
                }
            }
        }
        .c-more {
            font-size: 24px;
            color: rgba(0, 0, 0, .4);
        }
    }
}
</style>

