// <--------------------loading page/effect------------------>

document.querySelectorAll(".reveal")
.forEach(function(elem){
    let parent= document.createElement("span")
    let child=document.createElement("span")
    parent.classList.add("parent")
    child.classList.add("child")
    child.innerHTML=elem.innerHTML
    elem.innerHTML=""
    parent.appendChild(child)
    elem.appendChild(parent)
    
})


var tl=gsap.timeline();

tl.to(".loader-top .parent .child",{

    y:("-100%"),
    delay:1.5,
    duration:0.9,
    ease:Back.easeOut
})
.to(".center .parent .child ",{
    x:("0%"),
    ease:Back.easeinOut,
    delay:-2,
    duration:0.5,
    stagger:0.2
})
.to(".center .parent .child",{
    y:("-100%"),
    duration:0.2,
    stagger:0.2
})
.to(".loader",{
    height:"0%",
    duration:2,
    ease:Expo.easeInOut
})
.to(".landing-page",{
    height:"100%",
    duration:2,
    delay:-2,
    ease:easeInOut
})

// <--------------------landing page --------------->