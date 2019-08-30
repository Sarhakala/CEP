let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let bairro = document.querySelector("#bairro");
let cidade = document.querySelector("#cidade");
let estado = document.querySelector("#estado");\
let ibge = document.querySelector("#ibge");
let formaddress = document.querySelector("#formaddress");

formaddress.addEventListener("submit", function(event){
    event.preventDefault();
    let dados = {
        cep: cep.value,
        rua: rua.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
        ibge:ibge.value

    }

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados) 
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        alert("Cadastro feito com sucesso!")
    })

})