//页面加载，logo渐入
$(function () {
    $(".yys_logo").delay(1000).animate({
        left: "50px"
    }, 1000);
    roleSlide1($(".role_1"), $(".role_2"));
    right_nav_move();
});


$(window).resize(function () {
    right_nav_move();
})

//右边导航栏定位
function right_nav_move() {
    var win_width = $(window).width(),
        oleft = $(".yellow_box").offset().left,
        owidth = $(".yellow_box").width(),
        r_box_width = win_width - oleft - owidth;
    r_box_width = Math.min(r_box_width, 707);
    r_box_width = Math.max(r_box_width, 406.5);
    $(".right_nav").css({
        left: oleft * 1 + owidth * 1 + "px",
        width: r_box_width + "px"
    });
}


//角色展示动画
function roleSlide1(img1, img2) {
    $(img1).animate({
        left: "130px",
        opacity: "1"
    }, 1500);
    $(img2).animate({
        left: "360px",
        opacity: "1"
    }, 1500);
}

function roleSlide2(img1, img2) {
    $(img1).animate({
        left: "-40px",
        opacity: "1"
    }, 1500);
    $(img2).animate({
        left: "260px",
        opacity: "1"
    }, 1500);
}



//控制顶部导航栏变色
$(window).scroll(function () {
    var flag = $(document); //判断用户是否往下拉
    var nav = $(".top_nav");
    if (flag.scrollTop() != 0) {
        //导航栏变色
        var hide_box = $(".hide");
        hide_box.removeClass("hide");
        nav.css("background", "rgba(255,255,255,0.8)");
        $(".t_nav_link li").css({
            color: "rgb(0,0,0)",
            borderRight: "1px solid #000"
        });
        $(".t_nav_link li:last").css({
            borderRight: "none"
        });


        //把阴阳师logo隐藏
        $(".yys_logo").hide("slow");
    } else {
        //导航栏隐藏
        $("#ssl").addClass("hide");
        $("#zjl").addClass("hide");
        $(".nav_left").addClass("hide");
        nav.css("background", "rgba(255,255,255,0)");
        $(".t_nav_link li").css({
            color: "rgb(255,255,255)",
            borderRight: "1px solid #fff"
        });
        $(".t_nav_link li:last").css({
            borderRight: "none"
        });


        //把阴阳师logo显示
        $(".yys_logo").show("slow");
    }

});


//导航栏的hover事件
$(".top_nav li").mouseover(function () {
    $(this).css("color", "red");
}).mouseout(function () {
    if ($(document).scrollTop() == 0) {
        $(this).css("color", "#fff");
    } else {
        $(this).css("color", "#000");
    }

});


//角色展示按钮事件
var role_num = 1; //用于判断是role1还是role2，默认为1
$(".slide_btn").click(function () {
    var box_1 = $(".main_banner .role_slide .slide_1 ");
    var box_2 = $(".main_banner .role_slide .slide_2");

    var img_lists = $(".main_banner .role_slide img");

    if (role_num == 1) {
        img_lists.eq(0).animate({
            left: "288px",
            opacity: 0
        }, 1000);

        img_lists.eq(0);

        img_lists.eq(1).animate({
            left: "205px",
            opacity: 0
        }, 1000);


        setTimeout(function () {
            box_1.addClass("hidden");
            box_2.removeClass("hidden");
            roleSlide2($(".role_3"), $(".role_4"));
        }, 1000);

        role_num = 2;
    } else {
        img_lists.eq(2).animate({
            left: "242px",
            opacity: 0
        }, 1000);
        img_lists.eq(3).animate({
            left: "179px",
            opacity: 0
        }, 1000);


        setTimeout(function () {
            box_2.addClass("hidden");
            box_1.removeClass("hidden");
            roleSlide1($(".role_1"), $(".role_2"));
        }, 1000);

        role_num = 1;
    }

});

