const one = () => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
   
    const  countTimer = (deadline) => {
        let deadline = new Date(deadline).getTime()
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        timerHours.textContent = hours
        timerMinutes.textContent = minutes
        timerSeconds.textContent = seconds
    }

    countTimer('19 april 2022')
}

export default one