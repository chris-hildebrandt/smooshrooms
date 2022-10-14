import {playerService} from "../service/playerService.js"
import { generateId } from "@/utilities/generateId.js";
import $Store from '../Store.js'
class MushroomsService {

getShroomById(id){
  const mushroom = $Store.state.basicShrooms.find((m)=>m.id == id)
  if (!mushroom){
    throw new console.error("no mushroom found by that id");
  } return mushroom
}
hitShroom(id){
  const mushroom = this.getShroomById(id)
  mushroom.hitPoints -= 

  playerService.increaseScore(1)
}
removeShroom(){

}
spawnShrooms(stage){
  const mushroom = {}
  switch(stage){
    case 1:
    mushroom.id = generateId()
    mushroom.name = "BasicShroom"
    mushroom.hitPoints = 1
    $Store.state.basicShrooms.push(mushroom)
    break;
  }
}
}
export const mushroomsService = new MushroomsService()