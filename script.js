
const logolink = document.querySelector('.logo')
const navlinks = document.querySelectorAll('header nav a')
const section = document.querySelectorAll('section')
const menuicon = document.querySelector('#menu-icon')
const navbar = document.querySelector('header nav')

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-menu')
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})
const activepage = ()=>{
     
    const header = document.querySelector('header')
    const barbox = document.querySelector('.bar-box')
   
   header.classList.remove('active')
    setTimeout(() => {
        header.classList.add('active')
    }, 1100);


    navlinks.forEach(link =>{
        link.classList.remove('active')
    })
    barbox.classList.remove('active')
    setTimeout(() => {
        barbox.classList.add('active')
    }, 1100);
     section.forEach(section =>{
        section.classList.remove('active')
    })
    menuicon.classList.remove('bx-menu')
    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')

}
navlinks.forEach((link,idx)=>{
    link.addEventListener('click', ()=> {
        if(!link.classList.contains('active')){
            activepage()

            link.classList.add('active')

           setTimeout(() => {
             section[idx].classList.add('active')
           }, 1100);
        }
    })
})
logolink.addEventListener('click' , ()=>{
    if(!navlinks[0].classList.contains('active')){
        activepage()
        navlinks[0].classList.add('active')
        setTimeout(() => {
             section[0].classList.add('active')
           }, 1100);
        
    }
})

const resumebtns =document.querySelectorAll('.resume-btn')

resumebtns.forEach((btn , idx) => {
    btn.addEventListener('click', ()=>{
        const resumedetails = document.querySelectorAll('.resume-detail')
        resumebtns.forEach(btn =>{
            btn.classList.remove('active')
        })
        btn.classList.add('active')
        resumedetails.forEach(detail =>{
            detail.classList.remove('active')
        })
         resumedetails[idx].classList.add('active')
    }) 
});

const arrowright = document.querySelector('.portfolio-box .navigation .arrow-right')
const arrowleft = document.querySelector('.portfolio-box .navigation .arrow-left')
let index =0

const activeportfolio  =() =>{
    const imgslide = document.querySelector('.portfolio-carousel .img-slide')
    const portfoliodetails = document.querySelectorAll('.portfolio-detail ')
    imgslide.style.transform=`translateX(calc(${index *-100}% ))`
     
     portfoliodetails.forEach(detail => {
        detail.classList.remove('active')
     })

    portfoliodetails[index].classList.add('active')



}

arrowright.addEventListener('click',()=>{
    if(index<4){
        index++
        arrowleft.classList.remove('disabled')
    }
    else {
        index =5
        arrowright.classList.remove('disabled')
    }
    activeportfolio()
})
arrowleft.addEventListener('click',()=>{
    if(index>1){
        index--
        arrowright.classList.remove('disabled')
        }
    else {
        index =0
        arrowleft.classList.remove('disabled')
    }
    activeportfolio()
})