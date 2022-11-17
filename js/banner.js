var imgArray = ['tbd', 'tbd', 'tbd']
var curIndex = 0
var imgDuration = 5000

function slideShow() {
    document.getElementById('banner').src = imgArray[curIndex]
    curIndex++
    if (curIndex == imgArray.length) {
        curIndex = 0
    }
    setTimeout('slideShow()', imgDuration)
}
slideShow()