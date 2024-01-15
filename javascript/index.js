let typed = new Typed(".auto-input", {
    strings: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer", "Freelancer"],
    typeSpeed: 55,
    backspeed: 0,
    backDelay: 2000,
    loop: true,
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    loader.classList.add("loader--hidden")
    loader.addEventListener("transitioned", () => {
        document.body.removeChild(document.querySelector(".loader"))
    })
})