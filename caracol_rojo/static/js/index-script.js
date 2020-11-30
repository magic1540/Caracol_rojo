$(document).ready(function() {
    $('select').formSelect();
    $('.carousel').carousel();
    setInterval(function(){
        $('.carousel').carousel('next');
    }, 4000);
    $('select').on("change", function(){
        var imagenes_pc = [
            ["imagenes/pc/bf1","imagenes/pc/dao","imagenes/pc/dishonored2"],
            ["imagenes/pc/dsg","imagenes/pc/fcp","imagenes/pc/gw2"],
            ["imagenes/pc/mea","imagenes/pc/prey","imagenes/pc/re2"],
            ["imagenes/pc/skyrim","imagenes/pc/tf2","imagenes/pc/wd2"]
        ];
        var imagenes_xone = [
            ["imagenes/xone/vitrina/dead-rising-3","imagenes/xone/vitrina/dead-rising-4","imagenes/xone/vitrina/extinction"],
            ["imagenes/xone/vitrina/gears5","imagenes/xone/vitrina/greed-fall","imagenes/xone/vitrina/halo-5"],
            ["imagenes/xone/vitrina/metal-gear-survive","imagenes/xone/vitrina/metro-redux","imagenes/xone/vitrina/monster-hunter-world"],
            ["imagenes/xone/vitrina/scalebound","imagenes/xone/vitrina/sea-of-thieves","imagenes/xone/vitrina/sniper3"]
        ];
        var imagenes_x360 = [
            ["imagenes/x360/bioshock","imagenes/x360/homefront","imagenes/x360/reckoning"],
            ["imagenes/x360/castlevania-los","imagenes/x360/lolipop","imagenes/x360/ride-to-hell"],
            ["imagenes/x360/castlevania-los-2","imagenes/x360/max-payne-3","imagenes/x360/saint-row-4"],
            ["imagenes/x360/dmc","imagenes/x360/payday2","imagenes/x360/sf-x-tekken"]
        ];
        var imagenes_ps4 = [
            ["imagenes/ps4/ark","imagenes/ps4/avengers","imagenes/ps4/doom"],
            ["imagenes/ps4/ff7","imagenes/ps4/fifa21","imagenes/ps4/ghost"],
            ["imagenes/ps4/kakarot","imagenes/ps4/mk11","imagenes/ps4/pes2020"],
            ["imagenes/ps4/tsubasa","imagenes/ps4/nfs","imagenes/ps4/death-stranding"]
        ];
        var imagenes_ps3 = [
            ["imagenes/ps3/ac3","imagenes/ps3/dragon-crown","imagenes/ps3/lost-planet-3"],
            ["imagenes/ps3/ac4","imagenes/ps3/dragon-dogma","imagenes/ps3/nfs-hot-pursuit"],
            ["imagenes/ps3/arkham-city","imagenes/ps3/infamous2","imagenes/ps3/re6"],
            ["imagenes/ps3/asura","imagenes/ps3/lost-planet-2","imagenes/ps3/titanes"]
        ];
        var imagenes_switch = [
            ["imagenes/switch/dead-cells","imagenes/switch/diablo3-eternal","imagenes/switch/fire-emblem"],
            ["imagenes/switch/little-nightmares","imagenes/switch/namco-museum","imagenes/switch/xenoblade"],
            ["imagenes/switch/mario-odyssey","imagenes/switch/super-bomberman","imagenes/switch/yomawari"],
            ["imagenes/switch/mario-rabbits","imagenes/switch/mario-sonic-olimpiadas","imagenes/switch/zelda"]
        ];
        var imagenes_wiiu = [
            ["imagenes/wiiu/avengers","imagenes/wiiu/minecraft-story","imagenes/wiiu/rayman-legends"],
            ["imagenes/wiiu/bayonetta","imagenes/wiiu/ninja-gaiden-3","imagenes/wiiu/project-zero"],
            ["imagenes/wiiu/darksiders-2","imagenes/wiiu/paper-mario","imagenes/wiiu/super-smash-bros"],
            ["imagenes/wiiu/lego-avengers","imagenes/wiiu/super-luigi","imagenes/wiiu/zelda-windwaken"]
        ];
        var plataforma = $("select").val();
        $(".contenido article:nth-child(2) .container:nth-child(2) img").animate({opacity: 0}, 1000);
        $(".contenido article:nth-child(2) .container:nth-child(2) img").animate({opacity: 100}, 1000);
        switch(plataforma){
            case "0":
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").css("box-shadow", "0 0 10px 4px rgb(152, 33, 171)"); 
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseover(function(){
                    $(this).css("box-shadow", "0 0 20px 8px rgb(152, 33, 171)");
                });
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseleave(function(){
                    $(this).css("box-shadow", "0 0 10px 4px rgb(152, 33, 171)");
                });
                $("#destacado1").attr("src", "/static/"+imagenes_pc[0][0]+".jpg");
                $("#destacado2").attr("src", "/static/"+imagenes_pc[0][1]+".jpg");
                $("#destacado3").attr("src", "/static/"+imagenes_pc[0][2]+".jpg");
                $("#mas-vendidos1").attr("src", "/static/"+imagenes_pc[1][0]+".jpg");
                $("#mas-vendidos2").attr("src", "/static/"+imagenes_pc[1][1]+".jpg");
                $("#mas-vendidos3").attr("src", "/static/"+imagenes_pc[1][2]+".jpg");
                $("#descuento1").attr("src", "/static/"+imagenes_pc[2][0]+".jpg");
                $("#descuento2").attr("src", "/static/"+imagenes_pc[2][1]+".jpg");
                $("#descuento3").attr("src", "/static/"+imagenes_pc[2][2]+".jpg");
                $("#lanzamiento1").attr("src", "/static/"+imagenes_pc[3][0]+".jpg");
                $("#lanzamiento2").attr("src", "/static/"+imagenes_pc[3][1]+".jpg");
                $("#lanzamiento3").attr("src", "/static/"+imagenes_pc[3][2]+".jpg");
                break;
            case "1":
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").css("box-shadow", "0 0 10px 4px green"); 
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseover(function(){
                    $(this).css("box-shadow", "0 0 20px 8px green");
                });
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseleave(function(){
                    $(this).css("box-shadow", "0 0 10px 4px green");
                });
                $("#destacado1").attr("src", "/static/"+imagenes_xone[0][0]+".jpg");
                $("#destacado2").attr("src", "/static/"+imagenes_xone[0][1]+".jpg");
                $("#destacado3").attr("src", "/static/"+imagenes_xone[0][2]+".jpg");
                $("#mas-vendidos1").attr("src", "/static/"+imagenes_xone[1][0]+".jpg");
                $("#mas-vendidos2").attr("src", "/static/"+imagenes_xone[1][1]+".jpg");
                $("#mas-vendidos3").attr("src", "/static/"+imagenes_xone[1][2]+".jpg");
                $("#descuento1").attr("src", "/static/"+imagenes_xone[2][0]+".jpg");
                $("#descuento2").attr("src", "/static/"+imagenes_xone[2][1]+".jpg");
                $("#descuento3").attr("src", "/static/"+imagenes_xone[2][2]+".jpg");
                $("#lanzamiento1").attr("src", "/static/"+imagenes_xone[3][0]+".jpg");
                $("#lanzamiento2").attr("src", "/static/"+imagenes_xone[3][1]+".jpg");
                $("#lanzamiento3").attr("src", "/static/"+imagenes_xone[3][2]+".jpg");
                break;
            case "2":
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").css("box-shadow", "0 0 10px 4px yellowgreen"); 
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseover(function(){
                    $(this).css("box-shadow", "0 0 20px 8px yellowgreen");
                });
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseleave(function(){
                    $(this).css("box-shadow", "0 0 10px 4px yellowgreen");
                });
                $("#destacado1").attr("src", "/static/"+imagenes_x360[0][0]+".jpg");
                $("#destacado2").attr("src", "/static/"+imagenes_x360[0][1]+".jpg");
                $("#destacado3").attr("src", "/static/"+imagenes_x360[0][2]+".jpg");
                $("#mas-vendidos1").attr("src", "/static/"+imagenes_x360[1][0]+".jpg");
                $("#mas-vendidos2").attr("src", "/static/"+imagenes_x360[1][1]+".jpg");
                $("#mas-vendidos3").attr("src", "/static/"+imagenes_x360[1][2]+".jpg");
                $("#descuento1").attr("src", "/static/"+imagenes_x360[2][0]+".jpg");
                $("#descuento2").attr("src", "/static/"+imagenes_x360[2][1]+".jpg");
                $("#descuento3").attr("src", "/static/"+imagenes_x360[2][2]+".jpg");
                $("#lanzamiento1").attr("src", "/static/"+imagenes_x360[3][0]+".jpg");
                $("#lanzamiento2").attr("src", "/static/"+imagenes_x360[3][1]+".jpg");
                $("#lanzamiento3").attr("src", "/static/"+imagenes_x360[3][2]+".jpg");
                break;
            case "3":
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").css("box-shadow", "0 0 10px 4px blue"); 
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseover(function(){
                    $(this).css("box-shadow", "0 0 20px 8px blue");
                });
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseleave(function(){
                    $(this).css("box-shadow", "0 0 10px 4px blue");
                });
                $("#destacado1").attr("src", "/static/"+imagenes_ps4[0][0]+".jpg");
                $("#destacado2").attr("src", "/static/"+imagenes_ps4[0][1]+".jpg");
                $("#destacado3").attr("src", "/static/"+imagenes_ps4[0][2]+".jpg");
                $("#mas-vendidos1").attr("src", "/static/"+imagenes_ps4[1][0]+".jpg");
                $("#mas-vendidos2").attr("src", "/static/"+imagenes_ps4[1][1]+".jpg");
                $("#mas-vendidos3").attr("src", "/static/"+imagenes_ps4[1][2]+".jpg");
                $("#descuento1").attr("src", "/static/"+imagenes_ps4[2][0]+".jpg");
                $("#descuento2").attr("src", "/static/"+imagenes_ps4[2][1]+".jpg");
                $("#descuento3").attr("src", "/static/"+imagenes_ps4[2][2]+".jpg");
                $("#lanzamiento1").attr("src", "/static/"+imagenes_ps4[3][0]+".jpg");
                $("#lanzamiento2").attr("src", "/static/"+imagenes_ps4[3][1]+".jpg");
                $("#lanzamiento3").attr("src", "/static/"+imagenes_ps4[3][2]+".jpg");
                break;
            case "4":
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").css("box-shadow", "0 0 10px 4px black"); 
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseover(function(){
                    $(this).css("box-shadow", "0 0 20px 8px black");
                });
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseleave(function(){
                    $(this).css("box-shadow", "0 0 10px 4px black");
                });
                $("#destacado1").attr("src", "/static/"+imagenes_ps3[0][0]+".jpg");
                $("#destacado2").attr("src", "/static/"+imagenes_ps3[0][1]+".jpg");
                $("#destacado3").attr("src", "/static/"+imagenes_ps3[0][2]+".jpg");
                $("#mas-vendidos1").attr("src", "/static/"+imagenes_ps3[1][0]+".jpg");
                $("#mas-vendidos2").attr("src", "/static/"+imagenes_ps3[1][1]+".jpg");
                $("#mas-vendidos3").attr("src", "/static/"+imagenes_ps3[1][2]+".jpg");
                $("#descuento1").attr("src", "/static/"+imagenes_ps3[2][0]+".jpg");
                $("#descuento2").attr("src", "/static/"+imagenes_ps3[2][1]+".jpg");
                $("#descuento3").attr("src", "/static/"+imagenes_ps3[2][2]+".jpg");
                $("#lanzamiento1").attr("src", "/static/"+imagenes_ps3[3][0]+".jpg");
                $("#lanzamiento2").attr("src", "/static/"+imagenes_ps3[3][1]+".jpg");
                $("#lanzamiento3").attr("src", "/static/"+imagenes_ps3[3][2]+".jpg");
                break;
            case "5":
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").css("box-shadow", "0 0 10px 4px red"); 
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseover(function(){
                    $(this).css("box-shadow", "0 0 20px 8px red");
                });
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseleave(function(){
                    $(this).css("box-shadow", "0 0 10px 4px red");
                });
                $("#destacado1").attr("src", "/static/"+imagenes_switch[0][0]+".jpg");
                $("#destacado2").attr("src", "/static/"+imagenes_switch[0][1]+".jpg");
                $("#destacado3").attr("src", "/static/"+imagenes_switch[0][2]+".jpg");
                $("#mas-vendidos1").attr("src", "/static/"+imagenes_switch[1][0]+".jpg");
                $("#mas-vendidos2").attr("src", "/static/"+imagenes_switch[1][1]+".jpg");
                $("#mas-vendidos3").attr("src", "/static/"+imagenes_switch[1][2]+".jpg");
                $("#descuento1").attr("src", "/static/"+imagenes_switch[2][0]+".jpg");
                $("#descuento2").attr("src", "/static/"+imagenes_switch[2][1]+".jpg");
                $("#descuento3").attr("src", "/static/"+imagenes_switch[2][2]+".jpg");
                $("#lanzamiento1").attr("src", "/static/"+imagenes_switch[3][0]+".jpg");
                $("#lanzamiento2").attr("src", "/static/"+imagenes_switch[3][1]+".jpg");
                $("#lanzamiento3").attr("src", "/static/"+imagenes_switch[3][2]+".jpg");
                break;
            case "6":
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").css("box-shadow", "0 0 10px 4px cadetblue"); 
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseover(function(){
                    $(this).css("box-shadow", "0 0 20px 8px cadetblue");
                });
                $(".contenido article:nth-child(2) .container:nth-child(2) .row:nth-child(1n+2) div:nth-child(1n+2) img").mouseleave(function(){
                    $(this).css("box-shadow", "0 0 10px 4px cadetblue");
                });
                $("#destacado1").attr("src", "/static/"+imagenes_wiiu[0][0]+".jpg");
                $("#destacado2").attr("src", "/static/"+imagenes_wiiu[0][1]+".jpg");
                $("#destacado3").attr("src", "/static/"+imagenes_wiiu[0][2]+".jpg");
                $("#mas-vendidos1").attr("src", "/static/"+imagenes_wiiu[1][0]+".jpg");
                $("#mas-vendidos2").attr("src", "/static/"+imagenes_wiiu[1][1]+".jpg");
                $("#mas-vendidos3").attr("src", "/static/"+imagenes_wiiu[1][2]+".jpg");
                $("#descuento1").attr("src", "/static/"+imagenes_wiiu[2][0]+".jpg");
                $("#descuento2").attr("src", "/static/"+imagenes_wiiu[2][1]+".jpg");
                $("#descuento3").attr("src", "/static/"+imagenes_wiiu[2][2]+".jpg");
                $("#lanzamiento1").attr("src", "/static/"+imagenes_wiiu[3][0]+".jpg");
                $("#lanzamiento2").attr("src", "/static/"+imagenes_wiiu[3][1]+".jpg");
                $("#lanzamiento3").attr("src", "/static/"+imagenes_wiiu[3][2]+".jpg");
                break;
        }
    });
});