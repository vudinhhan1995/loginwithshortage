$(document).ready(() =>{
    if(window.localStorage.getItem('userName') =='admin' && window.localStorage.getItem('passWord') =='admin'){
        n= 0;
    $('#loadcontent').click( () =>{
        setTimeout(() =>{
          let noidungtruyenvao = 'text' + n;
          $('#textarea').append(`${noidungtruyenvao}\n`);
          n++ 
        },1000) 
        $('#loadcontent').addClass('nutmaudo');
        setTimeout(() => {
          $('#loadcontent').removeClass('nutmaudo');
        }, 1000);
    })
    
    $('#showcontent').click(() =>{
        $('textarea').slideToggle(1000);
    })
    
    $('#logout').click( () => {
        window.localStorage.removeItem('userName');
        window.localStorage.removeItem('passWord');
        location.replace('./index.html');
    })  
    }
      else{
        // chuyen toi trang login
        location.replace('./formlogin.html');
        alert('bạn chưa đăng nhập');
         
      }    
})




