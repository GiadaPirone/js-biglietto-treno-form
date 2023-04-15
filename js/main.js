document.getElementById("bigliettoCompleto").style.display = "none";

let bigliettoScontato = "Biglietto Scontato";
let bigliettoStandard = "Biglietto Standard"

let carrozza = Math.floor( Math.random()* 10);
let CP = Math.floor( Math.random()* 100000);

function Prezzo(){
    let prezzoKm = 0.21;
    let km = document.getElementById("chilometri").value;
    let prezzoBiglietto = prezzoKm * km;
    
    let etàUtente = document.getElementById("età").value;
    
    
    if (etàUtente == "minorenne"){
        prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 20 / 100);
        document.getElementById("risultato").innerText = prezzoScontato.toFixed(2);
        
        // biglietto   scontato.
        document.getElementById("risultatoOfferta").innerText = bigliettoScontato;
        

    } else if ( etàUtente == "over65"){
        prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 40 / 100);
        document.getElementById("risultato").innerText = prezzoScontato.toFixed(2);

        // biglietto   scontato.
        document.getElementById("risultatoOfferta").innerText = bigliettoScontato;

    } else if ( etàUtente == "maggiorenne"){
        document.getElementById("risultato").innerText = prezzoBiglietto.toFixed(2);

        // biglietto bigliettoStandard.
        document.getElementById("risultatoOfferta").innerText = bigliettoStandard;
    }

    // nome e cognome
    let nome = document.getElementById("nomeCognome").value;
    document.getElementById("risultatoNome").innerText = nome


    document.getElementById("risultatoCarrozza").innerText = carrozza;
    document.getElementById("risultatoCp").innerText = CP;
    
    document.getElementById("bigliettoCompleto").style.display = "block";
}