//黄色盒子缩小，展开事件
$(".yellow_box .arrow").click(function () {
    var box = $(".yellow_box");
    box.animate({
        left: "1070px",
        width: "40px"
    }, 1000);
    setTimeout(function () {
        $(".small_box").css("display", "block");
        box.css("display", "none");
    }, 1000);
});

$(".small_box .tips").click(function () {
    $(".small_box").css("display", "none");
    $(".yellow_box").css("display", "block");
    $(".yellow_box").animate({
        left: "574px",
        width: "533px"
    }, 1000);
});

//右边导航栏没有下拉的hover事件
$(".link_list .odd").mouseenter(function () {
    $(this).finish();
    var oleft = $(this).position().left;
    $(this).animate({
        left: oleft * 1 + 15 + "px"
    }, 300);
});

$(".link_list .odd").mouseleave(function () {
    $(this).finish();
    var oleft = $(this).position().left;
    $(this).animate({
        left: oleft * 1 - 15 + "px"
    }, 300);
});

//右边导航栏有下拉的hover事件
var high_list = [363, 187, 187, 302, 364]; //这是下拉盒子的高度，按顺序。
var bg_lists = ["url(\"/images/index_z_5238457.png\") no-repeat -615px -1297px",
               "url(\"/images/index_z_5238457.png\") no-repeat -308px -1297px",
               "url(\"/images/index_z_5238457.png\") no-repeat -1017px -1193px",
               "url(\"/images/index_z_5238457.png\") no-repeat -330px -1040px",
               "url(\"/images/index_z_5238457.png\") no-repeat 0px -1298px"]
$(".link_list .eve").mouseenter(function () {
    var num = $(".link_list .eve").index($(this)),
        ohight = high_list[num],
        hide_box = $(this).children("div");
    bg_temp = $(this).css("background"); //将原本的背景存起来
    hide_box.css("display", "block");
    $(this).css("background", "rgba(0,0,0,0)");
    hide_box.animate({
        left: "15px",
        height: ohight
    }, 300);

});

$(".link_list .eve").mouseleave(function () {
    var This = $(this),
        num = $(".link_list .eve").index($(this)),
        ohight = $(this).height(),
        bg_temp = bg_lists[num], //用于存改变的背景
        hide_box = $(this).children("div");
    hide_box.animate({
        left: "0",
        height: ohight
    }, 300);
    setTimeout(function () {
        $(This).css("background", bg_temp);
        hide_box.css("display", "none");
    }, 300);

});


//中间的新闻轮播
$(function () {
    var oli = $(".news .news_slide .slide_img li"),
        odot = $(".news .news_slide .dot li"),
        index = 0, //当前显示照片，默认为第一张
        length = oli.length;

    //初始化
    oli.eq(index).css("left", "0");

    //点的hover事件
    odot.mouseenter(function () {
        var num = odot.index($(this));
        if (num !== index) {
            odot.eq(index).removeClass("on");
            odot.eq(num).addClass("on");
            if (num > index) {
                oli.eq(index).animate({
                    left: "-360px"
                }, 300);
                oli.eq(num).css("left", "360px");
                oli.eq(num).animate({
                    left: 0
                }, 300);
            } else {
                oli.eq(index).animate({
                    left: "360px"
                }, 300);
                oli.eq(num).css("left", "-360px");
                oli.eq(num).animate({
                    left: 0
                }, 300);
            }
            index = num;
        }
    });


    //自动播放
    autoPlay();
    var auto;

    function autoPlay() {
        auto = setInterval(function () {

            odot.eq(index).removeClass("on");
            oli.eq(index).animate({
                left: "-360px"
            }, 300);
            index = (index + 1) % length;

            odot.eq(index).addClass("on");
            oli.eq(index).css("left", "360px");
            oli.eq(index).animate({
                left: 0
            }, 300);

        }, 3000);
    }

    //当鼠标在盒子里，暂停播放
    $(".news_slide").mouseover(function () {
        clearInterval(auto);

        $(this).mouseleave(function () {
            clearInterval(auto);
            autoPlay();
        });
    });


    //新闻种类转换部分
    $(".news .news_warp .news_tpye li").mouseenter(function () {
        console.log(1);
        $(" .news_warp .news_box").stop(true, true);
        var box = $(" .news_warp .news_box"),
            n_num = $(".news .news_warp .news_tpye li").index($(this)), //当前hover的位置
            p_num = $(".news .news_warp .news_tpye li").index($(".news .show").parent()), //上一个hover的位置
            distance = box.position().left;
        $(".news .news_warp .news_tpye li").children("p").removeClass("show");
        $(this).children("p").addClass("show");

        if (n_num - p_num > 0) {
            box.animate({
                left: distance - 500 * (n_num - p_num) + "px"
            }, 300);
        } else {
            box.animate({
                left: distance + 500 * (p_num - n_num) + "px"
            }, 300);
        }


    });
    $(".news .news_warp .news_tpye li").mouseleave(function () {
        $(" .news_warp .news_box").stop(true, true);
    });

});


