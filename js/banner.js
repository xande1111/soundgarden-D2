var imgArray = ['img/cbjr.jpg', 'img/plphia.png', 'img/racanegra.jpg']
var curIndex = 0
var imgDuration = 2500

function slideShow() {
    document.getElementById('banner').src = imgArray[curIndex]
    curIndex++
    if (curIndex == imgArray.length) {
        curIndex = 0
    }
    setTimeout('slideShow()', imgDuration)
}
slideShow()