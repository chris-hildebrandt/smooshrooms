import $Store from '../Store.js'
export function findOpenLocation() {
  let openLocations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  if($Store.state.shrooms.length){
    for(let i = 0; i < $Store.state.shrooms.length; i++){
      openLocations = openLocations.filter(l => l != $Store.state.shrooms[i].location)
    }
  }
  const index = Math.floor(Math.random()*openLocations.length)
  const newLocation = openLocations[index]
  return newLocation
}