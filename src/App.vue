<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-user-select: none; //禁止用户选中文本
    -webkit-tap-highlight-color: transparent; //移动端系统中点击某标签会触发默认的高亮背景框显示
  }
  #app {
    width: 100%;
    height: 100%;
    background: #ffffff;
    font-family: Helvetica;
  }
</style>
