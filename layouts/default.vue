<template>
  <div>
    <topbar/>
    <nuxt/>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  export default {
    components: {
      topbar: TopBar
    }
  }
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
