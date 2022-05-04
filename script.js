let booster = document.getElementById("booster")
booster.addEventListener("click", openBooster)


function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}

//function buyBooster() {
//    location.reload()
//}

function openBooster() {

    let openedCard = document.getElementById("booster-open");
    while (openedCard.firstChild) {
        openedCard.firstChild.remove();
    }

    let arr = []

    for(let i = 0; i < 11; i++)  {
        
        //setInterval(function() {
        
        let cardDiv = document.createElement("div")
        cardDiv.className = "pokemon-card"
       // cardDiv.style.visibility = "hidden"

        let pokemon = document.createElement("img")
        pokemon.id = i
       // pokemon.style.visibility = "hidden"

        arr.push(cardDiv)

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

        //}, 1000)
       console.log(arr)
    }

   // setInterval(function() {
   //     cardDiv = document.getElementsByClassName("pokemon-card")
   //     cardDiv[0].style.visibility = "display"
       
  //  }, 1000)
    
    
}



//let buy = document.createElement("button")
//    buy.id = "buy"
//    buy.textContent = "Buy New Pack"
//   buy.addEventListener("click", buyBooster)
//   document.body.appendChild(buy)