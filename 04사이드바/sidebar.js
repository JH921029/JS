var menuBtn = document.getElementById("menuBtn");
var sidenav = document.querySelector(".sidenav");


menuBtn.addEventListener('click', function(){
    console.log(sidenav.style.width);
    
    // var wid = sidenav.style.width;
    // if(wid === "" || wid ==='200px'){
    //     sidenav.style.width = '0px';
    // } else {
    //     sidenav.style.width = '200px';
    // }
    var wid = sidenav.style.width;
    
    console.log(window.innerWidth);
    if(windiw.innerWidth <= 767){

        if(wid===''||wid==='0px'){//모바일
            sidenav.style.width = '200px';
        } else{
            sidenav.style.width = '0px';
        }
    } else{//브라우저
        if(wid===''||wid==='200px'){
            sidenav.style.width = '0px';
        } else{
            sidenav.style.width = '200px';
        }
    }
})