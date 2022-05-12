function mouseIn(t) {
    let id = t.getAttribute('id')
    let div = document.getElementById(id)
    let boxInfo = document.querySelectorAll('.box-info')

    div.style.width = '140vw'
    div.style.transitionDuration = '1s'

    switch (id) {
        case 'left':
            boxInfo[0].style.top = '5%'
            boxInfo[0].style.transitionDuration = '1s'
            break;
        case 'right':
            boxInfo[1].style.top = '5%'
            boxInfo[1].style.transitionDuration = '1s'
            break;
    }
}

function mouseOut(t) {
    let id = t.getAttribute('id')
    let div = document.getElementById(id)
    let boxInfo = document.querySelectorAll('.box-info')

    div.style.width = '50vw'
    div.style.transitionDuration = '1s'

    switch (id) {
        case 'left':
            boxInfo[0].style.top = '25%'
            boxInfo[0].style.transitionDuration = '1s'
            break;
        case 'right':
            boxInfo[1].style.top = '25%'
            boxInfo[1].style.transitionDuration = '1s'
            break;
    }
}