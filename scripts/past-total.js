const part1=document.querySelector('.part1')
const hint1=document.querySelector('.hint1')
const part2=document.querySelector('.part2')
const hint2=document.querySelector('.hint2')
const part3=document.querySelector('.part3')
const hint3=document.querySelector('.hint3')
part1.addEventListener('mouseover',()=>{
    hint1.style.opacity='1'
})
part1.addEventListener('mouseout',()=>{
    // hint1.style.opacity='0'
})
part2.addEventListener('mouseover',()=>{
    hint2.style.opacity='1'
})
part2.addEventListener('mouseout',()=>{
    hint2.style.opacity='0'
})
part3.addEventListener('mouseover',()=>{
    hint3.style.opacity='1'
})
part3.addEventListener('mouseout',()=>{
    hint3.style.opacity='0'
})

const info=document.querySelector('.info')
const info2=document.querySelector('.info2')
const dots=document.querySelectorAll('.dot')
let data= {
    Year: [1992,1993,1994,1995,1996,1997,1998,1999,2000,2001],
    Total:[342,328,340,323,350,550,397,423,502,427], 
    Artists: [125,128,140,150,142,190,168,186,213,210],
    Artworks:[48,46,48,21,35,33,44,73,60,29],
    Articles:[26,17,19,14,19,19,25,30,42,37],
    Archives:[48,17,37,40,21,42,42,40,22,44],
    Pages:[13,12,14,null,14,15,16,12,19,21],
}
dots.forEach((dot, index) => {
    dot.addEventListener('mouseover',() => {
        const year=data.Year[index]
        const total =data.Total[index]
        const archives =data.Archives[index]
        const articles =data.Articles[index]
        const artists =data.Artists[index]
        const artworks =data.Artworks[index]
        const pages=data.Pages[index]
        info.innerHTML =`In <span class="numbers">${year}</span>, there were <span class="numbers">${total}</span> results in total.`
        info2.innerHTML=`There were <span class="numbers">${artists}</span> artists, <span class="numbers">${artworks}</span> artworks, <span class="numbers">${articles}</span> articles, 
        <span class="numbers">${archives}</span> archieves, and <span class="numbers">${pages}</span> pages in the year.`
        info.style.opacity='1'
        info2.style.opacity='1'
        info.style.transition='opacity 0.8s ease-in-out'
        info2.style.transition='opacity 0.8s ease-in-out'
    })

    dot.addEventListener('mouseout',() => {
        
    })
})