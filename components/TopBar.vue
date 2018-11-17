<template>
  <div class="topbar clearfix">
    <div class="logo">
      <nuxt-link to="/">
        <img src="~/static/img/xmnpay-logo.png">
      </nuxt-link>
    </div>
    <div class="quicklook">

      <div class="account-balance">
        <i class="material-icons">credit_card</i> <span>XMND 20000</span>
      </div>

      <b-button class="rounded uppercase" variant="primary" size="sm" to="/pledge/new">
        <i class="material-icons">add</i><span>Pledge</span>
      </b-button>

      <b-dropdown id="ddown-right" right variant="link" toggle-class="btn-account" class="m-md-2" no-caret>
        <template slot="button-content">
          <i class="material-icons">account_circle</i>
        </template>
        <b-dropdown-header class="text-center">
          <p>{{$store.state.user.first_name + ' ' + $store.state.user.last_name}}</p>
          <p class="uppercase text-center">{{$store.state.user.accountType}}</p>
        </b-dropdown-header>
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

.topbar { width: 100%; padding: 0 20px; height: 50px; position: relative; z-index: 2;
  background: #fff; box-shadow: 0 1px 0 0 darken($body-bg, 2); 

  > * {height: 100%; display: flex; align-items: center;}

  * {vertical-align: middle}
  
  .logo {float: left;
    img {height: 100%;}
    > * {height: 75%;}
  }

  .quicklook { float: right;

    > * {display: inline-block;}

    .btn {padding-left: 1.4rem; padding-right: 1.4rem; font-weight: 600}
    .account-balance { cursor: pointer; padding: 0 60px; font-size: 1.2rem; color: $primary;

    }
    .rate {}
    .btn-account {
      i {font-size: 32px}
    }

    .dropdown-header {
      p {margin: 0  ;}
    }
  }

}

</style>