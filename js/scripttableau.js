"use strict";

//Tableau, variable qui peut contenir plusieurs valeurs "array"=tableau, typeof (type du tableau) = objet
//Utiliser less crochets ([]) pour créer un tableau
let tableauFruit=["Grenade", "Mangue", "Passion", "Orange", "Ananas", "Cerise", "Nectarine"];
// let tableauFruit =["index 0", "index 1", "index 2", "index 3", "index 4", "index 5", "index 6"]
console.log(tableauFruit); //un tableau commence toujours par l'index zero 0, donc penser à partir de 0
console.log(tableauFruit[4]);//les crochets permettent d'afficher une valeur seule
console.log(tableauFruit.length);//commande length permet de récuperer la longueur du tableau, sans prendre en compte l'index 0
console.log(tableauFruit.push("Fraise"));//push permet de rajouter une valeurs au tableau (toujours à la fin)
console.log(tableauFruit[1]="Goyave");// pour remplacer la valeurs : "[1] pour l'index de la mangue = "valeurs qui vient remplacer"

console.log(" ");

let names=["Alex", "Alfred"];
names.push("Samy");

names.forEach(name =>{
    name += " va a chercher un grec";
    console.log(name)
})

console.log(" ");

//Boucle (attention ca peut cramer ton pc frere fais beleck)
/* i=0 on initialise la boucle à l'index 0, 
i<tableauFruit.length index plus petit que la longueur du tableau
 et pas de plus petit ou egal, sinon il va sortir du tableau parceque le length ne prends pas en compte l'index 0
i++ egal i+1
*/

for(let i=0;i<tableauFruit.length;i++){  
console.log(tableauFruit[i]);
}

console.log(" ");
console.log(" ");

/**
for(let i egal 10; i plus grand que 5;i++){      exemple boucle infini à ne PAS FAIRE 
    console.log(i);
}  pour un compteur inititalisé à 0 ; on teste la valeur du compteur ; on incremente le compteur de 1
i++ = i+1
i-- = i-1
i+=2 = i+2

*/
//fait une boucle de 1 à 10 qui spam bonjour1, bonjour2, etc jusqu'à bonjour10
for(let i=1;i<=10;i++){
    console.log("bonjour n°"+i);
}
console.log(" ");
console.log(" ");


for(let i=10;i>=0;i--){
    if(i==0){
    alert("Hellooooo !");}

    else{console.log(i);}
}

console.log(" ");
console.log(" ");


for(let i=10;i>=0;i--){
    if(i!=0){ //  i!=0 egal i different de 0
    console.log(i);}

    else{console.log("Hellooooo le sangg!");}
}