<template>
  <HomePage/>
</template>

<script>

import HomePage from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* body{
  cursor: url("https://cur.cursors-4u.net/sports/spo-1/spo26.cur");
} */
.attack-cursor{
  cursor: url(https://media1.giphy.com/media/hs1iFyGUUxO9SOJ2WI/giphy.gif?cid=6c09b95287e7gigqlxqxyfrtzsm8n51fcz2v4e4q7vy9zo7z&rid=giphy.gif&ct=s), auto !important;
}
</style>
