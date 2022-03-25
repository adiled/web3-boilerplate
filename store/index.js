// store.js
import { reactive } from 'vue';

export const store = reactive({
    user: {
      id: 1,
      first_name: 'Jane',
      last_name: 'Doe',
      accountType: 'banking',
      email: '',
      veb3_balance: 1102
    },
    transactions: [
      { date: 'Nov 17, 2018', type: 'Sent', name: 'John Doe', amount: '20 VEB3', status: 'Pending', address: '27nc8297134872134h6d82174jasdfuy876', transaction_id: 'SJKHD324876'},
      { date: 'Nov 17, 2018', type: 'Received', name: 'Jane Doe', amount: '500 VEB3', status: 'Complete'},
    ]
});