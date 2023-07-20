function remenberMe(){
    let salvarObject = {email: document.querySelector('#userEmail').value, password: document.querySelector('#password').value}
    const dataExpiracao = new Date('9999-12-31').toUTCString()
    const cookie = `inputs=${encodeURIComponent(JSON.stringify(salvarObject))}; expires=${dataExpiracao}; path=/`
    document.cookie = cookie
}

function getObjectFromCookie(nome) {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(nome + '=')) {
        const objetoCodificado = cookie.substring(nome.length + 1)
        const objetoDecodificado = decodeURIComponent(objetoCodificado)
        return JSON.parse(objetoDecodificado)
      }
    }
    return null
  }

function deleteCookie() {
    document.cookie = `inputs=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}


  

document.addEventListener('DOMContentLoaded', () => {
    
    const objetoSalvo = getObjectFromCookie('inputs')
    if (objetoSalvo){
    
        document.querySelector("#remember").checked = true
        document.querySelector("#password").value = objetoSalvo.password
        document.querySelector("#userEmail").value = objetoSalvo.email
    }
})

document.querySelector("#remember").addEventListener('change', function() {
    if (document.querySelector("#remember").checked) {
      remenberMe()
    } else {
      deleteCookie()
    }})


var modal = document.getElementById("myModal")
var openModalBtn = document.getElementById("openModalBtn")
var closeModalBtn = document.getElementsByClassName("close")[0]
var modalForm = document.querySelector(".inputsModal")

openModalBtn.addEventListener("click", function() {
        
    modal.style.display = "block"
});

closeModalBtn
    

    console.log(closeModalBtn)
    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none"
    })


window.addEventListener("click", function(event) {
    if (event.target == modal) {
    modal.style.display = "none"
    }
});



modalForm.addEventListener("submit", function(event) {
    event.preventDefault() // Impede o envio do formulário (recarregar a página)

    // Lógica de validação e processamento do formulário aqui
    // Acesse os campos usando modalForm.campo1.value, modalForm.campo2.value, etc.

    // Exemplo de validação simples
    if (modalForm.value === "") {
        console.log('teste')
        alert("Preencha todos os campos!")
        } else {
        console.log('teste5')
        alert("Formulário enviado com sucesso!")
        modal.style.display = "none"
        }
    })

    



