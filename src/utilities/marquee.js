import $Store from '../Store.js'
export function randomMarquee(id) {
  let mushroom = $Store.state.basicShrooms.find(m => m.id == id)
   {
    switch (letter.direction) {
      case 0:
        letter.height++
        if (letter.height >= window.innerHeight - 50) {
          letter.height = window.innerHeight - 50
          let options = [1, 2, 3]
          letter.direction = options[Math.floor(Math.random() * 3)]
        }
        return
        break
      case 1:
        letter.height--
        if (letter.height <= 50) {
          letter.height = 50
          let options = [0, 2, 3]
          letter.direction = options[Math.floor(Math.random() * 3)]
        }
        return
        break
      case 2:
        letter.width++
        if (letter.width >= window.innerWidth - 50) {
          letter.width = window.innerWidth - 50
          let options = [1, 0, 3]
          letter.direction = options[Math.floor(Math.random() * 3)]
        }
        return
        break
      case 3:
        letter.width--
        if (letter.width <= 50) {
          letter.width = 50
          let options = [1, 2, 0]
          letter.direction = options[Math.floor(Math.random() * 3)]
        }
        return
        break
    }
  })
}