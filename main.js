    window.onscroll= function(){scrollFix()};

    var header  = document.getElementById('menu');

    var sticky = header.offsetTop;

    function scrollFix(){
        if(window.pageYOffset>sticky){
            header.classList.add("sticky");
        }
        else{
            header.classList.remove("sticky");
        }
    }