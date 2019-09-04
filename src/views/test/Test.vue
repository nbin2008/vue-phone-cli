<template>
  <div>
    <h2>测试vuex</h2>
    <p>name: {{ name }}</p>
    <p>email: {{ email }}</p>
    <input type="text" placeholder="name" v-model="localName">
    <br/>
    <input type="text" placeholder="email" v-model="localEmail">
    <button @click="toChange">更改</button>
    <hr/>
    <p>token: {{token}}</p>
    <button @click="toSetToken">设置随机token</button>
    <hr/>
    <button @click="toGetData">ajax请求</button>
    <hr/>
    <p>测试h5样式</p>
    <div class="d1">

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Test',
  data () {
    return {
      localName: '',
      localEmail: ''
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token,
      name: state => state.user.name,
      email: state => state.user.email
    })
  },
  methods: {
    ...mapActions({
      setBaseInfo: 'setBaseInfo',
      setToken: 'setToken'
    }),
    toChange () {
      this.setBaseInfo({
        name: this.localName,
        email: this.localEmail
      })
    },
    toSetToken () {
      this.setToken(Math.random())
    },
    toGetData () {
      console.log(this.$http)
    }
  }
}
</script>

<style lang="less"  scoped>
  .d1 {
    width: 1rem;
    height: 1rem;
    background: red;
  }
</style>
