<template>
  <div class="container-fluid stage">
    <button v-if="basicShrooms.length <= 0" class="btn btn-info" @click="spawnShrooms(stage)">START GAME</button>
    <marquee class="mq1" behavior="alternate" direction="up">
      <marquee class="mq2" behavior="alternate" direction="right">
        <div v-for="b in basicShrooms" :key="b.id">
          <BasicShroom :bShroom="b" />
        </div>
      </marquee>
    </marquee>
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
.stage marquee{
  min-height: 25vh;
  display: block;
  width: 100%;
}
.stage marquee marquee {
  height: 100%;
  width: 100%;
}
</style>