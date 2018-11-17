<template>
  <b-card class="pledge-form">
    <b-form @submit="handleSubmit" @reset="resetForm" v-if="show">

      <b-row>
        <b-col>
          <b-form-group id="exampleInputGroup1" label="Currency" label-for="pledge_amount" description="  ">
            <b-form-select id="pledge_amount" type="number" v-model="form.currency" required placeholder="Enter Amount" :options="currencies"></b-form-select>
          </b-form-group>    
        </b-col>
        <b-col>
          <b-form-group id="exampleInputGroup2" label="Amount" label-for="pledge_amount" description="  ">
            <b-form-input id="pledge_amount" type="number" v-model="form.amount" required placeholder="Enter Amount"></b-form-input>
          </b-form-group>    
        </b-col>
      </b-row>
      
      <div class="xmnd-value text-center">
        <p class="">XMND</p>
        <p class="amount">{{xmnd_value}}</p>
      </div>
      
      <div class="actions">
        <b-button type="submit" variant="primary" size="sm" class="rounded">
        <icon-text icon="send" text="Pledge"></icon-text>
        </b-button>  
      </div>
      
      <!-- <b-button type="reset" variant="danger" size="sm">Reset</b-button> -->
    </b-form>
  </b-card>
</template>

<script>

import IconText from '@/components/IconText'

export default {

  components: {
    'icon-text': IconText
  },

  head() {
    return {
      title: 'New Pledge'  
    }
  },

  data() {
    return {
      show: true,
      currencies: [
        {value: 'USD', text: 'USD'},
        {value: 'CAD', text: 'CAD'}
      ],
      form: {
        currency: 'USD',
        amount: 0,
      }
    }
  },

  computed: {
    xmnd_value() {
      return (this.form.amount * this.getXmndRate(this.form.currency)).toFixed(2)
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.resetForm()
    },

    resetForm() {

    },

    getXmndRate(currency) {
      if (currency == 'USD') {
        return 1.1
      } else {
        return 2
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_bootstrap-variable-override.scss";

.pledge-form {
  
  .xmnd-value {color: $primary;
    > p {margin: 0;}
    p:first-of-type {color: $primary;}
    margin: 20px 0;
    .amount {font-size: 32px}
  }

  .actions { text-align: center; margin: 30px 0 20px;
    .btn {text-transform: uppercase}
  }

}
</style>