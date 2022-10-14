
import $Store from '../Store.js'
class PlayerService{
  increaseScore(num){
    $Store.state.score += num
  }
  increaseStage(){
    $Store.state.stage++
  }
}
export const playerService = new PlayerService()