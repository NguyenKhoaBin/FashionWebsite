const sliderItems=document.querySelectorAll(".slider-items");
console.log(sliderItems)
const nextSlider=document.querySelector(".slider-control_right");
const preSlider=document.querySelector(".slider-control_left");
index=0;
nextSlider.addEventListener("click",function(){
    // sliderItems[index].classList.remove("active");
    // index=(index+1)%sliderItems.length;
    // sliderItems[index].classList.add("active");
    while(index<sliderItems.length){
        sliderItems[index].classList.remove("active");
        index++;
        if(index<sliderItems.length){
            sliderItems[index].classList.add("active");
            break;
        }
        else{
            index=0
            sliderItems[index].classList.add("active");
            break
        }
    }
})
preSlider.addEventListener("click",function(){
    while(index<sliderItems.length){
        sliderItems[index].classList.remove("active");
        index--;
        if(index<sliderItems.length && index>=0){
            sliderItems[index].classList.add("active");
            break;
        }
        else{
            index=sliderItems.length-1
            sliderItems[index].classList.add("active");
            break
        }
    }
})
const menuBar=document.querySelector(".menu-mobile_icon");
menuBar.addEventListener("click",function(){
    document.querySelector(".menu-mobile").classList.toggle("active");
})