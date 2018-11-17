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

<style>
  .icon-text {
    p {display: flex; align-items: center; margin: 0;}
    * {vertical-align: middle}
    i.material-icons {padding-right: 4px; font-size: 20px;}  
  }
</style>