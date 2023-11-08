let swiper = new Swiper(".banner", {
    effect: "fade",
    speed: 1000,
    slidesPerView: 1,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {                       
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    lazyLoading: true,
    loop: true,
});

let swiper2 = new Swiper(".testimonial", {
    effect: "slides",
    speed: 1000,
    slidesPerView: 3,
    pagination: {                      
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    lazyLoading: true,
    loop: true,
    spaceBetween: 30,
    // freeMode: true,
    centeredSlides : true,  
    breakpoints: {
        260:{
            slidesPerView: 1,
            spaceBetween: 10
        },
        360:{
            slidesPerView: 1,
            spaceBetween: 20
        },
        750: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        988: {
          slidesPerView: 1.5,
          spaceBetween: 40
        },

        1300:{
            slidesPerView: 3,
            spaceBetween: 40
        }
      }
});


document.getElementById("Toggle").addEventListener("click",function(){
    document.querySelector(".navlink").classList.toggle("active")
})





const tabBtn = document.querySelectorAll('.tab-btn');
const tabItems = document.querySelectorAll('.tab-item');

tabBtn.forEach(function(tab){
    tab.addEventListener('click', function(){
        let tabId = this.dataset.id;
        let tabItem = document.getElementById(tabId);

        //for tab button active
        for (let i = 0; i < tabBtn.length; i++) {
            tabBtn[i].classList.remove('active'); 
        }

        //for tab-item show hide
        for (let j = 0; j < tabItems.length; j++) {
            tabItems[j].style.display = "none"; 
        }

        tabItem.style.display = 'block';
        this.classList.add('active');
    });
});

//enable or show first tab-item
document.querySelector('.tab-btn').click();//enable its click 






