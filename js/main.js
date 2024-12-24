'use strict'

function onBallClick(elBall) {
    var size = parseInt(elBall.style.width) || 100
    size += getRandomInt(20, 61)
    if (size >= 400) size = 100
    
    elBall.style.width = elBall.style.height = size + 'px'
    elBall.innerText = size

    elBall.style.background = getRandomColor()
}