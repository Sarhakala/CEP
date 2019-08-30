let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let form = document.querySelector("#form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let dados = {
        nome: nome.value,
        email:email.value,
        senha:senha.value
    }

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados) 
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        window.alert("Cadastro feito com sucesso!")
        
    })
    
    window.location.href="index.html";
})
