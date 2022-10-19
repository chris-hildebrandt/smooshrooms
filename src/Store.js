import { createStore } from 'vuex'

const Store = createStore({
  state: {
    score: 0,
    stage: 0,
    smooshPower: 1,
    basicShrooms: {},
    tuffShroom: 1,
    splinterShrooms: 0,
    buffShrooms: 0,

  },
  getters: {},
  mutations: {}
})
export default Store