var headerText = document.querySelector('.header_text')

var text = 'WELLCOME BACK'

for (let i=0; i< text.length; i++){
    let span = document.createElement('span')
    span.textContent = text[i]
    span.style.fontSize = '0px'
    headerText.appendChild(span)
}

var listSpan = document.querySelectorAll('.header_text span')
var index = 0
setInterval(() =>{
    listSpan[index].style.fontSize = '70px'
    index++
    if(index == listSpan.length){
        index = 0
        resetFontSize()
    }
}, 300)

const resetFontSize = () =>{
    listSpan.forEach((span) =>{
        span.style.fontSize = '0px'
    })
}