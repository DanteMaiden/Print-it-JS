const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//récupère le nombre de slides à afficher
const tableauLength = slides.length;

//slide du Carousel par défaut
const baliseImage = document.getElementById("banner-img");
baliseImage.setAttribute("src", "./assets/images/slideshow/" + slides[0]['image']);
const paragraph = document.getElementById("paragraph");
paragraph.innerHTML = slides[0]['tagLine'];

//initialisation de la variable de slide en cours
let pos = 0;


//récupère élément parent pour les points
const parentElement = document.getElementById("dots");

//affichage des points
for(let i = 0; i < tableauLength; i++){
	const nouvelElement = document.createElement("div");

	if(i == 0){
		//classe spécifique pour le premier point
		nouvelElement.setAttribute("class", "dot dot_selected");
	}else{
		//on affiche les autres points normalement
		nouvelElement.setAttribute("class", "dot");
	}
	nouvelElement.setAttribute("id", i);
	parentElement.appendChild(nouvelElement);
	
}


//fonctions pour les flèches
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

arrowLeft.addEventListener("click", clickLeft);
arrowRight.addEventListener("click", clickRight);

function clickLeft() {
	let oldPoint = ""

	if(pos == 0){
		//comportement boucle infinie
		pos = tableauLength - 1;
		//décalage du point
		oldPoint = document.getElementById(0);
	}else{
		//comportement normal
		pos--;
		//décalage du point
		oldPoint = document.getElementById(pos+1);
	}
	//modification de l'image
	baliseImage.setAttribute("src", "./assets/images/slideshow/" + slides[pos]['image']);

	//modification du texte
	paragraph.innerHTML = slides[pos]['tagLine'];
	
	oldPoint.classList.remove("dot_selected")
	let newPoint = document.getElementById(pos);
	newPoint.classList.add("dot_selected");
	
}

function clickRight() {
	let oldPoint = ""

	if(pos == tableauLength-1){
		//comportement boucle infinie
		pos = 0;
		//décalage du point
		oldPoint = document.getElementById(tableauLength-1);
	}else{
		//comportement normal
		pos++;
		//décalage du point
		oldPoint = document.getElementById(pos-1);
	}
	//modification de l'image
	baliseImage.setAttribute("src", "./assets/images/slideshow/" + slides[pos]['image']);

	//modification du texte
	paragraph.innerHTML = slides[pos]['tagLine'];

	oldPoint.classList.remove("dot_selected")
	let newPoint = document.getElementById(pos);
	newPoint.classList.add("dot_selected")
}
