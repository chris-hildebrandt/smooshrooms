<template>
  <button title="basic shroom" class="btn btn-primary m-0" @click="hitShroom(bShroom.id)">
    <img src="src\assets\button-mushroom-pixel-art-vector-260nw-1075017158.webp" alt="Basic-Shroom">
  </button>
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