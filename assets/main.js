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
console.log ('Il numero del giocatore è ' + numberGamer);

//Dichiaro il numero del computer
const numberPC = Math.floor(Math.random() * 6) + 1;
console.log ('Il numero del computer è ' + numberPC);

//Stabilisco il vincitore in base a chi fa il numero più alto 
if(numberGamer > numberPC) {
    console.log ('Il vincitore è il giocatore!');
} else if(numberPC > numberGamer) {
    console.log ('Il vincitore è il PC');
} else if (numberGamer == numberPC) {
    console.log ('Pareggio');
}


/*Chiedi all'utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.*/

//array
//prompt
//for
//if
//console.log

//Creo una lista di invitati 
const listEmail = ['matteo@gmail.com','federica@gmail.com','fabio@gmail.com','paolo@gmail.com','artur@gmail.com']
//Collego il pulsante
const DOMPulsante = document.getElementById('btn_scopri'); 
console.log(DOMPulsante);
//funzione
DOMPulsante.addEventListener('click' , function(){
    //Seleziono l'input email 
    const inputEmail = document.getElementById ('box').value
    //Controllo che sia nella lista 
    let isIn = 0
    for (let i= 0; i < listEmail.length; i++) {
        const element = listEmail[i];
        if (inputEmail == element) {
           console.log ('Sei invitato!')
           isIn = 1
           document.getElementById ('result').innerHTML = 'Sei invitato!'
           document.getElementById('result').style.color = "red"
        }
    }
    if (isIn == 0) {
        console.log ('Non sei tra gli invitati');
        document.getElementById ('result').innerHTML = 'Non sei tra gli invitati'
        document.getElementById('result').style.color = "brown"
    }
})



/*Usiamo un input e un bottone per inserire la mail e poi mostriamo 
i risultati in pagina.*/


