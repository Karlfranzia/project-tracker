// get current time and date
let currentTime = dayjs().format('MMM D, YYYY @ hh:mm:ss a')

// select the element to display the current time and date
const timeElement = document.querySelector('#time')

// set the element's text to the current time and date
timeElement.textContent = currentTime

// update the time every second
setInterval(() => {
  currentTime = dayjs().format('MMM D, YYYY @ hh:mm:ss a')
  timeElement.textContent = currentTime
}, 1000)