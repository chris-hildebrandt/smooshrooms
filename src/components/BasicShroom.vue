<template>
  <!-- image for the shroom, and the gif for smooshing -->
  <div draggable="false" class="small-box shroom" :class="'position' + bShroom.location" @click="hitShroom(bShroom.id)" >
    <!-- location is a random number between 1-10 tied to a set of css props for location on the dom -->
    <img :id="'shroom'+bShroom.id" class="small-box btn m-0" draggable="false" title="basic shroom" src="../assets/brown-shroom.png" alt="Basic-Shroom">
    <img :id="'poof'+bShroom.id" class="small-box m-0 d-none" draggable="false" src="https://animated-gif-creator.com/images/01/the-one-who-got-away_86.gif" alt="poof">
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useToast } from "vue-toastification"
import {mushroomsService} from "../service/mushroomsService.js"

export default {
  // the props contain the information given to each instance of this component
  props: {bShroom: { type: Object, required: true }},
  // props are passed down to the setup for use inside my functions
setup(props){
  const toast = useToast();
  // each instance of the component loads with a despawn timer
  onMounted(()=> {
    setInterval(()=> {
      // we pass the id from the props to the service in order to filter (despawn) the correct shroom
          mushroomsService.despawn(props.bShroom.id)
        }, 1500)
        // this used to be a random value but a set time is probably best for lvl 1
    })
return{
  toast,
  hitShroom(id){
    try {
      const shroom = document.getElementById('shroom'+ id)
      shroom.classList.add('d-none')
      const poof = document.getElementById('poof'+ id)
      poof.classList.remove('d-none')
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
</style>