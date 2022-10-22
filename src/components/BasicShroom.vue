<template>
  <div draggable="false" class="small-box shroom" :class="'position' + bShroom.location" @click="hitShroom(bShroom.id)" >
    <img :id="'shroom'+bShroom.id" class="small-box btn m-0" draggable="false" title="basic shroom" src="../assets/brown-shroom.png" alt="Basic-Shroom">
    <img :id="'poof'+bShroom.id" class="small-box m-0 d-none" draggable="false" src="https://animated-gif-creator.com/images/01/the-one-who-got-away_86.gif" alt="poof">
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useToast } from "vue-toastification"
import {mushroomsService} from "../service/mushroomsService.js"

export default {
  props: {bShroom: { type: Object, required: true }},
setup(props){
  const toast = useToast();
  onMounted(()=> {
    setInterval(()=> {
          mushroomsService.despawn(props.bShroom.id)
        }, Math.random()*3000)
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