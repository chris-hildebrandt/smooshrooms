<template>
    <img title="basic shroom" class="btn btn-primary m-0" @click="hitShroom(bShroom.id)" src="https://image.shutterstock.com/image-vector/button-mushroom-pixel-art-vector-260nw-1075017158.jpg" alt="Basic-Shroom">
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
        }, Math.random()*1000)
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
</style>