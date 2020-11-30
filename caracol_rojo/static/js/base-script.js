$(document).ready(function() {
    $('.sidenav').sidenav();
    $("#search").focus(function(){
        $(".label-icon").css("display", "none");
    });
    $("#search").blur(function(){
        $(".label-icon").css("display", "initial");
    });
    $("#mensaje").focus( () => {
        $("#mensaje").css("visibility", "hidden");
    });
})