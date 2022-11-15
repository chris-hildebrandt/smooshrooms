
import $Store from '../Store.js'
class PlayerService{
  increaseScore(num){
    $Store.state.score += num
    if($Store.state.score >= 5){
      $Store.state.stage = 2
    }
    if($Store.state.score >= 10){
      $Store.state.stage = 3
    }
  }
  increaseStage(){
    $Store.state.stage++
  }
}
export const playerService = new PlayerService()