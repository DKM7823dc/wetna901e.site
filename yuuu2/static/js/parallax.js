window.addEventListener("scroll", (() => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
}));
const number1 = document.querySelector("#number1");

function getRndInteger(e, t) {
    return Math.floor(Math.random() * (t - e)) + e
}
//number1.setAttribute("data-target", getRndInteger(512, 917));
number1.setAttribute("data-target", 1500);
const number2 = document.querySelector("#number2");
//number2.setAttribute("data-target", getRndInteger(109, 151));
number2.setAttribute("data-target", 1500);
const number3 = document.querySelector("#number3");
//number3.setAttribute("data-target", getRndInteger(3, 6));
number3.setAttribute("data-target", 6);
const element = document.querySelectorAll(".dynamic-accent"),
    Visible = e => {
        for (let t = 0; t < element.length; t++) {
            const n = {
                    top: window.pageYOffset + e[t].getBoundingClientRect()
                        .top,
                    bottom: window.pageYOffset + e[t].getBoundingClientRect()
                        .bottom
                },
                o = {
                    top: window.pageYOffset,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };
            if (n.bottom > o.top && n.top < o.bottom && (element[t].classList.add("dynamic-accent-active"), element[t].classList.contains("counter"))) {
                document.querySelectorAll(".counter")
                    .forEach((e => {
                        const t = () => {
                            const n = +e.getAttribute("data-target"),
                                o = +e.innerText;
                            o < n ? (e.innerText = o + 1, setTimeout(t, 1)) : e.innerText = n
                        };
                        t()
                    }))
            }
        }
    };
window.addEventListener("scroll", (() => {
    Visible(element)
})), Visible(element);