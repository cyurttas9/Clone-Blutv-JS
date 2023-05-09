const accordion = document.querySelectorAll('.akordiyon-item')

accordion.forEach(function(div) {

    div.onclick = function(event) {

        const p = event.target.nextElementSibling
        const spanIcon = event.target.children[1]

        p.classList.toggle('ek-yazi')

        console.log("İkon:", spanIcon)
        if(spanIcon.classList.contains('down')) {

            spanIcon.classList.remove('down')
            spanIcon.classList.add('up')
            return;
        }

        if(spanIcon.classList.contains('up')) {

            spanIcon.classList.remove('up')
            spanIcon.classList.add('down')
        }
    }
})