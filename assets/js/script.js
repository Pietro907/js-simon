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


//Crea una variante con all'interno la data della lezione
const dataLesson = new Date('Sept 6, 2023 09:30:00').getTime();
console.log(dataLesson);




//Inizia il countdown!
//Creo un intervallo
const reverse = setInterval(function () {

    //Crea una variante con all'interno la data odierna
    const timeDay = new Date();
    const nowDateElement = document.getElementById('now_date');
    console.log(nowDateElement);


    //Calcola il tempo di rimanenza
    const resultCount = dataLesson - timeDay;
    console.log(resultCount + ' differenza tra tra odierna e data prestabilista');

    //Giorni
    const days = Math.floor(resultCount / (1000 * 60 * 60 * 24));
    console.log(days + ' giorni countdown');

    //Ore
    const hours = Math.floor((resultCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours + ' ore countdown');

    //Minuti
    const minutes = Math.floor((resultCount % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes + ' minuti countdown');

    //Secondi
    const seconds = Math.floor((resultCount % (1000 * 60)) / 1000);
    console.log(seconds + ' secondi countdown');

    //Associa il countdown nell'elemento now_date, della page HTML
    const countDownSomma = days + 'd' + hours + 'h' + minutes + 'm' + seconds + 's';
    console.log(countDownSomma + ' countdown');


    //Stampa a video il countdown
    //il nostro countdown dovrà scalare fino alle 9:30 di domani mattina

    nowDateElement.innerHTML = countDownSomma;
    console.log(nowDateElement + ' HEYYYY');

    //Se finisce il countdown: alert!!!
    if (resultCount < 0) {
        clearInterval(reverse);
        alert('Apri Zoom, Fabio ti aspetta!!!!!')
    }

}, 1000);






/* //Quanto manca alle 9:30 di domani mattina
// dalle 15 del pomeriggio alle 9:30 di domani
const milliSecond = new Date(); //18.30 ore
console.log(milliSecond + ' data calcolata');
 */




/* 
JavaScript stores dates as number of milliseconds since January 01, 1970.

Zero time is January 01, 1970 00:00:00 UTC.

One day (24 hours) is 86 400 000 milliseconds.

Now the time is: 1693917785994 milliseconds past January 01, 1970
*/
