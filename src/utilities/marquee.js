import $Store from '../Store.js'
export function randomMarquee(id) {
  let mushroom = $Store.state.moveShrooms.find(m => m.id == id)
  if(!mushroom){return}
  for (let dir in mushroom.direction){
    if (mushroom.direction[dir].positive) {
      mushroom.direction[dir].coordinates += mushroom.direction[dir].speed
      if (mushroom.direction[dir].coordinates >= mushroom.direction[dir].max) {
        mushroom.direction[dir].coordinates = mushroom.direction[dir].max - 10
        mushroom.direction[dir].positive = !mushroom.direction[dir].positive
        mushroom.direction[dir].speed = Math.ceil(Math.random() * 4)
      }
    }
    else {
      mushroom.direction[dir].coordinates -= mushroom.direction[dir].speed
      if (mushroom.direction[dir].coordinates <= 0) {
        mushroom.direction[dir].coordinates = 10
        mushroom.direction[dir].positive = !mushroom.direction[dir].positive
        mushroom.direction[dir].speed = Math.ceil(Math.random() * 4)
      }
    }
  }
}