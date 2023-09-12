setInterval(taymer, 1000)

function taymer(){
    let d = new Date()
    let sec = d.getSeconds()
    let hour = d.getHours()
    let min = d.getMinutes()

    if(sec < 10){
        sec = `0${sec}`
    }

    if(hour < 10){
        hour = `0${hour}`
    }

    if(min < 10){
        min = `0${min}`
    }

    document.querySelector('.p1').innerHTML = `${hour} : ${min} : ${sec}`
}

setInterval(taymerr, 1000)

function taymerr(){
    let d = new Date()
    let sec = d.getSeconds()
    let hour = d.getHours() - 1
    let min = d.getMinutes()

    if(sec < 10){
        sec = `0${sec}`
    }

    if(hour < 10){
        hour = `0${hour}`
    }

    if(min < 10){
        min = `0${min}`
    }

    document.querySelector('.p2').innerHTML = `${hour} : ${min} : ${sec}`
}

setInterval(taymerrr, 1000)

function taymerrr(){
    let d = new Date()
    let sec = d.getSeconds()
    let hour = d.getHours() + 4
    let min = d.getMinutes() - 8

    if(sec < 10){
        sec = `0${sec}`
    }

    if(hour < 10){
        hour = `0${hour}`
    }

    if(min < 10){
        min = `0${min}`
    }

    if(hour = 24){
        hour = `00`
    }

    document.querySelector('.p3').innerHTML = `${hour} : ${min} : ${sec}`
}