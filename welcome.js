$(document).ready(() =>{
    if(window.localStorage.getItem('userName') =='admin' && window.localStorage.getItem('passWord') =='admin'){
    $('#logout').click( () => {
        window.localStorage.removeItem('userName');
        window.localStorage.removeItem('passWord');
        location.replace('./index.html');
    })  
    }
      else{
            alert('Bạn chưa đăng nhập');
            location.replace('./formlogin.html')
      }    
})




