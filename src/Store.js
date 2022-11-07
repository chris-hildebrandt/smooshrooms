import { createStore } from 'vuex'

const Store = createStore({
  state: {
    score: 0,
    stage: 0,
    smooshPower: 1,
    // increase padding on images to create larger "splash area" for weapon
    smooshArea: 1,
    basicShrooms: [],
    tuffShrooms: [],
    splinterShrooms: 0,
    buffShrooms: 0,

  },
  getters: {},
  mutations: {}
})
export default Store