let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")

let nomeValido = false
let emailValido = false
let assuntoValido = false


function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
        
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeValido = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1){ /*o indexOf retorna dois valores. caso seja encontrado o valor é 1,e caso não seja o valor é -1 */
        txtEmail.innerHTML= "E-mail inválido."
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML= "E-mail válido"
        txtEmail.style.color = "green"
        emailValido = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length > 100) {
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        
    }else
    txtAssunto.style.display = "none"
    assuntoValido = true
}


function enviarFormulario(){
    if(nomeValido == true && emailValido == true && assuntoValido == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar.")
    }
}

function mapaZoom(){
mapa.style.width ="800px"
mapa.style.heigth = "600px"
}

function mapaNormal(){
    mapa.style.width ="400px"
    mapa.style.heigth = "250px"
}