//式神，角色展示的部分
$(function () {
    //    式神，角色转换按钮的hover事件
    var box = $(".ss_role .ss_link");
    box.mouseenter(function () {
        $(".ss_role .ss_link").children("em").finish();
        $(this).children("em").animate({
            top: 0,
            opacity: 1
        }, 500);

        $(this).mouseleave(function () {
            if (!$(this).children("em").hasClass("show")) {
                $(this).children("em").animate({
                    top: "48px",
                    opacity: 0
                }, 500);
            }

        });
    });


    //    式神，角色转换按钮的hover事件
    $(".ss_role .ss_link").eq(0).click(function () {
        $(".ss_role .ss_link").eq(1).children("em").css({
            top: "48px",
            opacity: 0
        });
        $(".ss_role .ss_link").eq(1).children("em").removeClass("show");
        $(this).children("em").addClass("show");

        $(".ss_content .shishen").css("display", "block");
        $(".ss_content .zhujue").css("display", "none");
    });

    $(".ss_role .ss_link").eq(1).click(function () {
        $(".ss_role .ss_link").eq(0).children("em").css({
            top: "48px",
            opacity: 0
        });
        $(".ss_role .ss_link").eq(0).children("em").removeClass("show");
        $(this).children("em").addClass("show");

        $(".ss_content .shishen").css("display", "none");
        $(".ss_content .zhujue").css("display", "block");
    });



    //式神头像的切换按钮
    var l_btn = $(".ss_detail .ss_prve"),
        r_btn = $(".ss_detail .ss_next");

    //    切换左按钮
    r_btn.click(function () {
        var box = $(".ss_show_box");
        box.stop(true, true); //因为点击太快会导致出错
        var p_left = box.position().left;

        box.animate({
            left: p_left - 825 + "px"
        }, 300);

        l_btn.css("display", "block");

        //判断是否需要隐藏
        if (ss_style == "all" && p_left == -5775) {
            $(this).css("display", "none");
        }
        if (ss_style == "SSR" && p_left == 0) {
            $(this).css("display", "none");
        }
        if (ss_style == "SR" && p_left == -1650) {
            $(this).css("display", "none");
        }
        if (ss_style == "R" && p_left == -825) {
            $(this).css("display", "none");
        }
    });

    //    切换右按钮
    l_btn.click(function () {
        var box = $(".ss_show_box");
        box.stop(true, true); //因为点击太快会导致出错
        var p_left = box.position().left;

        if (box.position().left == -825) {
            $(this).css("display", "none");
        }
        box.animate({
            left: p_left + 825 + "px"
        }, 300);

        r_btn.css("display", "block");
    });



    //式神展示，默认为全部展示
    var ss_box = $(".ss_detail .ss_show_box"),
        ss_style = "all", //记录正在展示的模式
        ss_num = ss_list.length; //所有式神的个数
    show_all();

    //展示全部
    function show_all() {
        l_btn.css("display", "none"); //把左边的按钮去掉
        ss_box.html(" "); //先清除原本的内容
        ss_box.css("left", '0'); //清楚定位
        ss_style = "all"; //将模式变为全部展示
        var index = 0; //记录展示的个数
        for (var i = 0; i < ss_num / 2; i++) {
            var ss_ul = $("<ul></ul>");
            for (var j = 0; j < 2; j += 2) {
                //一个ul放入两个式神信息，需要判断是否j+1是否存在
                var li_1 = creatLi(ss_list[index]);
                ss_ul.append(li_1);
                index += 1;
                if (ss_list[index] != undefined) {
                    var li_2 = creatLi(ss_list[index]);
                    ss_ul.append(li_2);
                    index += 1;
                }
            }
            if (i + 1 % 6 == 1) {
                ss_ul.addClass("one");
            }
            if (i % 6 == 5 && i != 0) {
                ss_ul.addClass("six");
            }
            //最后把一个ul添加到ss_show_box中
            ss_box.append(ss_ul);
        }
    }

    //只展示某个等级的式神
    function show_other(level) {
        l_btn.css("display", "none"); //把左边的按钮去掉
        if (level == "N") {
            r_btn.css("display", "none"); //把右边的按钮去掉
        } else {
            r_btn.css("display", "block"); //把右边的按钮去掉
        }
        ss_box.html(" "); //先清除原本的内容
        ss_box.css("left", '0'); //清楚定位
        ss_style = level; //将模式变为全部展示
        var index = 0; //记录展示的个数
        var ssr_list = [];
        //先将ssr的创建一个数组
        for (var i = 0; i < ss_num; i++) {
            if (ss_list[i]["level"] === level) {
                var newLi = creatLi(ss_list[i]);
                ssr_list.push(newLi);
            }
        }

        for (var j = 0; j < ssr_list.length; j += 2) {
            var ss_ul = $("<ul></ul>");
            if (j == 0) {
                ss_ul.addClass("one");
            }
            if (j % 12 == 10) {
                ss_ul.addClass("six");
            }
            ss_ul.append(ssr_list[j]);
            if (ssr_list[j + 1] != undefined) {
                ss_ul.append(ssr_list[j + 1]);
            }
            ss_box.append(ss_ul);
        }
    };

    //式神分类按钮
    $(".shishen_type").click(function (e) {
        var type = $(e.target).html()
        if (e.target.nodeName == "SPAN") {
            $(".shishen_type").children("span").removeClass("choose");
            $(e.target).addClass("choose");
            if ($(e.target).html() == "全部") {
                show_all();
            } else {
                show_other(type);
            }
        }
    });



    //创建式神头像方法
    function creatLi(json) {
        var ss_li = $("<li></li>"),
            ss_a = $("<a></a>");
        ss_a.prop({
            target: "_blank",
            href: json["linkTo"]
        });
        ss_li.append(ss_a);
        var ss_name = $("<span class=\"ss_box\"><span class=\"ss_name\">" + json["name"] + "</span></span>"),
            ss_img = $("<img>");
        ss_li.append(ss_name);
        ss_img.prop("src", json["src"]);
        ss_li.append(ss_img);

        return ss_li;
    };


    //角色更换
    $(".zj_choose li").click(function () {
        $(".zj_choose li").removeClass("on");
        $(this).addClass("on");
        var zj_box = $(".zj_detail");
        var num = $(".zj_choose li").index($(this));
        $(".zj_detail>div").css("display", "none");
        $(".zj_detail>div").eq(num).css("display", "block");
    });
});


