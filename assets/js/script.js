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

const dataLesson = new Date('Sept 6, 2023 9:30:00').getTime();
//console.log(dataLesson);

let startLessonAt = setInterval(function allaRovescia() {

    //Che giorno è oggi?
    //const dateInMillisecond = new Date(/* 'Sept 5, 2023 15:00:00' */).getTime();
    //console.log(dateInMillisecond + ' data Sept 5, 2023 15:00:00 espressa in mille secondi');

    //Crea una constante e assegna la data odierna
    const Date = new Date().getTime;
    //console.log(Date + ' data odierna');

    //Calcola il tempo di rimanenza
    const resultCount =  dataLesson - oggi;
    //console.log(resultCount + ' differenza tra tra odierna e data prestabilista');

    //Inizia il countdown!
    //Giorni
    const days = Math.floor(resultCount / (1000 * 60 * 60 * 24));
    //console.log(days + ' giorni countdown');

    //Ore
    const hours = Math.floor((resultCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //console.log(hours + ' ore countdown');

    //Minuti
    const minutes = Math.floor((resultCount % (1000 * 60 * 60)) / (1000 * 60));
    //console.log(minutes + ' minuti countdown');

    //Secondi
    const seconds = Math.floor((resultCount % (1000 * 60)) / 1000);
    //console.log(seconds + ' secondi countdown');

    //Associa il countdown nell'elemento now_date, della page HTML
    const countDownSomma = days + ' d ' + hours + ' h ' + minutes + ' m ' + seconds + ' s ';
    //console.log(countDown + ' countdown');



    //Quando finisce il countdown: alert!!!
    if (resultCount < 0) {
        clearInterval(startLessonAt);
        alert('Apri Zoom, Fabio ti aspetta!!!!!')
        //console.log(allerta);
    }

}*1000);

//Stampa a video il countdown
const nowDateElement = document.querySelector('.now_date')
nowDateElement.innerHTML = startLessonAt;
//console.log(nowDateElement);
//console.log(startLessonAt);

/* 

//Quanto manca alle 9:30 di domani mattina
// dalle 15 del pomeriggio alle 9:30 di domani
const milliSecond = new Date(); //18.30 ore
console.log(milliSecond + ' data calcolata');

//Crea una constante e assegna il valore di partenza del tempo
const zeroTime = 86400000;  // millisecondi (24h, un giorno) dal punto zero di js (January 01, 1970 00:00:00 UTC)
console.log(zeroTime + ' Zero Time');
const timeNow = 64800000;  // millisecondi alle 9:30 di domani
console.log(timeNow + ' Time remaining');
 */




/* 
JavaScript stores dates as number of milliseconds since January 01, 1970.

Zero time is January 01, 1970 00:00:00 UTC.

One day (24 hours) is 86 400 000 milliseconds.

Now the time is: 1693917785994 milliseconds past January 01, 1970
*/