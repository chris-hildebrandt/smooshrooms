export function spin(){
  for(let i = 0; i < 360; i++){
    document.getElementById('click-spin').style.transform = `rotate(${i}deg)`
  }
}