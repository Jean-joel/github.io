function toggleNav() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('show-nav');
  }
const element = document.getElementById('competence');
var acceuil=document.getElementById('acceuil');
var propos=document.getElementById('propos');
var projet=document.getElementById('projet');
var contact=document.getElementById('contact');
acceuil.addEventListener('click',toggleNav);
propos.addEventListener('click',toggleNav);
projet.addEventListener('click',toggleNav);
contact.addEventListener('click',toggleNav);
// Texte à afficher
const texte = "Bonjour le monde!";
const text0="|";
const text1="Developpeur";
const text2="Web designer";
const text3="Game designer";
const text4="Coach et encadreur";
var comp=[text1,text2,text3,text4];
var compteur=0;
// Durée d'affichage de chaque lettre (en millisecondes)
const vitesse = 100;

// Fonction pour afficher les lettres une par une
function afficherLettres(texte, vitesse) {
  let index = 0;
  if(compteur==3){
    compteur=-1;
  }
  const interval = setInterval(() => {
    // Ajouter la lettre courante à l'élément HTML
      
    element.textContent += texte[index];
    element.textContent = element.textContent+text0;  
    element.textContent = element.textContent.slice(0, -1);
   
    
    index++;

    // Si nous avons atteint la fin du texte, arrêtez l'interval
    if (index === texte.length) {
      clearInterval(interval);
      
      setTimeout(() => {
        // Lancer la fonction pour faire disparaître les lettres
        disparaitreLettres(texte, vitesse);
      }, 1000); // Temps d'attente avant de faire disparaître les lettres
    }
  }, vitesse);
}

// Fonction pour faire disparaître les lettres une par une
function disparaitreLettres(texte, vitesse) {
  let index = texte.length - 1;
  const interval = setInterval(() => {
    // Supprimer la lettre courante de l'élément HTML
    element.textContent = element.textContent.slice(0, -1);
    index--;

    // Si nous avons atteint le début du texte, arrêtez l'interval
    if (index < 0) {
      clearInterval(interval);compteur++;
      setTimeout(() => {
        // Lancer la fonction pour afficher les nouvelles lettres
        afficherLettres(comp[compteur], vitesse);
      }, 1000); // Temps d'attente avant d'afficher les nouvelles lettres
    }
  }, vitesse);
}

// Lancer la fonction pour afficher les lettres
afficherLettres(comp[compteur], vitesse);
