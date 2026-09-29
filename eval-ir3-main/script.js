"use strict";

// DONNÉES ET CHARGEMENT FOURNIS : cette partie n'est pas évaluée.
// Source : https://fakestoreapi.noksha.dev/api/products
// Capture du 28/09/2026. Prix affichés en euros par convention d'exercice.
// Garder le mode décidé par l'enseignant, identique pour toute la classe.
const MODE_DONNEES = "capture"; // alternative enseignant : "reseau"
const PRODUITS_CAPTURE = [
  {
    "id": 1,
    "title": "Long sleeve Jacket",
    "price": 150,
    "category": "women",
    "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg"
  },
  {
    "id": 2,
    "title": "Jacket with wollen hat",
    "price": 65,
    "category": "women",
    "image": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg"
  },
  {
    "id": 3,
    "title": "Compact fashion t-shirt",
    "price": 55.99,
    "category": "women",
    "image": "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg"
  },
  {
    "id": 4,
    "title": "Blue jins",
    "price": 50,
    "category": "women",
    "image": "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg"
  },
  {
    "id": 5,
    "title": "Skirts with full setup",
    "price": 695,
    "category": "women",
    "image": "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg"
  },
  {
    "id": 6,
    "title": "Yellow Hoody",
    "price": 180,
    "category": "men",
    "image": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
  }
];

let produits = [];

// VOTRE TRAVAIL COMMENCE ICI.
const produit = document.querySelector('.produit')
const liste = document.querySelector('.liste')

function demarrer() {
  // Le tableau produits contient maintenant les six produits.
  // Construisez le catalogue et initialisez l'affichage du produits.
 PRODUITS_CAPTURE.forEach((element) => {
    const card = document.createElement('div')
    const prixformate = element.price.toFixed(2)
    card.className = 'produit-card';

      const boutonHTML = `
       <img src="${element.image}" alt="Image de ${element.title}">
      <span class="badge">${element.category}</span>
      <h1>${element.title}</h1>
      <p class="price">${prixformate} €</p>
      <button class="bouton" style="background-color: blue; color: white;" onclick="addToCard(${element.id})">Ajouter au produits</button>
    `;
    card.innerHTML = boutonHTML; 
      liste.appendChild(card);
  });
  
}

// Ajoutez vos variables et vos fonctions ici.

demarrer()



const toggleSideBar = () => {
  const panier = document.querySelector('.panierS')
  const sideBar = document.querySelector('.sidebar')
  panier.addEventListener('click', () => {
    sideBar.classList.toggle('w-[600px]')
  })
}

toggleSideBar()


function addToCard(id) {
    const produit = PRODUITS_CAPTURE.find(p => p.id === id); 
    
    if (!produit) {
        alert("Produit non trouvé");
        return;
    }

    const articleExistant = produits.find(item => item.id === id);
    
    if (articleExistant) {
        articleExistant.quantite++;
    } else {
        produits.push({
            id: produit.id,
            nom: produit.title,
            prix: produit.price,
            quantite: 1
        });
    }

    Affichagepanier();
    

    console.log(`Produit ${produit.title} ajouté au produits.`);
}

function Affichagepanier() {

    const compteur = document.querySelector('.counter');
    if (compteur) {
        const totalArticles = produits.reduce((sum, item) => sum + item.quantite, 0);
        compteur.textContent = totalArticles;
    }
    

}   

const displaySideBar = () => {
  const panierP = document.querySelector('.panierP')
   panierP.addEventListener('click', (e) => {
    e.preventDefault()
    sideBar.classList.toggle('w-[600px]')
  })
}

const deleteArticle = () => {
 
}







