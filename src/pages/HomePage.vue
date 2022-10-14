<template>
  <button v-if="basicShrooms.length <= 0" class="btn btn-info" @click="spawnShrooms(stage)">START GAME</button>
  <div v-for="b in basicShrooms" :key="b.id">
    <BasicShroom :bShroom="b" />
  </div>
</template>

<script>
import { mushroomsService } from "../service/mushroomsService.js"
import BasicShroom from "@/components/BasicShroom.vue";
import { computed } from "@vue/reactivity";
import $Store from '../Store.js'
export default {
  setup() {
    return {
      basicShrooms: computed(() => $Store.state.basicShrooms),
      stage: computed(() => $Store.state.stage),
      spawnShrooms(stage) {
        setInterval(mushroomsService.spawnShrooms(stage), 2000)
      }

    };
  },
  components: { BasicShroom }
}
</script>

<style lang="scss" scoped>

</style>