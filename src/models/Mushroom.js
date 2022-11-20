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
    this.despawnDelay = data.despawnDelay
    this.type = data.type || 'stationary'
    this.direction = data.direction || {
      x: { speed: Math.ceil(Math.random() * 4), positive: Math.random() > .5, coordinates: Math.random() * document.getElementById('stage').offsetWidth, max: document.getElementById('stage').offsetWidth },
      y: { speed: Math.ceil(Math.random() * 4), positive: Math.random() > .5, coordinates: Math.random() * document.getElementById('stage').offsetHeight, max: document.getElementById('stage').offsetHeight }
    }
  }
}