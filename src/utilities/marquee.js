import $Store from '../Store.js'
export function randomMarquee(id) {
  let mushroom = $Store.state.moveShrooms.find(m => m.id == id)
   {
    switch (mushroom.direction) {
      case 0:
        mushroom.height++
        if (mushroom.height >= window.innerHeight - 50) {
          mushroom.height = window.innerHeight - 50
          let options = [1, 2, 3]
          mushroom.direction = options[Math.floor(Math.random() * 3)]
        }
        break;

      case 1:
        mushroom.height--
        if (mushroom.height <= 50) {
          mushroom.height = 50
          let options = [0, 2, 3]
          mushroom.direction = options[Math.floor(Math.random() * 3)]
        }
        break;

      case 2:
        mushroom.width++
        if (mushroom.width >= window.innerWidth - 50) {
          mushroom.width = window.innerWidth - 50
          let options = [1, 0, 3]
          mushroom.direction = options[Math.floor(Math.random() * 3)]
        }
        break;

      case 3:
        mushroom.width--
        if (mushroom.width <= 50) {
          mushroom.width = 50
          let options = [1, 2, 0]
          mushroom.direction = options[Math.floor(Math.random() * 3)]
        }
        break;
    }
  }
}