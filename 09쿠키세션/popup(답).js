function addCookie(name, value){
    //시간설정
    var date = new Date();
    date.setDate(date.getDate()+1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0); //00시에 초기화 해야해서 0임
     
    //쿠키 생성
    var cookie = "";
    cookie += name + "=" +value+"; ";
    cookie += "expires=" + date.toUTCString() + "; path=/";    
    document.cookie = cookie;
}
//쿠키 가져오기
function getCookie(name){

    var arr = document.cookie.split('; ');

    if(arr.length != 0 ){

        for(var i = 0 ; i < arr.length; i++){
            if(arr[i].indexOf(name + "=") != -1){
                return true;//쿠키가 있다

            }
        }
    }

}