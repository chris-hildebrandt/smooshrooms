<template>
  <div class="container-fluid stage">
    <button v-if="stage <= 0" class="btn btn-info" @click="startGame()">START GAME</button>
    <!-- first row -->
    <div class="row">
      <div class="col-2 offset-2">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 0" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
      <div class="col-2 offset-3">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 1" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
    </div>
    <!-- second row -->
    <div class="row">
      <div class="col-2 offset-3">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 2" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
      <div class="col-2 offset-3">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 3" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
    </div>
    <!-- third row -->
    <div class="row">
      <div class="col-2 offset-4">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 4" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
      <div class="col-2">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 5" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
      <div class="col-2 offset-1">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 6" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
    </div>
    <!-- fourth row -->
    <div class="row">

      <div class="col-2 offset-2">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 7" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
      <div class="col-2 offset-2">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 8" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
    </div>
    <!-- fifth row -->
    <div class="row">
      <div class="col-2 offset-2">
        <img title="basic shroom" class="shroom btn m-0" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
      </div>
      <div v-for="b in basicShrooms => b.location == 9" :key="b.id">
        <BasicShroom :bShroom="b" />
      </div>
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
        }, Math.random()*3000)
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
}
.shroom{
  height: 100px;
  width: auto;
}
</style>