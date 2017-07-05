<template>
  <div>
    <div class="yf-choose">
      <router-link to="/"><i class="fa fa-angle-down"></i></router-link>
      <ul>
        <li>
          <router-link to="/song/songOne"></router-link>
        </li>
        <li>
          <router-link to="/song/songTwo"></router-link>
        </li>
        <li>
          <router-link to="/song/songThree"></router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="">
  .yf-choose {
    position: relative;
    width: 100%;
    padding-top: 15px;
    /*padding-bottom: 25px;*/
    z-index: 100;
  }

  .yf-choose i {
    position: absolute;
    top: 15px;
    left: 5%;
    width: 25px;
    height: 25px;
    background-color: #928b86;
    line-height: 25px;
    text-align: center;
    color: white;
    font-size: 18px;
    border-radius: 12px;
  }

  .yf-choose ul {
    text-align: center;
  }

  .yf-choose ul li {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: white;
    
  }

  .yf-choose ul li a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .yf-choose ul li+li {
    margin-left: 2%;
  }

</style>
