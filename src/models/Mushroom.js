import { generateId } from "@/utilities/generateId.js"
import { generateLocation } from "@/utilities/generateLocation.js"

export class Mushrooms{
  constructor(data){
    this.id = generateId()
    this.name = data.name
    this.hitPoints = data.hitPoints
    this.location = generateLocation()
    this.img = data.img
    this.poofImg = data.poofImg
    this.disabled = data.disabled || false
    this.despawnDelay = data.despawnDelay
    }
  }
