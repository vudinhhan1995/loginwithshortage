$(document).ready(() =>{
    if(window.localStorage.getItem('userName') =='admin@admin.com' && window.localStorage.getItem('passWord') =='admin'){
    $('#logout').click( () => {
        window.localStorage.removeItem('userName');
        window.localStorage.removeItem('passWord');
        location.replace('./formlogin.html');
    })  
    }
      else{
        // chuyen toi trang login
        location.replace('./login.html');
        alert('bạn chưa đăng nhập');
         
      }    
})




