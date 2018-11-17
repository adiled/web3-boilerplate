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
    }),
    mutations: {
    }
  })
}

export default createStore