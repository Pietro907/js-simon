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
console.log(nowDate);

const nowDateElement = document.querySelector('.now_date');
nowDateElement.innerHTML = nowDate;