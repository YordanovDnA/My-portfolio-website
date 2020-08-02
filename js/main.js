$(document).ready(function(){
    $(".zoom").delay(3000).animate({fontSize: '23px', fontSize: '40px'}, "slow");
    $(".zoom").animate({fontSize: '28px'}, "slow");
    $(".zoom").animate({fontSize: '28px', fontSize: '35px'}, "slow");
    $(".zoom").animate({fontSize: '28px'}, "slow");
    $(".d1").fadeIn(1000);
    $(".year2016").fadeIn(5000);
    $(".skills2016").fadeIn(5000);
    $(".d2").delay(4000).fadeIn(1000);
    $(".year2018").delay(4000).fadeIn(5000);
    $(".skills2018").delay(4000).fadeIn(5000);
    $(".d3").delay(8000).fadeIn(1000);
    $(".year2019").delay(8000).fadeIn(5000);
    $(".skills2019").delay(8000).fadeIn(5000);
    $(".d4").delay(11000).fadeIn(1000);
    $(".year2020").delay(11000).fadeIn(5000);
    $(".skills2020").delay(11000).fadeIn(5000);
    $("#Projects-button").click(function(){
        $(".display-none").toggle("slow");
    });
    $(".flip-card-front").click(function(){
        $(this).closest(".flip-card-inner").css("transform", "rotateY(180deg)");
        $(this).closest(".flip-card-inner").find(".flip-card-back").click(function(){
            $(this).closest(".flip-card-inner").removeAttr("style");
        })
    });
    $("#submitButton").hover(function(){
        $(this).attr("value", "GO!");
    }, function(){
        $(this).attr("value", "Send!");
    });

    $(".socialIcons").hover(function(){
        $(this).css("color", "white")
    }, function(){
        $(this).css("color", "black")
    });

    $(".Projects-inner").click(function(){
        $(this).closest(".Projects").find(".modal").fadeIn();
        $(this).closest(".Projects").find(".modal").attr("id", "modal-close");
        $(this).closest(".Projects").find("#modal-close").click(function(){
            $(this).fadeOut();
            $(this).removeAttr("id");
        });
    });

    $(".close").click(function(){
        $(".modal").fadeOut();
    });

    
});
// $(window).load(function(){
//     // PAGE IS FULLY LOADED  
//     // FADE OUT YOUR OVERLAYING DIV
//     $('.overlay').fadeOut();
// });


