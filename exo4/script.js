
// 1. Représentation d'un produit
function exercice1() {
    const produit = {
        nom: "produit",
        prix: 4500,
        quantite: 8
    };

    console.log("1. Valeur du stock de", produit.nom, ":", produit.prix * produit.quantite, "Da");
}


// 2. Catalogue et filtrage des prix
function exercice2() {

    const catalogue = [
        {
          nom: "produit1",
          prix: 1500,
          quantite: 15 
        },
        {
           nom: "produit2",
           prix: 4500,
           quantite: 8
        },
        {
           nom: "produit3",
           prix: 28000, 
           quantite: 5 
        },
        { 
            nom: "produit4",
            prix: 800, 
            quantite: 25
         },
        { 
            nom: "produit5",
            prix: 6200, 
            quantite: 10
        }
    ];

    const prixMoyen = catalogue.reduce((acc, p) => acc + p.prix, 0) / catalogue.length;

    console.log("2. Prix moyen :", prixMoyen, "Da");

    const superieursMoyenne = catalogue.filter(p => p.prix > prixMoyen);

    console.log("2. Produits au-dessus du prix moyen :", superieursMoyenne);
}


// 3. Totaux avec reduce
function exercice3() {

    const catalogue = [
        { 
            nom: "produit1",
            prix: 1500,
            quantite: 15 
        },
        { 
            nom: "produit2",
            prix: 4500,
            quantite: 8
        },
        { 
            nom: "produit3",
            prix: 28000, 
            quantite: 5 
        },
        { 
            nom: "produit4",
            prix: 800, 
            quantite: 25
         },
        { 
            nom: "produit5",
            prix: 6200, 
            quantite: 10
        }
    ];

    const totalArticles = catalogue.reduce((acc, p) => acc + p.quantite, 0);

    const valeurGlobale = catalogue.reduce((acc, p) => acc + (p.prix * p.quantite), 0);

    console.log("3. Nombre total d'articles :", totalArticles);
    console.log("3. Valeur globale du stock :", valeurGlobale, "Da");
}


// 4. Fonction de calcul
function calculerValeurStock(p) {
    return p.prix * p.quantite;
}

function exercice4() {

    const catalogue = [
        { 
            nom: "produit1",
            prix: 1500, 
            quantite: 15 
        },
        { 
            nom: "produit2", 
            prix: 4500, 
            quantite: 8 
        },
        { 
            nom: "produit3", 
            prix: 28000, 
            quantite: 5 
        },
        { 
            nom: "produit4", 
            prix: 800,
            quantite: 25 
        },
        { 
            nom: "produit5", 
            prix: 6200,
            quantite: 10 
        }
    ];

    console.log("4. Stock produit2 :", calculerValeurStock(catalogue[1]), "Da");
    console.log("4. Stock produit3 :", calculerValeurStock(catalogue[2]), "Da");
}


// 5. Traitement avec Callback
function traiterCatalogue(liste, callback) {
    liste.forEach(produit => callback(produit));
}

function exercice5() {

    const catalogue = [
        {
            nom: "produit1", 
            prix: 1500, 
            quantite: 15
        },
        { 
            nom: "produit2", 
            prix: 4500,
            quantite: 8 
        },
        { 
            nom: "produit3", 
            prix: 28000,
            quantite: 5
        },
        { 
            nom: "produit4", 
            prix: 800,
            quantite: 25 
        },
        { 
            nom: "produit5", 
            prix: 6200,
            quantite: 10
        }
    ];

    console.log("5. Noms des produits :");

    traiterCatalogue(catalogue, p => console.log("- " + p.nom));

    console.log("5. Prix des produits :");

    traiterCatalogue(catalogue, p => console.log("- " + p.nom + " : " + p.prix + " Da"));
}
