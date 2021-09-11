const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActivesClasses()
        slide.classList.add('active')
    })
}

function clearActivesClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

