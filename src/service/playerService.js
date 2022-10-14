
import $Store from '../Store.js'
class PlayerService{
  increaseScore(num){
    $Store.state.score += num
  }
}
export const playerService = new PlayerService()