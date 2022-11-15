<template>
  <div draggable="false" class="small-box shroom" :id="mShroom.id" :class="'position' + mShroom.location + ' ' + (mShroom.disabled ? 'disabled' : '')" @click="hitShroom(mShroom.id)" >
    <marquee behavior="alternate" :direction="Math.random()*10 > 5 ? 'right' : 'left'" scrollamount="32">
        <marquee behavior="alternate" :direction="Math.random()*10 > 5 ? 'up' : 'down'" scrollamount="32">
          <img v-if="mShroom.img == 3" :id="'shroom'+mShroom.id" class="small-box btn m-0" draggable="false" :title="mShroom.name" src="../assets/sprites/Monster_fungus_big_stand_full.webp" alt="Basic-Shroom">
          <img :id="'poof'+mShroom.id" class="small-box m-0 d-none" draggable="false" src="https://animated-gif-creator.com/images/01/the-one-who-got-away_86.gif" alt="poof">
        </marquee>
      </marquee>
  </div>
</template>

<script>
// import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useToast } from "vue-toastification"
import {mushroomsService} from "../service/mushroomsService.js"

export default {
  // the props contain the information given to each instance of this component
  props: {mShroom: { type: Object, required: true }},
  // props are passed down to the setup for use inside my functions
setup(props){
  // const state = reactive({
  //   disabled: computed(()=> props.mShroom.disabled)
  // })
  const toast = useToast()
  // each instance of the component loads with a despawn timer
  onMounted(()=> {
    setTimeout(()=> {
      // we pass the id from the props to the service in order to filter (despawn) the correct shroom
          mushroomsService.determineDespawnScenario(props.mShroom.id)
        }, 1500)
        // this used to be a random value but a set time is probably best for lvl 1
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