let boton;

window.onload = inicio;


function inicio(){
    realizarPeticion();
}

function realizarPeticion(){
    //https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
    let url_end_point = "https://api.github.com/users/codeyourfuture/repos";
    fetch('http://example.com/movies.json')
    .then(function(response) {
        return response.json();
    })
    .then(procesarPeticion);
}

function procesarPeticion(json){
    console.log(json);
}