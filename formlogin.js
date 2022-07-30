$(document).ready(() =>{
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
            //ghi user và pass vào trong localstorage
        window.localStorage.setItem('userName', userName);
        window.localStorage.setItem('passWord', passWord);
        //kiểm tra biến ghi vào trong localstorage xem có phải là admin admin không
        if(window.localStorage.getItem('userName') =='admin' && window.localStorage.getItem('passWord') =='admin'){
            //chuyen toi trang welcome
            alert('đăng nhập thành công');
            location.replace('./welcome.html'); 
          }
          else{
            // chuyen toi trang login
            alert('username hoặc password không đúng');
            location.replace('./formlogin.html'); 
          }
        }
      });
})