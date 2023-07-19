function passwordVisibility(x){
    
    let passwordInput = document.querySelectorAll(".passwdInput")
    let eyesLook = document.querySelectorAll(".iconEyes")

    
        
    if(passwordInput[x].type ==='password'){
        passwordInput[x].type = 'text'
        eyesLook[x].classList.add('fa-eye')
        eyesLook[x].classList.remove('fa-eye-slash')
    

    }else{
        passwordInput[x].type = 'password'
        eyesLook[x].classList.add('fa-eye-slash')
        eyesLook[x].classList.remove('fa-eye')
    
    }
    

}

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




var togglePassword = document.getElementById('toggle-password')
var togglePasswordVerify = document.getElementById('toggle-passwordVerify')
togglePassword.addEventListener('click', function () {
    passwordVisibility(0)})
if(togglePasswordVerify){

    togglePasswordVerify.addEventListener('click',  function () {
        passwordVisibility(1)})
}


var video = document.getElementById('video-background')
if (video){
    video.style.display = ''
}

