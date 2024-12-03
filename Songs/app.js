// <--------------------loading page/effect------------------>

document.querySelectorAll(".reveal").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    elem.innerHTML = "";
    parent.appendChild(child);
    elem.appendChild(parent);
  });
  
  var tl = gsap.timeline();
  
  tl.to(".loader-top .parent .child", {
    y: "-100%",
    delay: 1.5,
    duration: 0.9,
    ease: Back.easeOut,
  })
    .to(".center .parent .child ", {
      x: "0%",
      ease: Back.easeinOut,
      delay: -2,
      duration: 0.5,
      stagger: 0.2,
    })
    .to(".center .parent .child", {
      y: "-100%",
      duration: 0.2,
      stagger: 0.2,
    })
    .to(".loader", {
      height: "0%",
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to(".green-div", {
      height: "100%",
      duration: 2,
      delay: -1.999,
      ease: Expo.easeInOut,
    })
    .to(".landing-page", {
      height: "100%",
      duration: 2,
      delay: -1.8,
      ease: Expo.easeInOut,
    });
  
  // <--------------------landing page --------------->
  let imgObject = [
    "https://www.therevolverclub.com/cdn/shop/articles/Untitled_design_2_fa6369c1-891e-4804-824e-8f1632d29a40.png?v=1702296306&width=1366",
    "https://i.ytimg.com/vi/MJoOKavNBJY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCwMg_eLM8oMSpt5JzAcVZJy5BhAg",
    "https://c.files.bbci.co.uk/1260/production/_108240740_beatles-abbeyroad-index-reuters-applecorps.jpg",
    "https://m.media-amazon.com/images/M/MV5BZjBmMDMwNzItN2I3My00MzcxLTlkMzktM2JkNjRmYmU5MTgwXkEyXkFqcGc@._V1_.jpg",
    "https://i.ytimg.com/vi/1lJtxnRYKWk/maxresdefault.jpg",
    "https://static.toiimg.com/thumb/msid-112518044,width-1280,height-720,resizemode-4/112518044.jpg",
    "https://cdn.wrytin.com/images/wrytup/r/1024/choo-lo-jgpjcq42.jpeg",
    "https://rukminim2.flixcart.com/image/850/1000/poster/d/g/p/athah-psy-gangnam-style-fine-quality-poster-athdwhumor134-medium-original-imaegvt3qxsy6maf.jpeg?q=90&crop=false",
    "https://i.ytimg.com/vi/nc16u3BwSyk/maxresdefault.jpg",
  ];
  
  let mainImg = 0;
  let prevImg = imgObject.length - 1;
  let nextImg = 1;
  let autoScrollInterval;
  
  function loadGallery() {
    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgObject[mainImg] + ")";
    mainView.style.backgroundSize = "cover";
  
    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgObject[prevImg] + ")";
    leftView.style.backgroundSize = "cover";
  
    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg] + ")";
    rightView.style.backgroundSize = "cover";
  
    let linkTag = document.getElementById("linkTag");
    linkTag.href = imgObject[mainImg];
  }
  
  function scrollRight() {
    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= imgObject.length - 1) {
      nextImg = 0;
    } else {
      nextImg++;
    }
    loadGallery();
  }
  
  function scrollLeft() {
    nextImg = mainImg;
    mainImg = prevImg;
    if (prevImg === 0) {
      prevImg = imgObject.length - 1;
    } else {
      prevImg--;
    }
    loadGallery();
  }
  
  function startAutoScroll() {
    autoScrollInterval = setInterval(scrollRight, 3500); // Change image every 3 seconds
  }
  
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }
  
  document.getElementById("outer3").addEventListener("click", toggleState3);
  
  function toggleState3() {
    let galleryView = document.getElementById("galleryView");
    let tilesView = document.getElementById("tilesView");
    let outer = document.getElementById("outer3");
    let slider = document.getElementById("slider3");
    let tilesContainer = document.getElementById("tilesContainer");
  
    if (slider.classList.contains("active")) {
      slider.classList.remove("active");
      outer.classList.remove("outerActive");
      galleryView.style.display = "flex";
      tilesView.style.display = "none";
  
      while (tilesContainer.hasChildNodes()) {
        tilesContainer.removeChild(tilesContainer.firstChild);
      }
    } else {
      slider.classList.add("active");
      outer.classList.add("outerActive");
      galleryView.style.display = "none";
      tilesView.style.display = "flex";
  
      for (let i = 0; i < imgObject.length; i++) {
        let tileItem = document.createElement("div");
        tileItem.classList.add("tileItem");
        tileItem.style.background = "url(" + imgObject[i] + ")";
        tileItem.style.backgroundSize = "cover";
        tilesContainer.appendChild(tileItem);
      }
    }
  }
  
  document.getElementById("navRight").addEventListener("click", () => {
    stopAutoScroll();
    scrollRight();
    startAutoScroll();
  });
  
  document.getElementById("navLeft").addEventListener("click", () => {
    stopAutoScroll();
    scrollLeft();
    startAutoScroll();
  });
  
  document.getElementById("rightView").addEventListener("click", () => {
    stopAutoScroll();
    scrollRight();
    startAutoScroll();
  });
  
  document.getElementById("leftView").addEventListener("click", () => {
    stopAutoScroll();
    scrollLeft();
    startAutoScroll();
  });
  
  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 37) {
      stopAutoScroll();
      scrollLeft();
      startAutoScroll();
    } else if (e.keyCode === 39) {
      stopAutoScroll();
      scrollRight();
      startAutoScroll();
    }
  });
  
  const galleryContainer = document.getElementById("galleryContainer");
  galleryContainer.addEventListener("mouseenter", stopAutoScroll);
  galleryContainer.addEventListener("mouseleave", startAutoScroll);
  
  // Initial loading of the gallery and start auto-scroll
  loadGallery();
  startAutoScroll();
  document.addEventListener('DOMContentLoaded', function () {
    const privacyLink = document.querySelector('.privacy-link');
    privacyLink.addEventListener('click', function () {
        alert('You are being redirected to the Privacy Policy page.');
    })});