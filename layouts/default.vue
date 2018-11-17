<template>
  <div>
    <topbar/>
    <!-- <navmenu :items="this.menuItems"></navmenu> -->
    <b-navbar class="main-nav" toggleable="md" type="=" variant="">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav tag="div">
          <b-nav-item v-for="item in menuItems" :key="item.label" :to="item.to" exact>
            <icon-text :text="item.label" :icon="item.icon"></icon-text>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <section class="container">
      <nuxt/>  
    </section>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import IconText from '@/components/IconText'

export default {
  components: {
    topbar: TopBar,
    'icon-text': IconText
  },

  data() {
    return {
      menuItems: [
        {label: 'Dashboard', to: '/', icon: 'home'},
        {label: 'Wallet', to: '/wallet', icon: 'account_balance_wallet'},
        {label: 'Transactions', to: '/transactions', icon: 'view_list'},
        {label: 'Pledges', to: '/pledge', icon: 'assignment'},
      ]
    }
  }
}
</script>

<style lang="scss">

@import "@/assets/scss/_bootstrap-variable-override.scss";
  
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

.main-nav { padding: 20px 0; background-color: transparent;
  .navbar-collapse {justify-content: center}
  .navbar-expand-md .navbar-nav .nav-link, .nav-link {padding-left: 40px!important; padding-right: 40px!important}
  a.nav-link {color: #888; position: relative;}
  a.nav-link.active {color: $primary;
    &:after {content: ''; position: absolute; left: 50%; bottom: -10px; transform: translateX(-50%); height: 4px; width: 12px; border-radius: 5px; background-color: $primary}
  }
}

section.container {padding: 50px 0;}

</style>
