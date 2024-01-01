const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee", "#F9EAC3"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});



// https://developer.mozilla.org/fr/docs/Web/API/NodeList#:~:text=Les%20objets%20NodeList%20sont%20des,querySelectorAll()%20.


//Array.from : permet de créer une nouvelle instance d'Array (une copie superficielle) 
      //à partir d'un objet itérable ou semblable à un tableau.

// document fait référence à l'objet Document de la fenêtre  
// parent fait référence au parent de la fenêtre courante



//querySelectorAll() récupère une liste de tous les éléments qui correspondent au groupe 
      //de sélecteurs spécifié dans le document


//                  ↓ document.querySelectorAll ↓ 
//https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll  
//Pour obtenir une NodeList (liste de noeuds) de tous les éléments ".navigation-button" dans le document :

//                  ↓ forEach() ↓
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  //on apparie à item l'événement onclick suite auquel on leur attribue une fonction
  item.onclick = () => {
    // ici, item appartient à l'array, qui, en l'occurence se réfère aux boutonx de navigations 
    //toggle() va trigger une class css, ici .change
    //dans la ligne juste en dessous, il faut comprendre: 
        //item=navaigation-button, .parentElement nous fait remonter d'une div, .parentElement 
        // nous fait encore remonter d'une div pour atteindre la class card, 
               
        //item.parentElement :Pointe vers l'élément HTML parent de l'élément sur lequel il s'applique,
            // c'est-à-dire le noeud HTML le contenant.
        //classList.toogle(): La méthode toggle('nomDeLaClasse') permet d'ajouter une classe à un élément 
            //si celle ci ne l'est pas au moment de l'appel à toggle() et réciproquement de la supprimer si elle y est.
        //La méthode classList permet de manipuler les classes d'un élément.
        //classList stoque toutes les class que l'élément a     
    // AINSI: rajoute la class change à l'tem si elle n'existe pas    
    item.parentElement.parentElement.classList.toggle("change");
  };
});

// script pour le slide

const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}