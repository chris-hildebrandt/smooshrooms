
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
    $Store.state.totalScore += $Store.state.stageScore
    $Store.state.stage++
    $Store.state.shroomsRemaining = 25
    $Store.state.missCount = 0
    $Store.state.stageScore = 0
  }
  startGame(){
    $Store.state.missCount = 0
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