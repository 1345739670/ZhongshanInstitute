$(document).ready(function(){
    $('.slickWrapper').slick({
        autoplay: true,
        // appendArrows: $('.slickWrapper'),
        // appendDots: $('.slickWrapper')
    });

    tabs($(".centerSlider .focusNavigation li"), $('.centerSlider .focusNewsList .con'));  
    tabs($(".rightColumn .focusNavigation li"), $('.rightColumn .AnnouncementAcademicList .con'));  
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
