
function Prezzo(){
    let prezzoKm = 0.21;
    let km = document.getElementById("chilometri").value;
    let prezzoBiglietto = prezzoKm * km;
    
    let etàUtente = document.getElementById("età").value;
    
    if (etàUtente == "minorenne"){
        prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 20 / 100);
        document.getElementById("risultato").innerText = prezzoScontato.toFixed(2);

    } else if ( etàUtente == "over65"){
        prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 40 / 100);
        document.getElementById("risultato").innerText = prezzoScontato.toFixed(2);

    } else if ( etàUtente == "maggiorenne"){
        document.getElementById("risultato").innerText = prezzoBiglietto.toFixed(2);
    }
    
}

