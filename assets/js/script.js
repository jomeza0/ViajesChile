$(document).ready(function(){
    //tooltip bootstrap

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $(".navbar-toggler").click(function(){
        $('#navbarNav').addClass("bg-black");
    });

    $(".nav-link").click(function(){
        $('#navbarNav').removeClass("bg-black"); 
        $('#navbarNav').collapse("hide"); 
    });

})