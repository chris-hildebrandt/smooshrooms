<template>
  <div class="container-fluid stage">
    <h1 class="text-light text-shadow">Smooshrooms!</h1>
    <button v-if="stage <= 0" class="btn btn-info" @click="startGame()">START GAME</button>
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
      basicShrooms: computed(() => $Store.state.basicShrooms),
      stage: computed(() => $Store.state.stage),
      spawnInterval: '',
      startGame(){
        this.spawnInterval = setInterval(()=> {
          mushroomsService.spawnShrooms()
        }, Math.random()*5000)
        playerService.increaseStage()
      }

    };
  },
  components: { BasicShroom }
}
</script>

<style lang="scss" scoped>
.stage{
  // background-image: url(https://pixeljoint.com/files/icons/full/battlebg_mistywoods.png);
  background-image: url(https://img.itch.zone/aW1hZ2UvNDU5NTAzLzIzMzc2NzYuanBn/original/kpTywm.jpg);
  background-size: cover;
  height: 100vh;
  position: relative;
}
.row{
  height: 100px;
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
  text-shadow: 1px 1px 4px black;
}


</style>