//搜索按钮的点击事件
$(".search").click(function () {
    var box = $(".alert_win"); //隐藏的提示框
    var inp = $(".ss_quertion input");
    if (inp.val() == "") {
        box.css("display", "block");
    } else {
        var src = "http://so.yys.163.com/search?qs=" + inp.val();
        window.open(src);
        inp.val("");

    }
});

//隐藏的提示框关闭按钮
$(".alert_win .alert_close").click(function () {
    $(".alert_win").css("display", "none");
});




$(function () {
    var box = $(".t_slide");

    var flag = false; //控制轮播,false为第一张，true为第二张
    autoPlay();
    var auto;

    function autoPlay() {

        var num = 0;
        auto = setInterval(function () {
            num = (flag == false) ? 0 : -368;
            box.animate({
                left: num + "px"
            }, 400);
            setTimeout(function () {
                $(".tips_nav span").eq(!flag).addClass("on");
                $(".tips_nav span").eq(flag).removeClass("on");
            }, 400);

            flag = !flag;
        }, 3000);
    }

    box.mouseenter(function () {
        clearInterval(auto);
    });
    box.mouseleave(function () {
        autoPlay();
    })


    //攻略轮播nav事件
    $(".tips_nav span").mouseenter(function () {
        var num = $(".tips_nav span").index($(this));
        box.finish();
        $(".tips_nav span").removeClass("on");
        $(this).addClass("on");
        num == 0 ? flag = false : flag = true;
        num = num == 0 ? 0 : -368;
        box.animate({
            left: num + "px"
        }, 400);
    });
});


