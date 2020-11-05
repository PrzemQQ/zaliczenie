new Splide( '.splide' ).mount();

var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ] ).mount();
}

function ramka() {
    haslo = document.querySelector("#pass").value;
    console.log(haslo);
    if (haslo == 1234){
        alert("Witamy na podstronie");
        var audio = new Audio('./zdj/dz.ogg');
        audio.play();
      }
   
    else {
        alert("podano złe hasło spróbuj ponownie, strona zostanie przeładowana!");
        window.location.reload(true);
    }
    
}

function smaller(){
   var x =  document.querySelector("#all");
   x.style.fontSize = "80%";
}
function bigger(){
    var x =  document.querySelector("#all");
    x.style.fontSize = "105%";
 }
 function contrast(){
    var x =  document.querySelector("#all");
    if (x.style.color == "yellow"){
        x.style.backgroundColor = "transparent";
        x.style.color = "white";
    }
    else {
        x.style.backgroundColor = "black";
        x.style.color = "yellow";
    }
    
 }