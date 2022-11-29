import { generateId } from "@/utilities/generateId.js"
import { findOpenLocation } from "@/utilities/findOpenLocation.js"

export class Mushroom {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.hitPoints = data.hitPoints
    this.location = data.location || findOpenLocation()
    this.img = data.img
    this.poofImg = data.poofImg
    this.disabled = data.disabled || false
    this.despawnDelay = data.despawnDelay || 3000
    this.type = data.type || 'stationary'
    this.direction = {
      x: { speed: Math.ceil(Math.random() * 4), positive: Math.random() > .5, coordinates: Math.random() * document.getElementById('stage').clientWidth, max: document.getElementById('stage').clientWidth -150 },
      y: { speed: Math.ceil(Math.random() * 4), positive: Math.random() > .5, coordinates: Math.random() * document.getElementById('stage').clientHeight, max: document.getElementById('stage').clientHeight -100}
    }
  }
}