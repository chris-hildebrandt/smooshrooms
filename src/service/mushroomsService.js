import {playerService} from "../service/playerService.js"
import { generateId } from "@/utilities/generateId.js";
import $Store from '../Store.js'
import { findOpenLocation } from "@/utilities/findOpenLocation.js";
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
    const shroom = document.getElementById('shroom'+ id)
    const poof = document.getElementById('poof'+ id)
    mushroom.disabled = true
    shroom.classList.add('d-none')
    poof.classList.remove('d-none')
    playerService.increaseScore(1)
    this.determineDespawnScenario(mushroom.id)
  }
}
determineDespawnScenario(id){
  const mushroom = this.getShroomById(id)
  if (mushroom.hitPoints > 0){
    this.instantDespawn(mushroom)
  } else {
    this.delayedDespawn(mushroom)
  }
}
instantDespawn(mushroom){
  // splice vs filter
  const mIndex = $Store.state.basicShrooms.findIndex(m => m.id == mushroom.id)
  $Store.state.basicShrooms.splice(mIndex, 1)
}
delayedDespawn(mushroom){
  setTimeout(()=>{$Store.state.basicShrooms = $Store.state.basicShrooms.filter(m => m.id != mushroom.id)}, 700)
}
spawnShrooms(){
  const mushroom = {}
  switch($Store.state.stage){
    case 1:
      // how can I store this information better? should it exist on the component?
      mushroom.id = generateId()
      mushroom.name = "BasicShroom"
      mushroom.img = 1
      mushroom.disabled = false
      mushroom.hitPoints = 1
      mushroom.location = findOpenLocation()
      $Store.state.basicShrooms.push(mushroom)
      break;
      
      case 2:
        mushroom.id = generateId()
        mushroom.location = Math.floor(Math.random()*10)
        if(Math.random() > .5){
        mushroom.name = "BasicShroom"
        mushroom.img = 1
        mushroom.hitPoints = 1
        $Store.state.basicShrooms.push(mushroom)
      } else {
        mushroom.name = "TuffShroom"
        mushroom.img = 2
        mushroom.hitPoints = 2
        $Store.state.basicShrooms.push(mushroom)
      }
      break;
// stages: [['basic'], [75:'basic', 100:'tuff']]
// mushroomTypes: [{name: 'basicMushroom', }]

// let rand1 = Math.random()*100
// store.stage[cu]
// sttore.stages[currentStage][rand1]
  }
}
}
export const mushroomsService = new MushroomsService()