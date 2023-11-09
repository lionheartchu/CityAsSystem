const timeline=document.querySelector('.timeline-selector')
const bar=document.querySelector('.bar')
timeline.addEventListener('mouseover',()=>{
    bar.style.width='60%'
})
// timeline.addEventListener('mouseout',()=>{
//     bar.style.width='95%'
// })

const bubbles = document.querySelectorAll('.bubble')
const bubble1 = bubbles[0]
const bubble2 = bubbles[1]
const bubble3 = bubbles[2]
const bubble4 = bubbles[3]
const bubble5 = bubbles[4]
const bubble6 = bubbles[5]
const bubble7 = bubbles[6]
const bubble8 = bubbles[7]
const bubble9 = bubbles[8]
const bubble10 = bubbles[9]
  bubbles.forEach(bubble => {
    bubble.addEventListener('mouseover',()=>{
      bubble.style.opacity ='0.9'
      bubble.style.transition ='opacity 1s ease-in-out'
      const verticalLine =bubble.querySelector('.vertical-line')
        if (verticalLine){
            verticalLine.style.height='8vw'
            verticalLine.style.top='-8.5vw'
            verticalLine.style.transition='height 1.2s ease-in-out,top 1.2s ease-in-out'
        }
        const verticalLine2 =bubble.querySelector('.vertical-line2')
        if (verticalLine2){
            verticalLine2.style.height='8vw'
            verticalLine2.style.top='120%'
            verticalLine2.style.transition='height 1.2s ease-in-out,top 1.2s ease-in-out'
        }
    const lineText =bubble.querySelector('.line-text')
        if (lineText){
            lineText.style.opacity='1'
            lineText.style.fontSize='1.4vw'
            lineText.style.transition='opacity 0.8s ease-in-out 0.5s,font-size 0.8s ease-in-out 1s'
        }
    const lineText2 =bubble.querySelector('.line-text2')
        if (lineText2){
            lineText2.style.opacity='1'
            lineText2.style.fontSize='1.4vw'
            lineText2.style.transition='opacity 1.2s ease-in-out 0.8s,font-size 1s ease-in-out 1.5s'
        }
        const lineText3 =bubble.querySelector('.line-text3')
        if (lineText3){
            lineText3.style.opacity='1'
            lineText3.style.fontSize='1.4vw'
            lineText3.style.transition='opacity 1.2s ease-in-out 0.8s,font-size 1s ease-in-out 1.5s'
        }
    })
    
    bubble.addEventListener('mouseout',()=>{
      bubble.style.opacity='0.65'
      const verticalLine =bubble.querySelector('.vertical-line')
        if (verticalLine){
            verticalLine.style.height='0vw'
            verticalLine.style.top='0vw'
        }
        const verticalLine2 =bubble.querySelector('.vertical-line2')
        if (verticalLine2){
            verticalLine2.style.height='0vw'
            verticalLine2.style.top='100%'
        }
        const lineText =bubble.querySelector('.line-text')
        if (lineText){
            lineText.style.opacity='0'
            lineText.style.fontSize='1.1vw'
        }
        const lineText2 =bubble.querySelector('.line-text2')
        if (lineText2){
            lineText2.style.opacity='0'
            lineText2.style.fontSize='1.1vw'
        }
        const lineText3 =bubble.querySelector('.line-text3')
        if (lineText3){
            lineText3.style.opacity='0'
            lineText3.style.fontSize='1.1vw'
        }
    })
  })

const info=document.querySelector('.info')
const info2=document.querySelector('.info2')
let years = {
    Year: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
    Quantity:[22,23,18,26,26,26,24,23,8,8], 
}
bubbles.forEach((bubble, index) => {
    bubble.addEventListener('mouseover',() => {
        const year =years.Year[index]
        const quantity =years.Quantity[index]
        info.innerHTML =`In the year of <span class="numbers">${year}</span>, there were <span class="numbers">${quantity}</span> exhibitions.`
        info.style.opacity='1'
        info2.style.opacity='1'
        info.style.transition='opacity 1s ease-in-out'
        info2.style.transition='opacity 1s ease-in-out'
    })

    bubble.addEventListener('mouseout',() => {
        info.style.opacity='0'
        
    })
})