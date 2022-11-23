<template>
<div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">STAGE COMPLETE!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <span class="stage-score"></span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="startGame()">Next Stage!</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { playerService } from "@/service/playerService.js";
import { computed } from "@vue/reactivity";
import $Store from '../Store.js'

export default {
setup(){
return{
  stageScore: computed(()=> $Store.state.score),
  cssVars(){
    return{
      '--stage-score': this.stageScore,
    }
  },
  startGame(){
        playerService.startGame()
      },
}
}
}
</script>

<style lang="scss" scoped>

@property --num {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}

.stage-score {
  // transition: --num 2s;
  animation: counter 1s ease-in-out;
  counter-set: num var(--num);
  --num: v-bind(stageScore);
  // counter-set: num var(--num);
  font: 800 40px system-ui;
}
.stage-score::after {
  content: counter(num);
}
@keyframes counter {
  from {
    --num:0;
  }
  to {
    --num: v-bind(stageScore);
  }
}
// .stage-score:hover {
//   --num: 100;
// }
</style>