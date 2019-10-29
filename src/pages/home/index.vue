<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <button @click="addHanlde">add </button>
    <p>count{{count}}</p>
    <button @click="getTest">getTest</button>
    <button @click="postTest">postTest</button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import {getTest, postTest} from '@/api'
export default {
  name: "home",
  computed: {
  ...mapState({
      count (state) {
        console.log('state', state)
        return state.home.count
      }
    })
  },
  methods: {
    addHanlde () {
      console.log('addHanlde', this.$store)
      this.$store.dispatch('setCount', 3)
    },
    getTest () {
      console.log('getText')
      let params = {
        a: 1
      }
      getTest(params).then(res => {
        console.log('res', res)
      })
    },
    postTest () {
      let data = {a:1}
      postTest(data).then(res => {
        console.log(res)
      })
    }
  }
};
</script>
