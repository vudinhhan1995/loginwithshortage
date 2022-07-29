$(document).ready(function () {
  function chenformlogin(){
    //cộng chuỗi và tạo element mới
    var khoihtml = "";
    khoihtml += '<button id="logout">LOGOUT</button>';
    khoihtml += '<h1>VN EXPRESS</h1>';
    khoihtml += '<div class="2nutbam">';
    khoihtml += '<button id ="showcontent">Show Content</button>';
    khoihtml += '<button id="loadcontent">Load Content</button>';
    khoihtml += '</div>';
    khoihtml += '<textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>';
    $('body').append(khoihtml);
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
      let userName=$('#username').val();
      let passWord=$('#password').val();
     if(userName=='admin' && passWord=='admin'){
        alert('success');
        //xóa khối login
        $('#loginForm').remove();
        chenformlogin();
        $('#logout').click( () => {
            location.replace('./index.html')
        })  //end logout
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
            $('textarea').slideToggle(2000);
        })
      
      }
      else{
        location.replace('./index.html');
        alert('wrong password')
      }
    }
  });
});
