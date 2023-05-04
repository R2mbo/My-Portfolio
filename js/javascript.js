// scroll button
let scroller = document.getElementsByClassName("toUp")[0]

// to make scroll button appear when scroll in the page happen
document.addEventListener("scroll",function(){
    if(window.scrollY >= 300){ // if the window scroll vertical up to down is greater than 300px
        scroller.classList.add("appear")
    }else {
        scroller.classList.remove("appear")
    }
})

scroller.onclick = function(){ // click to go up
    window.scrollTo({top:0,behavior:"smooth"})
}

// burger button

let nav = document.getElementsByTagName("ul")[0]
let burger = document.getElementsByClassName("burger")[0]

burger.addEventListener("click",function(){
    nav.classList.toggle("active")
})
// so when you click outside the list it will disappear
document.addEventListener("click",function(e){
    if(!e.target.closest(".burger") && nav.classList.contains("active")){
        nav.classList.remove("active")
    }
})

