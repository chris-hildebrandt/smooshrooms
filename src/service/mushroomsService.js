import {playerService} from "../service/playerService.js"
import { generateId } from "@/utilities/generateId.js";
import $Store from '../Store.js'
class MushroomsService {

getShroomById(id){
  const mushroom = $Store.state.basicShrooms.find((m)=>m.id == id)
  if (!mushroom){
    console.log("no mushroom found by that id");
  } return mushroom
}
hitShroom(id){
  const mushroom = this.getShroomById(id)
  mushroom.hitPoints -= $Store.state.smooshPower
  if(mushroom.hitPoints <= 0){
    playerService.increaseScore(1)
    setTimeout(()=>{this.despawn(id)}, 700)
  }
}
despawn(id){
  const mushroom = this.getShroomById(id)
  console.log(mushroom)
  $Store.state.basicShrooms = $Store.state.basicShrooms.filter(m => m.id != mushroom.id)
}
spawnShrooms(){
  const mushroom = {}
  switch($Store.state.stage){
    case 1:
    mushroom.id = generateId()
    mushroom.name = "BasicShroom"
    mushroom.hitPoints = 1
    mushroom.location = Math.floor(Math.random()*10)
    $Store.state.basicShrooms.push(mushroom)
    break;
    case 2:
      
  }
}
}
export const mushroomsService = new MushroomsService()