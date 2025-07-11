const { default: axiosClient } = require("@/lib/axios");
const { defineStore } = require("pinia");

const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    fetchUser: (state, payload) => {
      axiosClient.get('/api/user')
        .then(({data}) => {
          console.log(data)
          this.user = data
        })
    }
  }
})