$(document).ready(() =>{
    if(window.localStorage.getItem('userName') =='admin' && window.localStorage.getItem('passWord') =='admin'){
    $('#logout').click( () => {
        window.localStorage.removeItem('userName');
        window.localStorage.removeItem('passWord');
        location.replace('./index.html');
    })  
    }
      else{
            popup('Bạn chưa đăng nhập');
            setTimeout(() => {
        //chuyen toi trang welcome
          location.replace('./index.html')
        }, 2000);
            return;
      }    
})




