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
.to(".green-div",{
    height:"100%",
    duration:2,
    delay:-1.999,
    ease:Expo.easeInOut
})
.to(".landing-page",{
    height:"100%",
    duration:2,
    delay:-1.8,
    ease:Expo.easeInOut
})


    // // Hover effect for the button
    // document.querySelector('.hero button').addEventListener('mouseenter', () => {
    //   document.querySelector('.hero button').style.transform = 'scale(1.05)';
    // });

    // document.querySelector('.hero button').addEventListener('mouseleave', () => {
    //   document.querySelector('.hero button').style.transform = 'scale(1)';
    // });

    // const carousel = document.querySelector('.carousel');
    // let currentIndex = 0;

    // function nextSlide() {
    //   if (currentIndex < carousel.children.length - 1) {
    //     currentIndex++;
    //   } else {
    //     currentIndex = 0;
    //   }
    //   updateCarousel();
    // }

    // function prevSlide() {
    //   if (currentIndex > 0) {
    //     currentIndex--;
    //   } else {
    //     currentIndex = carousel.children.length - 1;
    //   }
    //   updateCarousel();
    // }

    // function updateCarousel() {
    //   const items = carousel.children;
    //   for (let i = 0; i < items.length; i++) {
    //     items[i].style.transform = `translateX(-${currentIndex * 270}px)`;
    //   }
    // }

    // setInterval(nextSlide, 3000); // Change slides every 3 seconds
    // updateCarousel();

    // Play video on hover
    document.querySelectorAll('.carousel-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        const video = item.querySelector('video');
        if (video) {
          video.play();
        }
      });
      item.addEventListener('mouseleave', () => {
        const video = item.querySelector('video');
        if (video) {
          video.pause();
        }
      });
    });


    const carouselItems = document.querySelectorAll('.carousel-item');

    // Loop through each carousel item
    carouselItems.forEach(item => {
        // Get the video element inside the carousel item
        const video = item.querySelector('video');
        const img = item.querySelector('img');

        // Play video when hovering over the carousel item
        item.addEventListener('mouseenter', () => {
            if (video) {
                video.style.display = 'block';  // Show video
                video.play();                   // Start playing the video
                img.style.display = 'none';     // Hide the image
            }
        });

        // Pause video when the hover effect ends
        item.addEventListener('mouseleave', () => {
            if (video) {
                video.style.display = 'none';  // Hide video
                video.pause();                 // Pause the video
                img.style.display = 'block';   // Show the image again
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const privacyLink = document.querySelector('.privacy-link');
        privacyLink.addEventListener('click', function () {
            alert('You are being redirected to the Privacy Policy page.');
        })});