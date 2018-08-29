$(document).ready(function(){

    function getQuote(){

        //Primero creamos arreglos con los datos que queremos

        var quotes = ["'Life is what happens to you while you’re busy making other plans.'", "'Your time is limited, so don’t waste it living someone else’s life.'", "'Life shrinks or expands in proportion to one's courage. '"];
        var authors = [" -John Lennon", " -Steve Jobs", " -Anais Nin"];

        //Ahora queremos generar un numero aleatorio referente a la posicion del arreglo

        var randomNum = Math.floor((Math.random()*quotes.length)); //Math.floor redondea el numero aleatorio que ha sido generado

        var randomQuote = quotes[randomNum];
        var randomAuthor = authors[randomNum];

        $(".frase").text(randomQuote);
        $(".author").text(randomAuthor);
    }

    $("#press").on("click", function(){
        getQuote();    
    });
  
    $("#tweet").on("click", function(){
        var tweetQuote = $(".frase").text() + " " + $(".author").text();
        window.open("https://twitter.com/intent/tweet?text=" + tweetQuote)  
    });
    

});
