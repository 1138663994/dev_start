<template>
  <div class="layout">
    <c-header></c-header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader.vue'
export default {
  name: 'layout',
  components: {
    CHeader
  },
  mounted () {
    // this.$http.get('').then(res => {
    //   console.log('res', res.data)
    // })
  }
}
</script>

<style lang="scss">

</style>
