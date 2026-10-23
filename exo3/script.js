// Déclaration d'un tableau d'objet "slide 41"
const Students = [
    { 
      id: 1000,
      prenom: "JOHN",
      nom: "DOE",   
      note: 14,
      autre: 5 
    },

    { 
        id: 2000, 
        prenom: "BOB", 
        nom: "CARLTON", 
        note: 7, 
        autre: 1 
    },
    { 
        id: 3000,
        prenom: "RAYANE",
        nom: "SMITH",  
        note: 13,
        autre: 3

    }
]

// fonction B qui prend note et retourne un booléen "slide 46"
function B(note) {
    return note >= 10;
}

// fonction A qui appelle la fonction B et affiche le résultat.
function A() {

    for (let i = 0; i <=2; i++) {
        // boucle "for" pour afficher si il est admis ou ajourne "slide 45"
        const C = B(Students[i].note);
        if (C){
            console.log(Students[i].id + ": " + "ADMIS")
        }
        else {
            console.log(Students[i].id + ": " + "AJOURNÉ")
        }


    }
}




