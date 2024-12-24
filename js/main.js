'use strict'

function onBallClick(elBall) {
    var size = parseInt(elBall.style.width) || 100
    size = size < 400 ? size + getRandomInt(20, 61) : 100

    elBall.style.width = elBall.style.height = size + 'px'
    elBall.innerText = size
}