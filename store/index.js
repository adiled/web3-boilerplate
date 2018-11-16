import Vuex from 'vuex'
// import Vue from 'vue'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: {
        id: 1,
        first_name: '',
        last_name: '',
        email: '',
        xmnr_balance: 1102
      },
    }),
    mutations: {
    }
  })
}

export default createStore