<template>
  <button class="btn btn-primary" @click="hitShroom()">I'm Tough!</button>
  </template>
  
  <script>
  import { useToast } from "vue-toastification"
  import {mushroomsService} from "../service/mushroomsService.js"
  import {playerService} from "../service/playerService.js"
  
  export default {
  setup(){
    const toast = useToast();
    let health = 2;
  return{
    toast,
    hitShroom(){
      try {
        health -= mushroomsService.hitShroom()
        if (health <= 0){
          mushroomsService.removeShroom()
          playerService.increaseScore(1)
          toast.success("you got it!", {timeout: 2000})
        }
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