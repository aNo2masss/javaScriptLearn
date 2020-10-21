var content = $('.content');
var btns = $('.btns span');
var next = $('.next');
var prev= $('.prev');
var index = 0;

$('.prev').click(function () {
    clearInterval(timebar);
    index--;
    if (index === -1) {
        index = 3;
    }
    nextClick();
})
next.click(function () {
    clearInterval(timebar);
    index++;
    if (index === 4) {
        index = 0;
    }
    nextClick();
})
//顺时针播放图片
function nextClick() { 
    content.animate({ left: -560 * index }, 500, function () {
        btns
            .eq(index).addClass("choose")
            .siblings().removeClass("choose");
        // console.log( btns.eq(index));
    })
}
//自动轮播+控制停止
var timebar =setInterval(function () {
        index++;
    if (index === 4) {
        index = 0;
    }nextClick();
    }, 2000)
content.hover(function () {
    clearInterval(timebar)
}, function () {
    timebar = setInterval(function () {
        index++;
    if (index === 4) {
        index = 0;
    }
    nextClick();
    }, 2000)
})//触发备选元素的指定事件
btns.click(function () {
//获取索引值
clearInterval(timebar);
index =$(this).index();
nextClick();
})