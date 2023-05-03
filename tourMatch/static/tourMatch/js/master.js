$(function(){
    $(document).on("click", '.match_list_cont01, .match_list_third .match_list_cont01', function(){
        var next = $(this).parent().parent().parent().parent().next(); 
        var idx = parseInt($(this).parent().parent().parent().index()/2); 
        var idx2 = ($(this).parent().parent().parent().index())%2;
        var idx01 = $(this).parent().parent().index();
        var assigned = $(this).find('span').text()
        var p_name = $(this).find('div p').text() 

        if(next.hasClass("last_match")){
            idx02=0;
        }
    
        if($(this).hasClass("click_on")){
            $(this).removeClass("click_on")
        } else {
            if($(this).next().hasClass('click_on')){
                alert("You can choose only one player to advance.")
                $(this).next().removeClass('click_on')
            };
            $(this).addClass("click_on")
            if($(this).parent().parent().hasClass('bottom01')){
                // if parent element has bottom01 class, it will be assigned to cont2
                if(idx2 == 0){
                    // if idx2 == 0, it will be assigned to match_list class
                    next.find('.match_g01').eq(idx).find('.match_list').eq(0).find('.match_list_cont02 span').html(assigned);
                    next.find('.match_g01').eq(idx).find('.match_list').eq(0).find('.match_list_cont02 div p').html(p_name);
                } else if (idx2 == 1){
                    // if idx2 == 1, it will be assigned to match_list bottom01 class
                    next.find('.match_g01').eq(idx).find('.match_list').eq(1).find('.match_list_cont02 span').html(assigned)
                    next.find('.match_g01').eq(idx).find('.match_list').eq(1).find('.match_list_cont02 div p').html(p_name);
                }
            } else {
                // if parent element does not have bottom01 class, it will be assigned to cont1
                if(idx2 == 0){
                    // if idx2 == 0, it will be assigned to match_list class
                    next.find('.match_g01').eq(idx).find('.match_list').eq(0).find('.match_list_cont01 span').html(assigned)
                    next.find('.match_g01').eq(idx).find('.match_list').eq(0).find('.match_list_cont01 div p').html(p_name);
                } else if (idx2 == 1){
                    // if idx2 == 1, it will be assigned to match_list bottom01 class
                    next.find('.match_g01').eq(idx).find('.match_list').eq(1).find('.match_list_cont01 span').html(assigned)
                    next.find('.match_g01').eq(idx).find('.match_list').eq(1).find('.match_list_cont01 div p').html(p_name);
                }
            }
        }
    
    })
    
    $(document).on("click", '.match_list_cont02, .match_list_third .match_list_cont02', function(){
        var next = $(this).parent().parent().parent().parent().next(); // To call next round
        var idx = parseInt($(this).parent().parent().parent().index()/2); // 
        var idx2 = ($(this).parent().parent().parent().index())%2;
        var matchs = $(this).parent().parent().parent().parent();
        var idx0 = $(this).parent().parent().parent().index();
        var idx01 = $(this).parent().parent().index();
        var leng1 = $(this).parents(".round_group").find(".match_g01").length-1;
        var idx02 = 1-idx01;
        var assigned = $(this).find('span').text()
        var p_name = $(this).find('div p').text() 
        if(next.hasClass("last_match")){
            idx02=0;
        }
    
        if($(this).hasClass("click_on")){
            $(this).removeClass("click_on")
        } else {
            if($(this).prev().hasClass('click_on')){
                alert("You can choose only one player to advance.");
                $(this).prev().removeClass('click_on');
            };
            $(this).addClass("click_on")

            if($(this).parent().parent().hasClass('bottom01')){
                // if parent element has bottom01 class, it will be assigned to cont2
                if(idx2 == 0){
                    // if idx2 == 0, it will be assigned to match_list class
                    next.find('.match_g01').eq(idx).find('.match_list').eq(0).find('.match_list_cont02 span').html(assigned)
                    next.find('.match_g01').eq(idx).find('.match_list').eq(0).find('.match_list_cont02 div p').html(p_name);
                } else if (idx2 == 1){
                    // if idx2 == 1, it will be assigned to match_list bottom01 class
                    next.find('.match_g01').eq(idx).find('.match_list').eq(1).find('.match_list_cont02 span').html(assigned)
                    next.find('.match_g01').eq(idx).find('.match_list').eq(1).find('.match_list_cont02 div p').html(p_name);
                }
            } else {
                // if parent element does not have bottom01 class, it will be assigned to cont1
                if(idx2 == 0){
                    // if idx2 == 0, it will be assigned to match_list class
                    next.find('.match_g01').eq(idx).find('.match_list').eq(0).find('.match_list_cont01 span').html(assigned)
                    next.find('.match_g01').eq(idx).find('.match_list').eq(0).find('.match_list_cont01 div p').html(p_name);
                } else if (idx2 == 1){
                    // if idx2 == 1, it will be assigned to match_list bottom01 class
                    next.find('.match_g01').eq(idx).find('.match_list').eq(1).find('.match_list_cont01 span').html(assigned)
                    next.find('.match_g01').eq(idx).find('.match_list').eq(1).find('.match_list_cont01 div p').html(p_name);
                }
            }
        }
    })

    $(document).on("click", ".last_match .match_list_cont01, .last_match .match_list_cont02", function(){
        var next = $(this).parent().parent().parent().parent().next(); 
        var assigned = $(this).find('span').text()
        var p_name = $(this).find('div p').text()

        console.log(next.find(".winner p").html(p_name))
    })

    $(document).on("click", '.group_cont', function(){
        var next = $(this).parent().parent().parent().parent().next().find(".match_01")
        var groups = $(this).parent().parent().parent()
        var children = $(this).parent().children('.group_cont')
        var group_idx = $(this).parent().parent().index()
        var match_w_idx = parseInt(group_idx/2)
        var match_w_idx2 = parseInt(2*group_idx+8-(3*group_idx)/2)
        var match_r_idx = Math.abs(parseInt((group_idx-1)/2))
        var match_r_idx2 = parseInt(group_idx+8-group_idx/2)
        var p_name = $(this).find('p').text()
        var assigned = $(this).find('span').text()

        console.log(match_r_idx, match_r_idx2, match_w_idx, match_w_idx2)
        
        if ($(this).hasClass("group_winner")){
            $(this).removeClass("group_winner")
        } else if ($(this).hasClass("group_runner_up")){
            $(this).removeClass("group_winner")
            $(this).removeClass("group_runner_up")
        } else if (children.hasClass("group_winner")){
            $(this).addClass("group_runner_up")
        } else {
            $(this).addClass("group_winner")
        }

        
        // If user chooses more than two players in group stage, remove classes
        var classCounts = {};
        children.each(function(){
            var className = $(this).attr('class')
            if(className && className !== ''){
                if(classCounts[className]){
                    classCounts[className]++;
                } else {
                    classCounts[className] = 1;
                }
            }
        })
        
        var classSum = 0;

        if (typeof classCounts["group_cont group_winner"] !== 'undefined') {
            classSum += classCounts["group_cont group_winner"];
          }
          
          if (typeof classCounts["group_cont group_winner group_runner_up"] !== 'undefined') {
            classSum += classCounts["group_cont group_winner group_runner_up"];
          }
          
          if (typeof classCounts["group_cont group_runner_up"] !== 'undefined') {
            classSum += classCounts["group_cont group_runner_up"];
          }

        if(classSum > 2){
            alert("More than two players have been chosen.")
            children.removeClass("group_winner")
            children.removeClass("group_runner_up")
        }

        // Assign players into round of 32 bracket
        if(group_idx%2==0){
            // console.log(group_idx, "is even", $(this))
            if($(this).hasClass("group_winner")){
                var g_idx = Math.floor(match_w_idx/2)
                var g_mod = match_w_idx%2
                console.log("group_idx", group_idx, "g_idx", g_idx, "g_mod", g_mod)
                next.find('.match_g01').eq(g_idx).find('.match_list').eq(g_mod).find('.match_list_cont01 span').html(assigned)
                next.find('.match_g01').eq(g_idx).find('.match_list').eq(g_mod).find('.match_list_cont01 div p').html(p_name)
            }
            else if($(this).hasClass("group_runner_up")){
                var g_idx = Math.floor(match_r_idx2/2)
                var g_mod = match_r_idx2%2
                console.log("group_idx", group_idx, "g_idx", g_idx)
                next.find('.match_g01').eq(g_idx).find('.match_list').eq(g_mod).find('.match_list_cont02 span').html(assigned)
                next.find('.match_g01').eq(g_idx).find('.match_list').eq(g_mod).find('.match_list_cont02 div p').html(p_name)
            }                    
        } else if(group_idx%2==1){
            // console.log(group_idx, "is odd", $(this))
            if($(this).hasClass("group_winner")){
                var g_idx = Math.floor(match_w_idx2/2)
                var g_mod = match_w_idx2%2
                console.log("group_idx", group_idx, "g_idx", g_idx)
                next.find('.match_g01').eq(g_idx).find('.match_list').eq(g_mod).find('.match_list_cont01 span').html(assigned)
                next.find('.match_g01').eq(g_idx).find('.match_list').eq(g_mod).find('.match_list_cont01 div p').html(p_name)
            }
            else if($(this).hasClass("group_runner_up")){
                var g_idx = Math.floor(match_r_idx/2)
                var g_mod = match_r_idx%2
                console.log("group_idx", group_idx, "g_idx", g_idx)
                next.find('.match_g01').eq(g_idx).find('.match_list').eq(g_mod).find('.match_list_cont02 span').html(assigned)
                next.find('.match_g01').eq(g_idx).find('.match_list').eq(g_mod).find('.match_list_cont02 div p').html(p_name)
            }
        }

    })

})