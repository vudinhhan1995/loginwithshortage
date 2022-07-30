$(document).ready(() =>{
    if (window.localStorage.getItem('userName') =='admin' && window.localStorage.getItem('passWord') =='admin') {
        location.replace('./welcome.html');
    }
    else{
        location.replace('./formlogin.html');
    }
})