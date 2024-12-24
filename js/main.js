'use strict'

var gStates
var gStateIdx

var gTimeout
var gInterval
var gIntervalCount

function onReset() {

    cancelTimedEvents()

    const elBall1 = document.querySelector('.one')
    const elBall2 = document.querySelector('.two')

    elBall1.style.width = elBall1.style.height =
        elBall2.style.width = elBall2.style.height =
        elBall1.style.background = elBall2.style.background = ''

    elBall1.innerText = elBall2.innerText = 100

    document.querySelector('body').style.background = ''

    gStates = []
    gStateIdx = -1
    addState(createBall(elBall1), createBall(elBall2), 'black')
}

function createBall(elBall) {
    const ball = {
        size: elBall.style.width || '100px',
        color: elBall.style.background
    }
    return ball
}

function addState(ball1 = null, ball2 = null, bgc = null) {
    if (!ball1) ball1 = gStates[gStateIdx].ball1
    if (!ball2) ball2 = gStates[gStateIdx].ball2
    if (!bgc) bgc = gStates[gStateIdx].bgc

    gStateIdx++

    gStates.splice(gStateIdx, gStates.length - gStateIdx + 1, { ball1, ball2, bgc })
    console.log(gStates, gStateIdx)
}

function onBallClick(elBall, maxDiameter) {
    changeSizeRandom(elBall, maxDiameter)

    elBall.style.background = getRandomColor()

    if (elBall.classList.contains('.one')) addState(createBall(elBall))
    else addState(null, createBall(elBall))
}

function changeSizeRandom(elBall, edgeCase, isReduce = false) {
    var size = parseInt(elBall.style.width) || 100
    size += getRandomInt(20, 61) * (isReduce ? -1 : 1)

    if ((size >= edgeCase && !isReduce) || (size <= edgeCase && isReduce)) size = 100

    elBall.style.width = elBall.style.height = size + 'px'
    elBall.innerText = size
}

function onBallSwap() {
    const elBall1 = document.querySelector('.one')
    const elBall2 = document.querySelector('.two')

    swapElStyle(elBall1, elBall2, 'background')

    swapElStyle(elBall1, elBall2, 'width')
    swapElStyle(elBall1, elBall2, 'height')

    elBall1.innerText = parseInt(elBall1.style.width)
    elBall2.innerText = parseInt(elBall2.style.width)

    addState(createBall(elBall1), createBall(elBall2))
}

function onShrink() {
    const elBall1 = document.querySelector('.one')
    const elBall2 = document.querySelector('.two')
    
    changeSizeRandom(elBall1, 100, true)
    changeSizeRandom(elBall2, 100, true)
    
    addState(createBall(elBall1), createBall(elBall2))
}

function onRandomBackground() {
    const bgc = document.querySelector('body').style.background = getRandomColor()
    addState(null, null, bgc)
}

function hoverTimer() {
    gIntervalCount = 0
    gTimeout = setTimeout(() => gInterval = setInterval(activateBalls, 2000), 2000)
}

function activateBalls() {
    onBallClick(document.querySelector('.one'), 400)
    onBallClick(document.querySelector('.two'), 555)
    setTimeout(onBallSwap, 100)
    onShrink()

    gIntervalCount++
    if (gIntervalCount === 10) cancelTimedEvents()
}

function cancelTimedEvents() {
    clearTimeout(gTimeout)
    clearInterval(gInterval)
}