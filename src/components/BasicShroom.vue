<template>
  <marquee class="mq1" behavior="alternate" direction="up">
    <marquee class="mq2" behavior="alternate" direction="right">
      <button class="btn btn-primary" @click="hitShroom(bShroom.id)">hit me</button>
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