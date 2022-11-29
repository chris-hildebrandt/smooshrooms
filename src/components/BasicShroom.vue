<template>
  <!-- image for the shroom, and the gif for smooshing -->

  <div v-if="bShroom.type == 'mobile'" draggable="false" class="small-box shroom" :id="bShroom.id"
    :class="'position' + bShroom.location + ' ' + (bShroom.disabled ? 'disabled' : '')" @click="hitShroom(bShroom.id)"
    :style="'left: ' + bShroom.direction.x.coordinates + 'px; top: ' + bShroom.direction.y.coordinates + 'px;'">
    <img v-if="bShroom.img == 3" :id="'shroom' + bShroom.id" class="small-box btn m-0" draggable="false"
      :title="bShroom.name" src="../assets/sprites/Monster_fungus_big_stand_full.webp" alt="Basic-Shroom">
    <img :id="'poof' + bShroom.id" class="small-box m-0 d-none" draggable="false"
      src="../assets/the-one-who-got-away_86.gif" alt="poof">
  </div>

  <div v-else draggable="false" class="small-box shroom" :id="bShroom.id"
    :class="'position' + bShroom.location + ' ' + (bShroom.disabled ? 'disabled' : '')"
    @click.stop="hitShroom(bShroom.id)">
    <!-- location is a random number between 1-10 tied to a set of css props for location on the dom -->
    <img v-if="bShroom.img == 1" :id="'shroom' + bShroom.id" class="small-box btn m-0 attack-cursor hover-grow"
      draggable="false" :title="bShroom.name" src="../assets/sprites/brown-shroom.png" alt="Basic-Shroom">
    <img v-if="bShroom.img == 2" :id="'shroom' + bShroom.id" class="small-box btn m-0" draggable="false"
      :title="bShroom.name" src="../assets/sprites/shroom2large.webp" alt="Basic-Shroom">
    <!-- why can't I data bind the img path? -->
    <!-- <img :id="'shroom'+bShroom.id" class="small-box btn m-0" draggable="false" :title="bShroom.name" :src="bShroom.img" alt="Basic-Shroom"></img> -->
    <img :id="'poof' + bShroom.id" class="small-box m-0 d-none" draggable="false"
      src="../assets/the-one-who-got-away_86.gif" alt="poof">
  </div>


</template>

<script>
// import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useToast } from "vue-toastification"
import { Mushroom } from "@/models/Mushroom.js";
import { randomMarquee } from "@/utilities/marquee.js";
import { mushroomsService } from "../service/mushroomsService.js"

export default {
  // the props contain the information given to each instance of this component
  props: { bShroom: { type: Mushroom, required: true } },
  // props are passed down to the setup for use inside my functions
  setup(props) {
    // const state = reactive({
    //   disabled: computed(()=> props.bShroom.disabled)
    // })
    const toast = useToast()
    // each instance of the component loads with a despawn timer
    onMounted(() => {
      setInterval(()=> {randomMarquee(props.mShroom.id)}, 10)
      setTimeout(() => {
        // we pass the id from the props to the service in order to filter (despawn) the correct shroom
        mushroomsService.determineDespawnScenario(props.bShroom.id)
      }, props.bShroom.despawnDelay)
      // this used to be a random value but a set time is probably best for lvl 1
    })
    return {
      toast,
      // this should be moved to the app or homepage
      hitShroom(id) {
        try {
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
.small-box {
  height: 100px;
  width: auto;
  margin: 0;
}

.disabled {
  pointer-events: none;
}

img {
  user-select: none;
}
</style>