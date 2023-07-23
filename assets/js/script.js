let loginEl = document.getElementById("login")
let username = ["admin01","admin02","admin03"]
let password = [[1,2,3,],[2,3,4][3,4,5]]
let welcomeEl = document.getElementById("welcome")
function login() {
  if(username[0] || password [0]){
  welcomeEl.textContent = "welcome admin01"
}else if(username[1] || password [1]){
  welcomeEl.textContent = "welcome admin02"
  = "welcome admin02"
}else if(username[2] || password [2]){
    welcomeEl.textContent = "welcome admin03"

}else {
  alert = "you have 3 attempts"
}
}
const fighters = [
    "🐉",
    "🐥",
    "🐊",
    "💩",
    "🦍",
    "🐢",
    "🐩",
    "🦭",
    "🦀",
    "🐝",
    "🤖",
    "🐘",
    "🐸",
    "🕷",
    "🐆",
    "🦕",
    "🦁",
  ]
  let stageEl = document.getElementById("stage")
  let fightButtonEl = document.getElementById("fightButton")
  fightButtonEl.addEventListener("click",function(){
    
    let char01 = Math.floor( Math.random(fighters)*fighters.length)
    let char02 = Math.floor( Math.random(fighters)*fighters.length)
    let diff = 0
    fightButtonEl.style.backgroundColor="#fff"
    // stageEl.textContent = fighters[char01] + "vs" + fighters[char02]
    stageEl.innerHTML = `${fighters[char01]} vs ${fighters[char02]}`
    if(fighters[3] == fighters[char01] || fighters[3] == fighters[char02]){
      stageEl.innerHTML += `<br> ${fighters[3]} Is The Winner`
    }else{
      if(char01 > char02){
        diff = char01 -  char02
        stageEl.innerHTML += `<br> ${fighters[char01]} win by ${diff } points`
        if(diff>9){
          fightButtonEl.style.backgroundColor="#0f5"
        }
      }else if(char01 < char02){
        diff = char02 -  char01
        stageEl.innerHTML += `<br> ${fighters[char02]} win by ${diff } points`
        if(diff>9){
          fightButtonEl.style.backgroundColor="red"
        }
      }else {
        stageEl.innerHTML += `<br> TIE GAME`
        fightButtonEl.style.backgroundColor="#f0f"
      }
    }
  })