import $Store from '../Store.js'
class MushroomsService {
hitShroom(){
  return $Store.smooshPower
}
removeShroom(){

}
}
export const mushroomsService = new MushroomsService()