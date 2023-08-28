/*Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: 
Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa 
che "cosa" ci serve?*/

//const x2
//math x2 
//console.log
//if else
//console

//Dichiaro il numero del giocatore
const numberGamer = Math.floor(Math.random() * 6) + 1;
console.log ('Il numero del giocatore è ' + numberGamer)

//Dichiaro il numero del computer
const numberPC = Math.floor(Math.random() * 6) + 1;
console.log ('Il numero del computer è ' + numberPC)
