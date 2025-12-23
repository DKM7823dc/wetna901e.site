const letter = document.querySelectorAll(".letter");
for (let e = 0; e < letter.length; e++) letter[e].style.transform = `rotate(${5.4*e}deg)`;
$((() => {
    let e = 17;
    $(".pack_count").html(e), setTimeout((function o() {
        e--, $(".pack_count").html(e), e > 5 && setTimeout(o, 6e4)
    }), 0)
}));
const initParticles = () => {
        Particles.init({
            selector: ".background"
        }), Particles.init({
            selector: ".background",
            color: ["#00FAAA", "#f70044"],
            connectParticles: !0,
            maxParticles: 90,
            speed: .7,
            responsive: [{
                breakpoint: 600,
                options: {
                    maxParticles: 15,
                    connectParticles: !0,
                    speed: .2
                }
            }]
        })
    },
    preloader = document.getElementById("preloader"),
    hidePreloader = () => {
        preloader.style.display = "none"
    };
window.addEventListener("load", (() => {
    Particles.init({
        selector: ".background"
    }), Particles.init({
        selector: ".background",
        color: ["#00FAAA", "#f70044"],
        connectParticles: !0,
        maxParticles: 90,
        speed: .7,
        responsive: [{
            breakpoint: 600,
            options: {
                maxParticles: 15,
                connectParticles: !0,
                speed: .2
            }
        }]
    }), preloader.style.display = "none"
}));
const videoTrigger = document.querySelector(".promo__right"),
    video = document.querySelector(".video-popup"),
    closeButton = document.querySelector(".close-button"),
    body = document.querySelector("body");
videoTrigger.addEventListener("click", (() => {
    video.classList.add("video-popup-show"), body.classList.add("video-opened")
})), closeButton.addEventListener("click", (() => {
    video.classList.remove("video-popup-show"), body.classList.remove("video-opened")
}));
const scrollToElement = (e, o) => {
    const t = document.querySelector(e);
    document.querySelectorAll(o).forEach((e => {
        e.addEventListener("click", (e => {
            e.preventDefault(), t.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }))
    }))
};
scrollToElement("#form", 'a[href="#form"]');