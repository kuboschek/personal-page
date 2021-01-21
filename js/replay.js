const SEND_MSG = 'send_msg'
const START_TYPING = 'start_typing'
const LEFT = 'l'
const RIGHT = 'r'

const WPM = 140
const SPW = (60 / WPM)
const MPS = 1000
const RAND_TYPING_DELAY_FACTOR = 10

function delayGenerator(text) {
    var wordCount = text.split(" ").length
    var typingSpeed = WPM + ((Math.random() - 0.5) * RAND_TYPING_DELAY_FACTOR)

    return MPS * (SPW * wordCount)
}


const theScript = [
    {
        delay: 200,
        action: START_TYPING,
        side: RIGHT
    },
    {
        delay: 600,
        action: SEND_MSG,
        side: RIGHT,
        body: "Hey, what's up?"
    },
    {
        delay: 500,
        action: START_TYPING,
        side: RIGHT,
    },
    {
        delay: 890,
        action: SEND_MSG,
        side: RIGHT,
        body: "I just heard you were interested in web development too, is that right?"
    },
    {
        delay: 300,
        action: START_TYPING,
        side: LEFT
    },
    {
        delay: 2310,
        action: SEND_MSG,
        side: LEFT,
        body: "Hey there"
    },
    {
        delay: 999,
        action: SEND_MSG,
        side: LEFT,
        body: "You're absolutely cooorrect."
    },
    {
        delay: 200,
        action: START_TYPING,
        side: LEFT
    },
    {
        delay: 4500,
        action: SEND_MSG,
        side: LEFT,
        body: "I do love building better user experiences - and the web's got so much to give lately."
    },
    {
        delay: 300,
        action: START_TYPING,
        side: RIGHT,
    },
    {
        delay: 6500,
        action: SEND_MSG,
        side: RIGHT,
        body: "Sounds cool. Can you show me some samples of your work?"
    },
    {
        delay: 0,
    }
]

var container = null

function drawMsg(msg) {
    hideTyping(msg)
    var newDiv = document.createElement('div')
    newDiv.className = 'message'
    newDiv.className += ' ' + (msg.side == LEFT ? 'grey' : 'blue')
    newDiv.innerHTML = msg.body
    container.appendChild(newDiv)
}

function showTyping(msg) {
    var newImg = document.createElement('img')
    newImg.src = '/assets/typing-indicator.gif'

    var newDiv = document.createElement('div')
    newDiv.className += 'message typing ' + (msg.side == LEFT ? 'grey' : 'blue')
    newDiv.appendChild(newImg)

    container.appendChild(newDiv)
}

function hideTyping() {
    var typingDivs = document.getElementsByClassName('typing')
    
    Array.from(typingDivs).forEach(function(element) {
        element.parentNode.removeChild(element)
    })
}

function processMsg(index) {
    if(index < theScript.length - 1) {
        var next = theScript[index + 1]

        if(next.action == SEND_MSG) {
            var delayTime = delayGenerator(next.body)
            setTimeout(function() {processMsg(index + 1)}, delayTime)
        } else {
            setTimeout(function() {processMsg(index + 1)}, theScript[index + 1].delay)
        }
    } else {
        console.log("The End")
        return
    }

    var msg = theScript[index]

    switch (msg.action) {
        case START_TYPING:
            console.log(msg.side + " starts typing")
            showTyping(msg)
            break;

        case SEND_MSG:
            console.log(msg.side + " says " + msg.body)
            drawMsg(msg)
            break;
    
        default:
            console.error("Unknown action.")
            break;
    }
}

window.addEventListener('DOMContentLoaded', function() {
    container = document.getElementById('message-container')
    processMsg(0)
}, true)