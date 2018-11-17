<template>
  <p class="icon-text">
    <i class="material-icons">{{this.icon}}</i>
    <span>{{this.text}}</span>
  </p>
</template>

<script>
export default {

  props: ['icon', 'text'],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
  .icon-text { display: flex; align-items: center; margin: 0;
    i.material-icons {margin-right: 6px; font-size: 20px;}
  }
</style>