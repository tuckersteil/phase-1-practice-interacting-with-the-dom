// See the timer increment every second once the page has loaded.
let countDisplay = document.getElementById('counter')
let plusBtn = document.getElementById('plus')
let minusBTN = document.getElementById('minus')
let count = 0
let intervalID;
document.addEventListener('DOMContentLoaded', () => {
    intervalID = setInterval(function(){
        count += 1;
        countDisplay.textContent = count;
    }, 1000)
})
// Manually increment and decrement the counter using the plus and minus buttons.
plusBtn.addEventListener('click', (event) => {
    event.preventDefault();
    countDisplay.textContent = count + 1
})

minusBTN.addEventListener('click', (event) => {
    event.preventDefault();
    countDisplay.textContent = count - 1
})
// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
let heart = document.getElementById('heart')
let likedNumber = document.getElementById('heartlist')

heart.addEventListener('click', (event) => {
    event.preventDefault();
    let likedNumberList = document.createElement('li')
    likedNumberList.textContent = count + ` has been liked 1 time`
    likedNumber.appendChild(likedNumberList)
})

// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
let pauseBtn = document.getElementById('pause')

pauseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    clearInterval(intervalID)
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id != "pause"){
            buttons[i].disabled = true;
            pauseBtn.textContent = "resume"
        }
    }
})


// Click the "restart" button to restart the counter and re-enable the buttons.
// Leave comments on my gameplay, such as: "Wow, what a fun game this is."

