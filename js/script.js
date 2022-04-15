

const getTodayDate = () => {
    const time = new Date()
    const dayTime = document.querySelector('.time-day')
    const dayWeek = document.querySelector('.time-week')
    const currentTime = document.querySelector('.time-time')

    let water 
    let weekDay
    let hours
    let minute
    let second


console.log(time.getHours());

const greet = () => {
    if (time.getHours() > 0 && time.getHours() <= 6) {
        water = dayTime.textContent = 'Доброй ночи' 
    } else if (time.getHours() > 6 && time.getHours() <= 12) {
        water = dayTime.textContent = 'Доброе утро' 
    } else if (time.getHours() > 12 && time.getHours() <= 18) {
        water = dayTime.textContent = 'Добрый день' 
    }  else if (time.getHours() > 18 && time.getHours() <= 24) {
        water = dayTime.textContent = 'Добрый вечер'
    }
}

switch (time.getDay()) {
    case 0:
        weekDay = 'Воскресенье';
        break;
    case 1:
            weekDay = 'Понедельник';
            break;
    case 2:
        weekDay = 'Вторник';
        break;
    case 3:
        weekDay = 'Среда';
        break;
    case 4:
        weekDay = 'Четверг';
        break;
    case 5:
        weekDay = 'Пятница';
        break;
    case 6:
        weekDay = 'Суббота';
        break;
}


dayWeek.textContent = 'Сегодня ' + weekDay


const zeroToNumber = () => {
    hours = dayTime.getHours()
    minutes = dayTime.getMinutes()
    seconds = dayTime.getSeconds()
    if (hours < 10) {
        hours = '0' + dayTime.getHours()
    }
    if (minute < 10) {
        minute = '0' + dayTime.getMinutes()
    }
    if (second < 10) {
        second = '0' + dayTime.getSeconds()
    }
    zeroToNumber()
}

currentTime.textContent = 'Текущее время ' + hours + ':' + minute + ':' + second
}

