
import $Store from '../Store.js'
class PlayerService{
  increaseScore(num){
    $Store.state.score += num
  }
  increaseStage(){
    $Store.state.stage++
    $Store.state.shroomsRemaining = 25
  }
}
export const playerService = new PlayerService()