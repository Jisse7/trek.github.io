var ligne1 = document.getElementById("ligne1_Nombre_D'essai");
var ligne2 = document.getElementById("ligne2_Nombre_de_choix");
var ligne3 = document.getElementById("ligne3_Les_choix");

var answer = Math.floor(Math.random()*10) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

document.getElementById("bouton_rejouer").style.display = "none"; 

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 10){
        alert("Merci de rester dans le barème indiqu\351.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            ligne1.textContent = "Incorrect ! Essaye avec un plus grand chiffre";
            ligne2.textContent = "Nombre d'essai: " + no_of_guesses;
            ligne3.textContent = "Vos essais sont : " + guessed_nums;
        }
        else if(user_guess > answer){
            ligne1.textContent = "Incorrect ! Essaye avec un plus petit chiffre";
            ligne3.textContent = "Nombre d'essai: " + no_of_guesses;
            ligne3.textContent = "Vos essais sont : " +
            guessed_nums;
        }
        else if(user_guess == answer) {
            ligne1.textContent = "Tu as finalement trouv\351. Felicitations!!!";
            ligne2.textContent = "Le chiffre \351tait : " + answer;
            ligne3.textContent = "Tu as trouv\351 après "+ no_of_guesses + " essais";
            document.getElementById("bouton_esssai").disabled = true;
            document.getElementById("bouton_esssai").style.display = "none"

            // bouton pour rejouer
            document.getElementById("bouton_rejouer").style.display = "";
            
        }

    }
}


// bouton pour refresh
function rejouer(){

   location.reload();       

}


  