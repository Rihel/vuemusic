<template>
  <div>
    <tou></tou>
    <div>
      
      <musicBanner></musicBanner>
    </div>
    <jiao></jiao>
  </div>
</template>

<script>
import tou from '../../components/Header/Header'
import jiao from '../../components/Footer/Footer'

import musicBanner from '../../components/musicBanner/index'

export default {
  components: {
    tou,
    jiao,
    musicBanner
  },
      data() {
      return {
      }
    }
  
}
</script>

<style lang="scss">
 
</style>
