import { generateId } from "@/utilities/generateId.js"
import { findOpenLocation } from "@/utilities/findOpenLocation.js"

export class Mushrooms{
  constructor(data){
    this.id = generateId()
    this.name = data.name
    this.hitPoints = data.hitPoints
    this.location = findOpenLocation()
    this.img = data.img
    this.poofImg = data.poofImg
    this.disabled = data.disabled || false
    this.despawnDelay = data.despawnDelay
    }
  }
