<template>
  <div class="topbar clearfix">
    <div class="logo">
      <img src="~/static/img/xmnpay-logo.png">
    </div>
    <div class="quicklook">
      <div class="rate">
        
      </div>
      <div class="account-balance">
        <i class="material-icons">credit_card</i> <span>XMND 20000</span>
      </div>
      <b-button class="rounded uppercase" variant="primary" size="sm" to="/pledge">
        <i class="material-icons">add</i><span>Pledge</span>
      </b-button>
      <b-dropdown id="ddown-right" right variant="link" toggle-class="btn-account" class="m-md-2" no-caret>
        <template slot="button-content">
          <i class="material-icons outlined" style="font-size: 26px">settings</i>
        </template>
        <b-dropdown-item>Settings</b-dropdown-item>
        <b-dropdown-item>Logout</b-dropdown-item>
      </b-dropdown>
    </div> 
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss">


@import "@/assets/scss/_bootstrap-variable-override.scss";

.menu { width: 100%; padding: 0 20px; height: 50px; position: relative; background: #fff; box-shadow: 0 1px
}

</style>