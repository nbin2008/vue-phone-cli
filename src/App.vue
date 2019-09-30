<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import "./assets/css/reset";
@import "./assets/css/font-set";
@import "./assets/css/global";

body {
  background-color: #fbf9fe;
}
</style>
