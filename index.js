const passKeyElement = document.getElementById('passkey');
const loginButtonElement = document.getElementById('log-btn');
const logbtn = document.querySelector('.js-log-button');
const msgElement = document.getElementById('js-access-msg');

const grantedHtml = '<div style="color:rgb(0, 255, 0); margin-top:5px;" >access granted !</div>';
const deniedHtml = '<div style="color:red; margin-top:5px;">access denied !</div>';

loginButtonElement.addEventListener('click', ()=>{
    
    if(passKeyElement.value === '69') {
        // loginButtonElement.innerHTML = 'access granted!';
        msgElement.innerHTML = grantedHtml;
                
    }else{
        // loginButtonElement.innerHTML = 'access denied!';
        msgElement.innerHTML = deniedHtml;
        
    }
    
});

