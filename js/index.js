$(function () {
    //花瓣雨
    //var arr=[];
    //var clientW=document.documentElement.clientWidth;
    //var clientH=document.documentElement.clientHeight;
    //var welcome=document.getElementsByClassName("welcome")[0];
    //for(var i=0;i<80;i++){
    //    var div=document.createElement("div");
    //    var left=10+(clientW-20)*Math.random();
    //    var time=10*Math.random();
    //    div.setAttribute("class","huaban");
    //    div.style.cssText="left:"+left+"px;transition:top 5s linear "+time+"s";
    //    welcome.appendChild(div);
    //    arr.push(div);
    //}
    //
    //var huabanyu= setInterval(function(){
    //    for(var i=0;i<arr.length;i++){
    //        arr[i].style.top=clientH+"px";
    //        arr[i].addEventListener("webkitTransitionEnd",function(){
    //            //  快速返回
    //            this.style.transition="none";
    //            this.style.top=-30+"px";
    //            var that=this;
    //            // 再次落下
    //            setTimeout(function(){
    //                var time=10*Math.random();
    //                that.style.transition="top 5s linear "+time+"s";
    //                that.style.top=clientH+"px";
    //            },100);
    //
    //        },false);
    //    }
    //},1000);

////  welcome=====向上
//    var speed=10;
//    var t ;
//    var move=function(){
//        if($(".xiangshang").position().top-speed<380){
//            $(".xiangshang").css({top:500});
//        }
//        $(".xiangshang").css({top:$(".xiangshang").position().top-speed});
//    }
//    setTimeout(function(){
//       t=setInterval(move,40);
//    },1000);
//
//    $(".xiangshang").hover(function(){
//       clearInterval(t);
//    },function(){
//        t= setInterval(move,40);
//    })
//
//    $(".xiangshang").click(function(){
//        $(".welcome").removeAttr("data-ani");
//        $(".welcome").attr("data-ani","animate-slideup");
//        $("#body").css({overflow:"visible"});
//        clearInterval(huabanyu);
//    })


    //窗口变化
    $(window).resize(function () {
        var clientW = $(window).width();
        if (clientW < 800) {
            $(".header1").css({display: "none"});
            $(".header2").css({display: "block"});
            $(".zhaoda").css({display: "none"});
            $(".zhaoxiao").css({display: "block"});
        } else {
            $(".header1").css({display: "block"});
            $(".header2").css({display: "none"});
            $(".zhaoda").css({display: "block"});
            $(".zhaoxiao").css({display: "none"});
        }
    })
    $(window).resize();


//    返回顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000) {
            $(".top").fadeIn(500);
        } else {
            $(".top").fadeOut(500);
        }
    })
    $(".top").click(function () {
        $({top: $(window).scrollTop()}).animate(
            {top: 0},
            {
                duration: 700,
                step: function () {
                    $(window).scrollTop(this.top);
                }
            }
        )
    })

//    header 大
    $(".tiao").click(function () {
        var i = $(".tiao").index(this);
        var newtop = $($('.floor')[i]).offset().top - 50;
        $({top: $(window).scrollTop()}).animate(
            {top: newtop},
            {
                duration: 700,
                step: function () {
                    $(window).scrollTop(this.top);
                }
            }
        )
    })
//    header 小
    $(".tiao1").click(function () {
        var i = $(".tiao1").index(this);
        var newtop = $($('.floor1')[i]).offset().top - 50;
        $({top: $(window).scrollTop()}).animate(
            {top: newtop},
            {
                duration: 700,
                step: function () {
                    $(window).scrollTop(this.top);
                }
            }
        )
    })

//点击汉堡包
    var flag = true;
    $("div[data-role='hanbao']").click(function () {
        if (flag) {
            $(".header2-left").animate({
                width: "68%",
            }, 500, "linear")
            $(".header2-right").attr("data-ani", "animate-sliderleft").css({display: "block"});
            flag = false;
        } else {
            $(".header2-left").animate({
                width: "96%",
            }, 500, "linear")
            $(".header2-right").attr("data-ani", "animate-slidelright");
            setTimeout(function () {
                $(".header2-right").css({display: "none"});
            }, 500)
            flag = true;
        }

    })

//    点击向下
    var flag1 = true;
    $("span[data-role='xiangxia']").click(function () {
        if (flag1) {
            $(".info").css({zIndex: "0"});
            $(".xia2").css({transform: "rotateX(0deg)"});
            setTimeout(function () {
                $(".xia1").css({display: "block"});
            }, 800);
            flag1 = false;
        } else {
            $(".xia1").css({display: "none"});
            setTimeout(function () {
                $(".xia2").css({transform: "rotateX(-93deg)"});
            }, 200);
            setTimeout(function () {
                $(".info").css({zIndex: "200"});
            }, 800);

            flag1 = true;
        }
    })


