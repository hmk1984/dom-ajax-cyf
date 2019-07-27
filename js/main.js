let boton;

window.onload = inicio;


function inicio(){
    realizarPeticion();
}

function realizarPeticion(){
    //https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
    let url_end_point = "https://api.github.com/users/codeyourfuture/repos";
    fetch(url_end_point)
    .then(function(response) {
        return response.json();
    })
    .then(procesarPeticion);
}

function procesarPeticion(json){
    //console.log(json);
    //Ejemplo de respuesta
    /* 0: Object { id: 75015169, node_id: "MDEwOlJlcG9zaXRvcnk3NTAxNTE2OQ==", name: "api-demo", … }
    1: Object { id: 82218620, node_id: "MDEwOlJlcG9zaXRvcnk4MjIxODYyMA==", name: "api-proxies", … }
    ​2: Object { id: 103732853, node_id: "MDEwOlJlcG9zaXRvcnkxMDM3MzI4NTM=", name: "api-workshop", … } */
    let combo_de_prueba = "<select>";
    for(i in json)
    {
        combo_de_prueba+= "<option>"+json[i].name+"</option>";
    }
    combo_de_prueba += "</select>";//Ojo no es eficiente, pero de esta forma entendemos como funciona
    respuesta.innerHTML = combo_de_prueba;
}