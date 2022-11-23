
import $Store from '../Store.js'
import { mushroomsService } from "./mushroomsService.js"
class PlayerService{
  increaseScore(num){
    $Store.state.score += num
  }
  increaseStage(){
    $Store.state.stage++
    $Store.state.shroomsRemaining = 5
  }
  startGame(){
    $Store.state.spawnInterval = setInterval(()=> {
      setTimeout(() => {
        mushroomsService.spawnShrooms()
      }, Math.random()*3000);
    }, 1000)
    // $Store.state.stage = 3
    this.increaseStage()
  }
}
export const playerService = new PlayerService()