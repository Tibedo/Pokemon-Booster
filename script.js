

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
const MAX = 10

let go = function() {

        function create() {
        let cardDiv = document.createElement("div")
        cardDiv.className = "pokemon-card"
       

        let pokemon = document.createElement("img")
        let x = 1;
        pokemon.id = i;
        i++
   
        let num = 1;
         if (i == 11) {
             num = randomNum(1, 16)
         }
         else {
             num = randomNum(17, 102)
         }
        pokemon.src = "./pokemon-cards/base set (" + num.toString() + ").jpg"
        
        cardDiv.appendChild(pokemon)

        
        document.getElementById("booster-open").appendChild(cardDiv)
    }
    create()
    }

        function inter() {
            let timeout 

            if (i === 10) {
             timeout = setInterval(go(), 6000)    
             } 
            else if ( i < MAX)   {
                timeout = setInterval(go(), 1000);
            }     
            else {
            clearInterval(timeout)
            }
            
        }

    let booster = document.getElementById("booster")
    booster.addEventListener("click", inter)
