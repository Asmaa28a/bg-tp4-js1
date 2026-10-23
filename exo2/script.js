// dans le slide 41 on fait une declaration de tableau
const etudiants = [
        {
            id : 1,
            nom :"etudiant 1"
            
        },
            {
            id : 2,
            nom : "etudiant 2"
        },
            {
            id : 3,
            nom : "etudiant 3"
        
        }

];

function f1(){


    for (let i=0 ; i<=2 ;i++){
//une boucle pour lire les etudiants par leur nom et afficher leur nom "slide 45 "
        console.log(etudiants[i].nom);


    }

}
//-----------------------------------------------------------------------------

// dans le slide 41 on fait une declaration de tableau et afficher tout les info de la personne
const Persone = 
        {
            nom :"Jone",
            prenom:"Doe",
            age: "30" 
        }



function f2(){
        console.log(Persone);
}

//--------------------------------------------------------------------------------------------
// Declaration d'un tableau d'objet "slide 41"
const personne = [
    {
        id: "21",
        nom: "nom1",
        prenom: "prenom1"
        
    },

    {  
        id: "22",
        nom: "nom2",
        prenom: "prenom2"
        
    },

    {
        id: "23",
        nom: "nom3",
        prenom: "prenom3"
        
    }
]


function f3() {
    
    for(let i=0; i<=2; i++) {
        // Boucle qui afficher les elements  tableau d'objet  "slide 45"
        console.log(personne[i].nom + "-" + personne[i].prenom + "-" + personne[i].id);
    }
}