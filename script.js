// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
//    Questo         richiederà un minimo di ricerca.

// --Strutura--

// 1- Chiedo all'utente il numero di km che vuole percorrere
// 2- Chiedo all'utente l'eta del passaggero
// 3- Prezzo km (0.21 € al km)
// 4- Se l'eta del passaggero e < 18 anni viene applicato uno sconto del 20%
//       - Controlo il costo del biglieto
// 5- Se l'eta del passaggero e > 65 anni viene applicato uno sconto del 40%
//       - Controlo il costo del biglieto
// 6- Altrimenti il prezzo sara intero
// 7- Prezzo finale in forma umana (massimo due decimali)

const kmDistanceClient = Number(prompt(`Inserisci il numero di chilometri da percorrere`));

console.log(kmDistanceClient);

const ageClient = Number(prompt(`Inserisci la tua eta`));

console.log(ageClient);

const priceKm = 0.21;

console.log(priceKm);

const priceFinalKm = kmDistanceClient * priceKm;

console.log(priceFinalKm.toFixed(2));

const discountUnder = 20;

const discountOver = 40;

const discountPriceUnder = (priceFinalKm * discountUnder) / 100;

const priceUnderFinal = priceFinalKm - discountPriceUnder;

console.log(priceUnderFinal.toFixed(2));

const discountPriceOver = (priceFinalKm * discountOver) / 100;

const priceOverFinal = priceFinalKm - discountPriceOver.toFixed(2);

console.log(priceOverFinal.toFixed(2))