//攻略类型的切换事件
var tips_index = 0;
$(".tips_type p").mouseenter(function () {
    $(".tips_content").stop(true, true);
    var box = $(".tips_content"),
        num = $(".tips_type p").index($(this)),
        oleft = box.position().left - (num - tips_index) * 790;

    $(".tips_link em.show").removeClass("show");
    $(this).children("em").addClass("show");
    box.animate({
        left: oleft + "px"
    }, 500);
    tips_index = num;
});


//同人事件的切换事件
var cos_index = 0;
$(".cos_link").mouseenter(function () {
    $(".cos_content").stop(true, true);
    var box = $(".cos_content"),
        num = $(".cos_link").index($(this)),
        oleft = box.position().left - (num - cos_index) * 1220;
    $(".cos_type a.choose").removeClass("choose");
    $(this).addClass("choose");
    box.animate({
        left: oleft + "px"
    }, 500);
    cos_index = num;
});


//阴阳师视频播放
var video_list = ["images/video/f3582e872ee6104d99f7bdc646369061qt.mp4",
                  "images/video/b11bdd60a661d1dd5ce384a779e2158dqt.mp4",
                  "images/video/27c364bfaa0ae2162915204c82f53c9dqt.mp4"];

$(".video_left .video_link").click(function () {
    var num = $(".video_left .video_link").index($(this)),
        video_src = video_list[num],
        box = $(".play_box"),
        play_box = $(".play_wrap");

    play_box.children("video").prop("src", video_src);
    play_box.children("video").children("source").prop("src", video_src);
    box.css("display", "block");
});

$(".play_close").click(function () {
    var box = $(".play_box"),
        play_box = $(".play_wrap");
    play_box.children("video").removeProp("src");
    play_box.children("video").children("source").removeProp("src");
    box.css("display", "none");
});



//底部的hover事件

$(".door_box").mouseenter(function () {
    var text = $(".foot_title_2"), //文字，前去体验
        bar = $(".door_bar"), //拉动条
        hide_box = $(".hide_code"), //隐藏的二维码
        door = $(".door");
    text.stop(true, true);
    bar.stop(true, true);
    hide_box.stop(true, true);
    hide_box.stop(true, true);

    hide_box.animate({
        top: "20px",
        opacity: 1
    }, 500);
    bar.animate({
        top: "-20px"
    }, 500);
    text.animate({
        opacity: 0
    }, 400);
    door.animate({
        bottom: "-60px"
    }, 500);
});

$(".door_box").mouseleave(function () {
    var text = $(".foot_title_2"), //文字，前去体验
        bar = $(".door_bar"), //拉动条
        hide_box = $(".hide_code"), //隐藏的二维码
        door = $(".door");
    text.stop(true, true);
    bar.stop(true, true);
    hide_box.stop(true, true);
    hide_box.stop(true, true);
    text.animate({
        opacity: 1
    }, 400);

    bar.animate({
        top: "55px"
    }, 500);

    hide_box.animate({
        bottom: "55px",
        opacity: 0
    }, 500);

    door.animate({
        bottom: "0"
    }, 500);
});
