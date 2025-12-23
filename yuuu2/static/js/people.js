const sliderMain = new Swiper(".slider__main", {
    centeredSlides: !0,
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
});
let desc = document.querySelector(".description");
sliderMain.on("slideChange", (e => {
    sliderMain.activeIndex > 0 ? desc.classList.add("hide") : desc.classList.remove("hide")
}));