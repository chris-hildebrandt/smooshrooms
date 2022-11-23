<template>
<div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">STAGE COMPLETE!</h1>
      </div>
      <div class="modal-body">
        <h2>
          Smooshed: <span class="stage-smooshed"></span>
        </h2>
        <h2>
          Misses: <span class="stage-miss"></span>
        </h2>
        <h2>
          Score: <span class="stage-score"></span>
        </h2>
        <h2>
          Total: <span class="total-score"></span>
        </h2>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="startGame()">Next Stage!</button>
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
  stageSmooshed: computed(()=> $Store.state.smooshedCount),
  stageMiss: computed(()=> $Store.state.missCount),
  stageScore: computed(()=> $Store.state.stageScore),
  totalScore: computed(()=> $Store.state.totalScore + $Store.state.stageScore),

  startGame(){
        playerService.startGame()
      },
}
}
}
</script>

<style lang="scss" scoped>

@property --smooshed {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}
@property --missed {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}
@property --score {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}
@property --total {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}
.stage-smooshed {
  animation: counter 2s ease-in-out;
  counter-set: smooshed var(--smooshed);
  --smooshed: v-bind(stageSmooshed);
  font: 800 40px system-ui;
}
.stage-smooshed::after {
  content: counter(smooshed);
}
.stage-score {
  animation: counter 2s ease-in-out;
  counter-set: score var(--score);
  --num: v-bind(stageScore);
  font: 800 40px system-ui;
}
.stage-score::after {
  content: counter(score);
}
.stage-miss {
  animation: counter 2s ease-in-out;
  counter-set: miss var(--missed);
  --missed: v-bind(stageMiss);
  font: 800 40px system-ui;
}
.stage-miss::after {
  content: counter(miss);
}

.total-score {
  animation: counter 3s ease-in-out;
  counter-set: total var(--total);
  --total: v-bind(totalScore);
  font: 800 40px system-ui;
}
.total-score::after {
  content: counter(total);
}
@keyframes counter {
  from {
    --smooshed:0;
    --missed:0;
    --score:0;
    --total:0;
  }
  to {
    --smooshed: v-bind(stageSmooshed);
    --score: v-bind(stageScore);
    --missed: v-bind(stageMiss);
    --total: v-bind(totalScore);
  }
}
</style>