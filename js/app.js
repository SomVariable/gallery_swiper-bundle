const swiperItems = document.querySelectorAll('.slider__item')
const description = document.querySelector('.description')


const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax:true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
}) 

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax:true,
    slidesPerView: 3.5,
    spaceBetween: 60
})
sliderMain.controller.control = sliderBg 


swiperItems.forEach(item => {
    item.addEventListener('click', e => {
        item.classList.toggle('opened')
    })
})


sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0?description.classList.add('hidden'):description.classList.remove('hidden')
})