//    banner
    var index = 2;
    setInterval(function () {
        index--;
        if (index == -1) {
            index = 2;
        }
        $(".banner").attr("data-ani", "animate-fadeout");
        $(".banner").eq(index).attr("data-ani", "animate-fadein");
    }, 3000);

    $(".hellow").hover(function () {
        $(".self").finish();
        $(this).removeAttr("data-ani");
        $(".self").slideDown(800);
    }, function () {
        $(".self").slideUp(800);
        setTimeout(function () {
            $(".hellow").attr("data-ani", "animate-rotatex");
        }, 1200);

    })


//    小轮播
    var chang = $(".imgs");
    chang.html(chang.html() + chang.html());
    var item = $(".item");
    chang.css({width: ($($(".item")[0]).width() + 2) * item.length});
    //移动速度
    var speed = 2;
    //鼠标移开
    function move1() {
        if (chang.position().left < -chang.width() / 2) {
            chang.css({left: "0px"});
        }
        chang.css({left: chang.position().left - speed + "px"});
    }

    //定时器  控制移动的时间
    var timer = setInterval(move1, 30);
    //鼠标移入
    $(".hengimg").hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(move1, 30);
    })


//    照片墙
    var imgindex;
    var imgarr = ["icons1.png", "icons3.png", "icons2.png", "ai4.png", "shou.png", "ai3.png", "maike.png", "1.jpg"];
    $(".zhezhao1").hover(function () {
        $(".texian").removeClass("back-cover");
        imgindex = $(".zhezhao1").index(this);
        $(this).finish();
        $(this).animate({opacity: 0}, 300);
        console.log(imgindex, imgarr[index]);
        $(".texian").css({
            backgroundImage: "url(images/" + imgarr[imgindex] + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        });
    }, function () {
        $(this).animate({opacity: 1}, 300);
    })

//游戏
    var youxiindex;
    $(".imgyouxi").hover(function (e) {
        youxiindex = $(".imgyouxi").index(this);
        $(this).addClass("fangda");
        $(".yuanzhao").eq(youxiindex).addClass("smallcir");

    }, function (e) {
        $(this).removeClass("fangda");
        $(".yuanzhao").removeClass("smallcir");
    })

//换一批
    var huanda = 1, huanzhong = 1, huanxiao = 0;
    $(window).resize(function () {
        var clientW = $(window).width();
        if (clientW > 1200) {//大屏
            $(".youda").css({display: "block"});
            $(".youzhong").css({display: "none"});
            $(".youxiao").css({display: "none"});
            $(".huan").css({display: "none"});
            $(".hda").css({display: "block"});
        } else if (clientW <= 1200 && clientW >= 800) {//中屏
            $(".youda").css({display: "none"});
            $(".youzhong").css({display: "block"});
            $(".youxiao").css({display: "none"});

            $(".huan").css({display: "none"});
            $(".hzhong").css({display: "block"});
        } else {
            $(".youda").css({display: "none"});
            $(".youzhong").css({display: "none"});
            $(".youxiao").css({display: "block"});
            $(".huan").css({display: "none"});
            $(".hxiao").css({display: "none"});
        }
    })
    $(window).resize();

//大屏的时候切换项目
    $(".hda").click(function () {
        $(".youxida").finish();
        $(".youxida").fadeOut(1000);
        $(".youxida").eq(huanda).fadeIn(1000);
        huanda++;
        if (huanda == $(".youxida").length) {
            huanda = 0;
        }
    })

    //中屏的时候切换项目
    $(".hzhong").click(function () {
        $(".youxizhong").finish();
        $(".youxizhong").fadeOut(1000);
        $(".youxizhong").eq(huanzhong).fadeIn(1000);
        huanzhong++;
        if (huanzhong == $(".youxizhong").length) {
            huanzhong = 0;
        }
    })

    //小屏的时候切换项目
    $(".xiangyou").click(function () {
        huanxiao++;
        if (huanxiao == $(".youxixiao").length) {
            huanxiao = 0;
        }
        $(".youxixiao").finish();
        $(".youxixiao").fadeOut(1000);
        $(".youxixiao").eq(huanxiao).fadeIn(1000);

    })
    $(".xiangzuo").click(function () {
        huanxiao--;
        if (huanxiao == -1) {
            huanxiao = $(".youxixiao").length - 1;
        }
        $(".youxixiao").finish();
        $(".youxixiao").fadeOut(1000);
        $(".youxixiao").eq(huanxiao).fadeIn(1000);
    })
})