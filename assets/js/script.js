/* 
Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/

//il nostro countdown dovrà scalare fino alle 9:30 di domani mattina

//Che giorno è oggi?
//Crea una constante e assegna la data odierna
const nowDate = new Date();
console.log(nowDate + ' data odierna');

const dateInMillisecond = new Date('Sept 5, 2023 15:00:00').getTime();
console.log(dateInMillisecond + ' data Sept 5, 2023 15:00:00 espressa in mille secondi');

//Calcola il tempo di rimanenza
const resultCount =  dateInMillisecond - nowDate;
console.log(resultCount);

//Inizia il countdown!


//Associa e stampa a video la data di oggi nell'elemento now_date, della page HTML
const nowDateElement = document.querySelector('.now_date');
//nowDateElement.innerHTML = nowDate.toUTCString();

//Quanto manca alle 9:30 di domani mattina
// dalle 15 del pomeriggio alle 9:30 di domani
const milliSecond = new Date(); //18.30 ore
console.log(milliSecond + ' data calcolata');

//Crea una constante e assegna il valore di partenza del tempo
const zeroTime = 86400000;  // millisecondi (24h, un giorno) dal punto zero di js (January 01, 1970 00:00:00 UTC)
console.log(zeroTime + ' Zero Time');
const timeNow = 64800000;  // millisecondi alle 9:30 di domani
console.log(timeNow + ' Time remaining');





/* 
JavaScript stores dates as number of milliseconds since January 01, 1970.

Zero time is January 01, 1970 00:00:00 UTC.

One day (24 hours) is 86 400 000 milliseconds.

Now the time is: 1693917785994 milliseconds past January 01, 1970
*/