<template>
  <div :class="'stage' + stage" class="container-fluid">
    <h1 class="text-light text-shadow pt-3">Smooshrooms!</h1>
    <div class="score text-light text-shadow" title="player score">Score: 
{{score}}
    </div>
    <button v-if="stage <= 0" class="btn btn-info" @click="startGame()">START GAME</button>
    <div v-if="stage == 0" class="ramblin">
      <marquee behavior="alternate" :direction="Math.random()*10 > 5 ? 'right' : 'left'">
        <marquee behavior="alternate" :direction="Math.random()*10 > 5 ? 'up' : 'down'">
          <img class="img-small" src="../assets/sprites/38163b334b3fba5.png" alt="">
        </marquee>
      </marquee>
    </div>
        <!-- <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom"> -->
        <div v-for="b in basicShrooms" :key="b.id">
          <BasicShroom :bShroom="b" />
        </div>
      </div>
</template>

<script>
import { mushroomsService } from "../service/mushroomsService.js"
import BasicShroom from "@/components/BasicShroom.vue";
import { computed } from "@vue/reactivity";
import $Store from '../Store.js'
import { playerService } from "@/service/playerService.js";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(()=> {
    })
    return {
      score: computed(()=> $Store.state.score),
      basicShrooms: computed(() => $Store.state.basicShrooms),
      stage: computed(() => $Store.state.stage),
      spawnInterval: '',
      startGame(){
        this.spawnInterval = setInterval(()=> {
          setTimeout(() => {
            mushroomsService.spawnShrooms()
          }, Math.random()*3000);
        }, 1000)
        playerService.increaseStage()
      },
    };
  },
  components: { BasicShroom }
}
</script>

<style lang="scss" scoped>
.img-small {
  height: 100px;
}
.ramblin marquee {
  min-height: 70vh;
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
.disabled{
  pointer-events: none;
}
img{
  user-select: none;
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