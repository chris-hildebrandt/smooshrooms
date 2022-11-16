<template>
      <div draggable="false" class="small-box shroom" :id="mShroom.id" :class="'position' + mShroom.location + ' ' + (mShroom.disabled ? 'disabled' : '')" @click="hitShroom(mShroom.id)" >
          <img v-if="mShroom.img == 3" :id="'shroom'+mShroom.id" :style="'left: '+mShroom.width+'px; top: '+mShroom.height+'px;'" class="small-box btn m-0" draggable="false" :title="mShroom.name" src="../assets/sprites/Monster_fungus_big_stand_full.webp" alt="Basic-Shroom">
          <img :id="'poof'+mShroom.id" class="small-box m-0 d-none" draggable="false" src="../assets/the-one-who-got-away_86.gif" alt="poof">
      </div>
</template>

<script>
// import { computed } from "@vue/reactivity";
import { randomMarquee } from "@/utilities/marquee.js";
import { onMounted } from "vue";
import { useToast } from "vue-toastification"
import {mushroomsService} from "../service/mushroomsService.js"

export default {

  props: {mShroom: { type: Object, required: true }},
setup(props){
  // const state = reactive({
  //   disabled: computed(()=> props.mShroom.disabled)
  // })
  const toast = useToast()
  // each instance of the component loads with a despawn timer
  onMounted(()=> {
    setInterval(()=> {randomMarquee(props.mShroom.id)}, 100)
    setTimeout(()=> {
      // we pass the id from the props to the service in order to filter (despawn) the correct shroom
          mushroomsService.determineDespawnScenario(props.mShroom.id)
        }, 3000)
    })
return{
  toast,
  // this should be moved to the app or homepage
  hitShroom(id){
    try {
      mushroomsService.hitShroom(id)
    } catch (error) {
      toast.danger("hitting shroom", error)
    }
  }
}
}
}
</script>

<style lang="scss" scoped>
.small-box{
  height: 100px;
  width: auto;
}
.disabled{
  pointer-events: none;
}
img{
  user-select: none;
}
</style>