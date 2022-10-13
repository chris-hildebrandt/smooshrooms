<template>
<button class="btn btn-primary" @click="hitShroom()">hit me</button>
</template>

<script>
import { useToast } from "vue-toastification"
import {mushroomsService} from "../service/mushroomsService.js"
import {playerService} from "../service/playerService.js"

export default {
setup(){
  const toast = useToast();
return{
  toast,
  hitShroom(){
    try {
      toString.success('you hit it!', {timeout: 2000})
      mushroomsService.hitShroom()
      playerService.increaseScore(1)
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