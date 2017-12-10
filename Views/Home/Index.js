//scripts for category and carousel
$(function () {
    //setup the cat ear effect for top header
    $('.category-carousel .category a').mouseenter(function () {
        var elem = $(this);
        var left = elem.offset().left;
        var top = elem.offset().top;
        var width = elem.width();
        var catWidth = $('img#catear').width();
        var destLeft = left + width / 2 - catWidth / 2;

        $("img#catear").css("left", destLeft).css("top", -15).fadeIn(500);
    });

    $('.category-carousel .category a').mouseleave(function () {
        $('img#catear').hide();
    });

    //setup showing products when hovering mouse on categories.
    function showProducts(cid) {
        $(".category[cid=" + cid + "]").css("background-color", "white");
        $(".category[cid=" + cid + "] a").css("color", "#87CEFA");
        $(".products[cid=" + cid + "]").show();
    }

    function hideProducts(cid) {
        $(".category[cid=" + cid + "]").css("background-color", "#e2e2e3");
        $(".category[cid=" + cid + "] a").css("color", "#000");
        $(".products[cid=" + cid + "]").hide();
    }

    $('.category').hover(function () {
        var cid = $(this).attr('cid');
        showProducts(cid);
    }, function () {
        var cid = $(this).attr('cid');
        hideProducts(cid);
    });

    //
    $('.products').mouseenter(function () {
        var cid = $(this).attr('cid');
        showProducts(cid);
    });

    $('.products').mouseleave(function () {
        var cid = $(this).attr('cid');
        hideProducts(cid);
    })
});