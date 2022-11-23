import { createStore } from 'vuex'

const Store = createStore({
  state: {
    spinDeg: 0,
    shroomsRemaining: 1,
    totalScore: 0,
    stageScore: 0,
    missCount: 0,
    smooshedCount: 0,
    stage: 0,
    smooshPower: 1,
    // increase padding on images to create larger "splash area" for weapon
    smooshArea: 1,
    basicShrooms: [],
    moveShrooms: [],
    splinterShrooms: 0,
    buffShrooms: 0,
    xChild: 0,
    yChild: 0,
    xParent: 0,
    yParent: 0,
    hover: false,
    hideCursor: true,
    spawnInterval: ''
  },
  getters: {},
  mutations: {}
})
export default Store