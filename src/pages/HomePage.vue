<template>
  <div id="stage" :class="'stage' + stage" class="container-fluid m-0" @click="miss()">
    <h1 class="text-light text-shadow pt-3 mt-0">Smooshrooms!</h1>
    <div class="shrooms-remaining text-light text-shadow m-0" title="player score">Shrooms: {{shroomsRemaining}}
    </div>
    <div class="miss-count text-light text-shadow m-0" title="misses">Missed: {{missCount}}
    </div>
    <div class="score text-light text-shadow m-0" title="player score">Score: {{stageScore}}
    </div>
    <div class="total-score text-light text-shadow m-0" title="player score">Total Score: {{totalScore}}
    </div>
    <button v-if="stage <= 0" class="btn btn-info " @click.stop="startGame">START GAME</button>
    <div v-if="stage == 0" class="ramblin">
      <marquee behavior="alternate" :direction="Math.random()*10 > 5 ? 'right' : 'left'" scrollamount="6">
        <marquee behavior="alternate" :direction="Math.random()*10 > 5 ? 'up' : 'down'" scrollamount="6">
          <img id="click-spin" class="img-small hover-grow" src="../assets/sprites/38163b334b3fba5.png" alt="" draggable="false" @click.stop="spin()">
        </marquee>
      </marquee>
    </div>
    <div v-for="b in shrooms" :key="b.id">
      <BasicShroom :shroom="b" class="shroom"/>
    </div>
    <!-- <div v-for="m in moveShrooms" :key="m.id">
      <MoveShrooms :mShroom="m" class="position-absolute"/>
    </div> -->
  </div>
  <button id="modal-button" type="button" class="btn btn-primary d-none position-absolute" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<StageSummaryModal />
</template>

<script>
import { mushroomsService } from "../service/mushroomsService.js"
import BasicShroom from "@/components/BasicShroom.vue";
import StageSummaryModal from "@/components/StageSummaryModal.vue";
import { computed } from "@vue/reactivity";
import $Store from '../Store.js'
import { playerService } from "@/service/playerService.js";
import { onMounted } from "vue";
// import MoveShrooms from "@/components/MoveShrooms.vue";

export default {
  setup() {
    onMounted(()=> {
    })
    return {
      shroomsRemaining: computed(()=> $Store.state.shroomsRemaining),
      stageScore: computed(()=> $Store.state.stageScore),
      totalScore: computed(()=> $Store.state.totalScore),
      missCount: computed(()=> $Store.state.missCount),
      shrooms: computed(() => $Store.state.shrooms),
      // moveShrooms: computed(()=> $Store.state.moveShrooms),
      stage: computed(() => $Store.state.stage),
      spinDeg: computed(()=> $Store.state.spinDeg),
      spawnInterval: computed(() => $Store.state.spawnInterval),
      miss(){
        playerService.miss()
        playerService.changeScore(-1)
      },
      spin(){
  document.getElementById('click-spin').style = 'transform: rotate(' + this.spinDeg + 'deg)'
  mushroomsService.incrementSpin()
},
      startGame(){
        playerService.startGame()
      },
    };
  },
  components: { BasicShroom, StageSummaryModal }
}
</script>

<style lang="scss" scoped>
.position-absolute{
  position: absolute;
}
.img-small {
  height: 100px;
}
.ramblin marquee {
  min-height: 78vh;
  display: block;
  width: 100%;
}
.ramblin marquee marquee {
  height: 100%;
  width: 100%;
}
.stage0{
  background-image: url(../assets/backgrounds/2fae6db4ec5ee1919d54329a7c33b14c.png);
  background-size: cover;
  height: 100vh;
  position: relative;
}
.stage1{
  background-image: url(../assets/backgrounds/kpTywm.jpg);
  background-size: cover;
  height: 100vh;
  position: relative;
}
.stage2{
  background-image: url(../assets/backgrounds/battlebg_mistywoods.png);
  background-size: cover;
  height: 100vh;
  position: relative;
}
.stage3{
  background-image: url(../assets/backgrounds/7c09de6de6b3c0cf8e89101c6002ad22.png);
  background-size: contain;
  height: 100vh;
  position: relative;
}
.shroom{
  position: absolute;
}
.position0{
  top: 6vh;
  left: 30vw;
}
.position1{
  top: 40vh;
  left: 33vw;
}
.position2{
  top: 50vh;
  left: 22vw;
}
.position3{
  top: 63vh;
  left: 18vw;
}
.position4{
  top: 75vh;
  left: 30vw;
}
.position5{
  top: 77vh;
  left: 50vw;
}
.position6{
  top: 47vh;
  left: 53vw;
}
.position7{
  top: 32vh;
  left: 65vw;
}
.position8{
  top: 20vh;
  left: 82vw;
}
.position9{
  top: 55vh;
  left: 78vw;
}
.text-shadow{
  text-shadow: 1px 1px 6px black;
}
h1{
  font-family: 'Henny Penny', cursive;
  // font-family: 'Irish Grover', cursive;
  font-size: 70px;
  user-select: none;
}
.score{
  font-weight: 700;
  user-select: none;
  position: absolute;
  top: 10px;
  right: 50px;
  font-family: 'Irish Grover', cursive;
  font-size: xx-large;
}
.total-score{
  font-weight: 700;
  user-select: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: 'Irish Grover', cursive;
  font-size: xx-large;
}
.shrooms-remaining{
  font-weight: 700;
  user-select: none;
  position: absolute;
  top: 10px;
  left: 20px;
  font-family: 'Irish Grover', cursive;
  font-size: xx-large;
}
.miss-count{
  font-weight: 700;
  user-select: none;
  position: absolute;
  top: 10px;
  left: 300px;
  font-family: 'Irish Grover', cursive;
  font-size: xx-large;
}
.disabled{
  pointer-events: none;
}
img{
  user-select: none;
}
.btn{
  font-family: 'Irish Grover', cursive;
}

  #click-spin{
    transition: all .25s ease-in-out;
  }

// font-family: 'Bangers', cursive;
// font-family: 'Berkshire Swash', cursive;
// font-family: 'Black And White Picture', sans-serif;
// font-family: 'Carter One', cursive;
// font-family: 'Eater', cursive;
// font-family: 'Faster One', cursive;
// font-family: 'Freckle Face', cursive;
// font-family: 'Griffy', cursive;
// font-family: 'Henny Penny', cursive;
// font-family: 'Irish Grover', cursive;
// font-family: 'Luckiest Guy', cursive;
// font-family: 'Modak', cursive;
// font-family: 'Nanum Brush Script', cursive;
// font-family: 'Ranchers', cursive;


</style>