import Vuex from 'vuex'
// import Vue from 'vue'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: {
        id: 1,
        first_name: 'Muhammad Adil',
        last_name: 'Shaikh',
        accountType: 'banking',
        email: '',
        xmnr_balance: 1102
      },

      transactions: [
        { date: 'Nov 17, 2018', type: 'Sent', name: 'John Doe', amount: '20 XMND', status: 'Pending', address: '27nc8297134872134h6d82174jasdfuy876', transaction_id: 'SJKHD324876'},
        { date: 'Nov 17, 2018', type: 'Received', name: 'Jane Doe', amount: '500 XMND', status: 'Complete'},
      ]
    }),
    mutations: {
    }
  })
}

export default createStore