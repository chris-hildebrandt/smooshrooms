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
    xChild: 0,
    yChild: 0,
    xParent: 0,
    yParent: 0,
    hover: false,
    hideCursor: true
  },
  getters: {},
  mutations: {}
})
export default Store