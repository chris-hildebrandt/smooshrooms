
import $Store from '../Store.js'
import { mushroomsService } from "./mushroomsService.js"
class PlayerService{
  changeScore(num){
    $Store.state.stageScore += num
  }
  miss(){
    $Store.state.missCount++
  }
  increaseSmooshedCount(num){
    $Store.state.smooshedCount += num
  }
  increaseStage(){
    $Store.state.stage++
    $Store.state.shroomsRemaining = 5
    $Store.state.totalScore += $Store.state.stageScore
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