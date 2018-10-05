$(document).ready(function(){
    // 中央轮播图
    $(".slideBox").slide({
        mainCell:".slideItems ul",
        titCell: ".dots ul",
        autoPlay: true,
        autoPage: true
    });

    // 中间媒体聚焦和焦点资讯的标签切换效果
    tabs($(".centerSlider .focusNavigation li"), $('.centerSlider .focusNewsList .con'));  
    tabs($(".rightColumn .focusNavigation li"), $('.rightColumn .AnnouncementAcademicList .con'));

    // 下拉菜单
    $(".js-hover").hover(function(){
        $(this).children("ul").slideDown();
    },function() {
        $(this).children("ul").slideUp();
    });
});
var tabs = function(tab, con) {
    con.each(function () {
        $(this).hasClass('defaultDisplay') ? $(this).show() : $(this).hide()
    })
    tab.mouseover(function(){
        var index = $(this).index();
        tab.each(function () {
            $(this).removeClass("current")
            con.hide();
        })
        con.eq(index).show();
        $(this).addClass("current")
    });
}
