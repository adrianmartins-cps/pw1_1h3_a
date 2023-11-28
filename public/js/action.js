import userlogin from './moduloDados.js'

const login = document.getElementById("login")
const cadastro = document.getElementById("cadastro")

login.addEventListener("click", (e) => {
   let user = document.getElementById("usuario").value
   let senha = document.getElementById("senha").value
   let obj = {email: user, senha: senha}
   encontraUsuario(obj)
})
function encontraUsuario(value){
   if(senha === ""){
      alert("A senha nao pode estar vazia!")
   }else{
      var usuario = userlogin.find((obj) => obj.email === value.email)
      if(usuario.senha === value.senha){
        window.location.href == "127.0.0.1:5000/homeUsuario.html"
      }else{
         alert("Deu ruim! Para o email: " + value.email)
   }
   }
   
}