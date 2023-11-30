const track=document.querySelector(".carousel__track");
const slides=Array.from(track.children);

const btn1=document.querySelector(".carousel-btn1");
const btn2=document.querySelector(".carousel-btn2");
const btn3=document.querySelector(".carousel-btn3");

let slideWidth=slides[0].getBoundingClientRect().width;

//Arrange slides
/*
slides[0].style.left = slideWidth*0 + "px";
slides[1].style.left = slideWidth*1 + "px";
slides[2].style.left = slideWidth*2 + "px"; */

const setSlidePosition=(slide,index)=>{
    slide.style.left = slideWidth*index + "px";
}
slides.forEach(setSlidePosition);

//when i click tabs------------
btn1.addEventListener("click",e =>{
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide=currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
//move to next slide
    track.style.transform= 'translateX('+ 0 + ')';
})

btn2.addEventListener("click",e =>{
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide=currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
//move to next slide
    track.style.transform= 'translateX(-'+ amountToMove + ')';
})

btn3.addEventListener("click",e =>{
//move to next slide
    track.style.transform= 'translateX(-'+ 1800 + 'px)';
})


