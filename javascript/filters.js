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

function verifyInput(){}


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