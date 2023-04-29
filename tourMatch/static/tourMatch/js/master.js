$(function(){    
    $(document).on("click", '.match_list_cont01:not(.last_match .match_list_cont01), .match_list_third .match_list_cont01', function(){
        var next = $(this).parent().parent().parent().parent().next(); // To call next round
        var idx = parseInt($(this).parent().parent().parent().index()/2); // 
        var idx2 = ($(this).parent().parent().parent().index())%2;
        var matchs = $(this).parent().parent().parent().parent();
        var idx0 = $(this).parent().parent().parent().index();
        var idx01 = $(this).parent().parent().index();
        var leng1 = $(this).parents(".round_group").find(".match_g01").length-1;
        var idx02 = 1-idx01;
        if(next.hasClass("last_match")){
            idx02=0;
        }

        if ($(this).hasClass("click_on")){
            $(this).removeClass("click_on").removeClass("w01").addClass('l01');
            $(this).parent().find('.line_sty01, .line_sty02_01, .line_sty02_02, .line_sty03, .line_sty04, .line_sty05, .line_sty_L').removeClass('on');
        }
    })

})
