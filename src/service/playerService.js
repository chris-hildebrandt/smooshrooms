import $Store from '../Store.js'
class PlayerService{
  increaseScore(num){
    $Store.score += num
  }
}
export const playerService = new PlayerService