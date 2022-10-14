<template>
  <div class="container-fluid stage">
    <button v-if="stage <= 0" class="btn btn-info" @click="startGame()">START GAME</button>
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
        }, 2000)
        playerService.increaseStage()
      }

    };
  },
  components: { BasicShroom }
}
</script>

<style lang="scss" scoped>

</style>