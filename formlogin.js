$(document).ready(() =>{
  if(window.localStorage.getItem('userName') =='admin@admin.com' && window.localStorage.getItem('passWord') =='admin'){
    //chuyen toi trang welcome
    alert('bạn đã đăng nhập');
    location.replace('./welcome.html');
    }
      else{
        // chuyen toi trang login
        location.replace('./index.html');
        alert('bạn chưa đăng nhập');
         
      }    
    $("#loginForm").validate({
        rules: {
          username: {
            required: true
          },
          password: {
            required: true
          }
        },
        messages: {
          username: {
            required: "   nhập user name bạn ê"
          },
          password: {
            required: "  trống pass kìa"
          }
        },
        submitHandler: function (form) { 
            //lấy user và mật khẩu từ ô input user nhập
        let userName=$('#username').val();
        let passWord=$('#password').val();
        //kiểm tra biến ghi vào trong localstorage xem có phải là admin admin không
        if(userName =='admin@admin.com' && passWord =='admin'){
                      //ghi user và pass vào trong localstorage
        window.localStorage.setItem('userName', userName);
        window.localStorage.setItem('passWord', passWord);  
          //chuyen toi trang welcome
            alert('đăng nhập thành công');
            location.replace('./welcome.html'); 
          }
          else{
            // chuyen toi trang login
            alert('username hoặc password không đúng');
            location.replace('./index.html'); 
          }
        }
      });
})