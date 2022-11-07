import $Store from '../Store.js'
export function findOpenLocation() {
  let openLocations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(let i = 0; i <= $Store.state.basicShrooms.length; i++){
    openLocations = openLocations.filter(l => l != $Store.state.basicShrooms.location[i])
  }
  const index = Math.floor(Math.random()*openLocations.length)
  const newLocation = openLocations[index]
   return newLocation
}