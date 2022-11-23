import { playerService } from "../service/playerService.js"
import $Store from '../Store.js'
import { findOpenLocation } from "@/utilities/findOpenLocation.js";
import { Mushroom } from "@/models/Mushroom.js";
class MushroomsService {

  getShroomById(id) {
    let mushroom = $Store.state.basicShrooms.find((m) => m.id == id)
    if(!mushroom) {
        mushroom = $Store.state.moveShrooms.find((m) => m.id == id)
    }
    if (!mushroom) {
      console.log("no mushroom found by that id");
    } return mushroom
  }
  hitShroom(id) {
    const mushroom = this.getShroomById(id)
    mushroom.hitPoints -= $Store.state.smooshPower
    if (mushroom.hitPoints <= 0) {
      const shroom = document.getElementById('shroom' + id)
      const poof = document.getElementById('poof' + id)
      mushroom.disabled = true
      shroom.classList.add('d-none')
      poof.classList.remove('d-none')
      playerService.increaseScore(1)
      this.determineDespawnScenario(mushroom.id)
    }
  }
  decreaseRemainingShrooms() {
    $Store.state.shroomsRemaining--
    if ($Store.state.shroomsRemaining <= 0) {
      clearInterval($Store.state.spawnInterval)
      document.getElementById('modal-button').click()
    }
  }
  determineDespawnScenario(id) {
    const mushroom = this.getShroomById(id)
    if(!mushroom){return}
    if (mushroom.hitPoints > 0) {
      this.instantDespawn(mushroom)
    } else {
      this.delayedDespawn(mushroom)
    }
    this.decreaseRemainingShrooms()
    console.log('decreasing', mushroom.id)
  }
  instantDespawn(mushroom) {
    // splice vs filter
    const mIndex = $Store.state.basicShrooms.findIndex(m => m.id == mushroom.id)
    $Store.state.basicShrooms.splice(mIndex, 1)
    console.log('instant de-spawn', mushroom.id)
  }
  delayedDespawn(mushroom) {
    setTimeout(() => { $Store.state.basicShrooms = $Store.state.basicShrooms.filter(m => m.id != mushroom.id) 
      console.log('delayed de-spawn', mushroom.id)
    }, 700)
  }
  spawnShrooms() {
    const mushroom = {}
    if (!findOpenLocation()) { return }
    if ($Store.state.basicShrooms.length >= 10){return}
    if ($Store.state.moveShrooms.length >= 10){return}
    if ($Store.state.basicShrooms.length >= $Store.state.shroomsRemaining){return}
    if ($Store.state.moveShrooms.length >= $Store.state.shroomsRemaining){return}
    switch ($Store.state.stage) {
      case 1:
        // how can I store this information better? should it exist on the component?
        mushroom.name = "BasicShroom"
        mushroom.img = 1
        mushroom.hitPoints = 1
        break;

      case 2:
        if (Math.random() > .5) {
          mushroom.name = "BasicShroom"
          mushroom.img = 1
          mushroom.hitPoints = 1
        } else {
          mushroom.name = "TuffShroom"
          mushroom.img = 2
          mushroom.hitPoints = 2
        }
        break;

      case 3:
        mushroom.name = "skitterShroom"
        mushroom.img = 3
        mushroom.hitPoints = 1
        mushroom.location = 11
        mushroom.height = Math.random() * (window.innerHeight - 100)
        mushroom.width = Math.random() * (window.innerWidth - 100)
        mushroom.direction = Math.floor(Math.random() * 4)
        mushroom.type = 'mobile'
        break;
      // stages: [['basic'], [75:'basic', 100:'tuff']]
      // mushroomTypes: [{name: 'basicMushroom', }]
      // let rand1 = Math.random()*100
      // store.stage[cu]
      // sttore.stages[currentStage][rand1]
    }
    if (mushroom?.type == 'mobile') {
      $Store.state.moveShrooms.push(new Mushroom(mushroom))
      console.log('spawning', mushroom.id)
      return
    }
    $Store.state.basicShrooms.push(new Mushroom(mushroom))
    console.log('spawning', mushroom.id)
  }
  incrementSpin(){
    $Store.state.spinDeg += 360
    // why doesn't this VVV work?
    // $Store.state.spinDeg++
    // if($Store.state.spinDeg >= 360){
    //   $Store.state.spinDeg = 0
    //   return
    // }
  }
}
export const mushroomsService = new MushroomsService()