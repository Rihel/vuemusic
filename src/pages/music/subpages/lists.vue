<template>
  <!--榜单页面-->
  <!--作者：Lewis-->
  
<div class="classify"> 
    <div class="title">官方榜</div>
<div class=wl-list>
    <figure v-for="item,index in list">
      <div class="wl-songs">
        <img :src="item.coverImgUrl" alt="">
       
      </div>
     
        <ul>
         
          <li class="textLine">
            <span>1</span>{{item.tracks[0].name}}-{{item.tracks[0].artists[0].name}}</li>
          <li class="textLine">
            <span>2</span>{{item.tracks[1].name}}-{{item.tracks[1].artists[0].name}}</li>
          <li class="textLine">
            <span>3</span>{{item.tracks[2].name}}-{{item.tracks[2].artists[0].name}}</li>
        </ul>
       
      
    </figure>
    </div>
    <div class="title">全球榜</div>
   <div class="wl-global">
     <div class="global-list" v-for="item,index in list">
       <a href="#">
         <img :src="item.coverImgUrl" alt="">
         <span>每周更新</span>
       </a>
      <p>{{item.name}}</p>
     </div>
   </div>
  
  </div>
</template>

<script>
import '../../../assets/scss/scssBypages/lists/lists.scss';
export default {
  components: {

  },
  data() {

    return {
      list: [],
     
    }
  },
  created() {
  
    for ( var i=0;i<22;i++){
      this.number=i;
      this.$http.get('http://localhost:3000/top/list?idx=' + this.number).then(data => {
        if (data.data.code === 200) {
          this.list.push(data.data.result);
         
        }
        })
    }
     console.log(this.list);

  }
}
</script>

<style lang="scss">
   @import "../../../assets/scss/_common.scss";     
</style>
