<template>
<button class="btn btn-primary" @click="hitShroom(bShroom.id)">hit me</button>
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