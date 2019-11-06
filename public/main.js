const qs = (element) => document.querySelector(element)

let timer = 0
let interval = null

const startTimer = () => {
  if (!interval) {
    interval = setInterval(() => {
      timer++
      // console.log('heart beat', timer)
      qs('.seconds').textContent = timer
      let seconds = timer
      if (timer < 10) {
        seconds = '0' + timer.toString()
      }
      qs('.seconds').textContent = seconds
    }, 1000)
  }
}

const stopTimer = () => {
  // console.log(interval)
  clearInterval(interval)
  interval = null
}

qs('.start-button').addEventListener('click', startTimer)
qs('.stop-button').addEventListener('click', stopTimer)
