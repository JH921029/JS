//페이지가 시작되면 팝업창을 띄워줍니다.
//사용자가 오늘하루 이창을 열지않기를 클릭하면 쿠키를 생성하고, 
//쿠키가 있다면 다음 접속시에는 팝업창을 뛰우지 않으면됩니다.
var cookieAdd = document.getElementById('cookieAdd');
cookieAdd.onclick = addCookie;


function addCookie() {
    
    var name = 'bbb';
    var value = 'bbb';
    
    //만료시간
    var date = new Date();
    date.setDate(date.getDate()+1)
    var cookie = "";
    cookie += name + "=" + value + "; ";
    cookie += 'expires=' + date.toUTCString() + "; path=/";
    
    document.cookie = cookie;//쿠키생성

    window.close();
}
