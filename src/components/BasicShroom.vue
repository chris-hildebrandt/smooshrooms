<template>
    <img title="basic shroom" draggable="false" class="shroom btn m-0" :class="'position' + bShroom.location" @click="hitShroom(bShroom.id)" src="../assets/brown-shroom.png" alt="Basic-Shroom">
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
      toast.success('you hit it!', {timeout: 1000})
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
.shroom{
  height: 100px;
  width: auto;
}
</style>