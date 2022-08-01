$(document).ready(() =>{ 
    //kiểm tra điều kiện nhập vào.
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
        if(userName =='admin' && passWord =='admin'){
          //thongbao
          popup('Đăng Nhập Thành Công');
          setTimeout(() => {
               //ghi user và pass vào trong localstorage
        window.localStorage.setItem('userName', userName);
        window.localStorage.setItem('passWord', passWord);  
          //chuyen toi trang welcome
            location.replace('./index.html')
          }, 2000);
                     ; 
          }
          else{
            popup('Đăng Nhập Thất Bại');
            //thongbao
            setTimeout(() => {
              location.replace('./index.html'); 
            }, 2000);
            // chuyen toi trang login
            
          }
        }
      });
})