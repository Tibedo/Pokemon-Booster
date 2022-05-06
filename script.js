

function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}

//function buyBooster() {
//    location.reload()
//}


/*
function openBooster() {

    let openedCard = document.getElementById("booster-open");
    while (openedCard.firstChild) {
        openedCard.firstChild.remove();
    }
     
        let cardDiv = document.createElement("div")
        cardDiv.className = "pokemon-card"
       

        let pokemon = document.createElement("img")
        pokemon.id = i


        let num = 1;
         if (i == 10) {
             num = randomNum(1, 16)
         }
         else {
             num = randomNum(17, 102)
         }
        pokemon.src = "./pokemon-cards/base set (" + num.toString() + ").jpg"
        
        cardDiv.appendChild(pokemon)
        
        document.getElementById("booster-open").appendChild(cardDiv)

    }
    setInterval(openBooster(), 1000);
*/



let i = 0
const MAX = 11

let go = function() {

   
        let cardDiv = document.createElement("div")
        cardDiv.className = "pokemon-card"
       

        let pokemon = document.createElement("img")
        pokemon.id = i;
        i++
   
        let num = 0;

         if (i == 11) {
             num = randomNum(1, 16)
         }
         else {
             num = randomNum(17, 102)
         }
        pokemon.src = "./pokemon-cards/base set (" + num.toString() + ").jpg"
        
        cardDiv.appendChild(pokemon)

        
        document.getElementById("booster-open").appendChild(cardDiv)
 
        if(i === 10) {
    setTimeout(go, 2000)
     }
       else if(i < 11) {
    setTimeout(go, 500)
     }
     else {
         clearTimeout(go)
     }

     function reset() {
         location.reload()
     }
     
     let booster = document.getElementById("booster")
    booster.addEventListener("click", reset)
}

    let booster = document.getElementById("booster")
    booster.addEventListener("click", go)


/*
let i = 0
const MAX = 11


function createDiv(){
  const div = document.createElement('div')
  div.className = 'pit'
  i++

  const main = document.querySelector('main')
  main.appendChild(div)
  
  if(i === 4)
    setTimeout(createDiv, 2000)
  else if(i < MAX)
    setTimeout(createDiv, 300)
}
createDiv()
*/
