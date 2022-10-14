<template>
    <marquee behavior="alternate" :direction="Math.random()*10 > 5 ? 'up' : 'down'">
      <marquee behavior="alternate" :direction="Math.random()*10 > 5 ? 'right' : 'left'">
        <button class="btn btn-primary m-0" @click="hitShroom(bShroom.id)">hit me</button>
      </marquee>
    </marquee>
</template>

<script>
import { useToast } from "vue-toastification"
import {mushroomsService} from "../service/mushroomsService.js"

export default {
setup(){
  const toast = useToast();
return{
  toast,
  hitShroom(id){
    try {
      toast.success('you hit it!', {timeout: 2000})
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
</style>