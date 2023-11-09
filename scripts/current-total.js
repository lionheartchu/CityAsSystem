const ex1=document.querySelector('.container1')
const ex2=document.querySelector('.container2')
const ex3=document.querySelector('.container3')
const t1=document.querySelector('.t1')
const t2=document.querySelector('.t2')
const t3=document.querySelector('.t3')
const img1=document.querySelector('.img1')
const img2=document.querySelector('.img2')
const img3=document.querySelector('.img3')

ex1.addEventListener('mouseover',()=>{
    t2.style.opacity='0.4'
    img2.style.opacity='0.4'
    t3.style.opacity='0.4'
    img3.style.opacity='0.4'
})
ex1.addEventListener('mouseout',()=>{
    t2.style.opacity='1'
    img2.style.opacity='1'
    t3.style.opacity='1'
    img3.style.opacity='1'
})
ex2.addEventListener('mouseover',()=>{
    t1.style.opacity='0.4'
    img1.style.opacity='0.4'
    t3.style.opacity='0.4'
    img3.style.opacity='0.4'
})
ex2.addEventListener('mouseout',()=>{
    t1.style.opacity='1'
    img1.style.opacity='1'
    t3.style.opacity='1'
    img3.style.opacity='1'
})
ex3.addEventListener('mouseover',()=>{
    t1.style.opacity='0.4'
    img1.style.opacity='0.4'
    t2.style.opacity='0.4'
    img2.style.opacity='0.4'
})
ex3.addEventListener('mouseout',()=>{
    t1.style.opacity='1'
    img1.style.opacity='1'
    t2.style.opacity='1'
    img2.style.opacity='1'
})