'use strict'

function onBallClick(elBall) {
    var size = parseInt(elBall.style.width) || 100
    size  += 50

    elBall.style.width = elBall.style.height = size + 'px'
    elBall.innerText = size
}