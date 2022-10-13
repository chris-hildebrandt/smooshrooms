<template>
<div>
  <BasicShroom v-for="b in basicShrooms" :key="b.id"/>
</div>
</template>

<script>
import BasicShroom from "@/components/BasicShroom.vue";
import { computed } from "@vue/reactivity";
import $Store from '../Store.js'
export default {
    setup() {
      return {
          basicShrooms: computed(()=> $Store.state.basicShroom)

        };
    },
    components: { BasicShroom }
}
</script>

<style lang="scss" scoped>

</style>