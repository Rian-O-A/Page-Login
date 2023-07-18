function passwordVisibility(){
    
    let passwordInput = document.getElementById("password")
    let eyesLook = document.getElementById('toggle-password-icon')

    if(passwordInput.type ==='password'){
        passwordInput.type = 'text'
        eyesLook.classList.add('fa-eye')
        eyesLook.classList.remove('fa-eye-slash')
    

    }else{
        passwordInput.type = 'password'
        eyesLook.classList.add('fa-eye-slash')
        eyesLook.classList.remove('fa-eye')
   
    }

}


var togglePasswordIcon = document.getElementById('toggle-password-icon');
var togglePassword = document.getElementById('toggle-password');
togglePassword.addEventListener('click', passwordVisibility);



var video = document.getElementById('video-background')
video.style.display = ''