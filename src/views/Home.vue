<template>
  <div class="home">
    <hello-world :msg="$t('message.welcome')"/>
    <van-button type="primary">click me</van-button>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .home {
    text-align: center;
  }
</style>
