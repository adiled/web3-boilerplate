<template>
  <b-table :fields="fields" :items="$store.state.transactions">
    <template slot="show_details" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->

      <i class="btn material-icons" @click.stop="row.toggleDetails">
       {{row.detailsShowing ? 'expand_less' : 'expand_more'}}
      </i>

   </template>
   <template slot="row-details" slot-scope="row">
      <b-row class="mb-2">
        <b-col sm="3" class="text-sm-right"><b>Address</b></b-col>
        <b-col>{{row.item.address }}</b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col sm="3" class="text-sm-right"><b>Transaction ID</b></b-col>
        <b-col>{{row.item.transaction_id }}</b-col>
      </b-row>
  </template>
</b-table>
</template>

<script>
export default {
  head() {
    return {
      title: 'Transactions'  
    }
  },

  data() {
    return {
      fields: [
      {key: 'date', sortable: true},
      {key: 'type'},
      {key: 'name'},
      {key: 'amount'},
      {key: 'status'},
      {key: 'show_details', label: ''}
      ]
    }
  }
}
</script>

<style lang="scss">
</style>