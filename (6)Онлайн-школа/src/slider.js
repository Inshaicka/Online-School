const slides = [
    {
        name: "Clayton Delgado",
        job: "Python Coder",
        image: "../assets/profile-1.png",
        info: "Эксперт с более чем 10-летним опытом работы в Python. Clayton делится секретами написания чистого кода, автоматизации задач и создания масштабируемых приложений, делая обучение Python доступным и увлекательным."
    },
    {
        name: "Sandra Owens",
        job: "Backend Coder",
        image: "../assets/profile-2.png",
        info: "Специалист по бэкенд-разработке, умеющая превращать сложные серверные задачи в понятные и эффективные решения. С опытом работы в различных областях, от финансов до e-commerce, Sandra научит вас создавать надёжные серверные приложения и API, обеспечивая безопасность и производительность ваших проектов."
    },
    {
        name: "Alma Lynch",
        job: "Frontend Coder",
        image: "../assets/profile-3.png",
        info: "Фронтенд-разработчик с чувством стиля и опытом работы в ведущих IT-компаниях. Она знает, как создать интерфейсы, которые не только привлекают внимание, но и обеспечивают великолепный пользовательский опыт. Alma поделится с вами самыми современными технологиями и инструментами, которые помогут вам создавать динамичные и креативные веб-приложения."
    },
    {
        name: "James Barness",
        job: "Unity Developer",
        image: "../assets/profile-4.png",
        info: "Профессиональный разработчик игр на Unity с многолетним опытом создания успешных проектов. Если вы мечтаете создать собственную игру или виртуальную реальность, James покажет вам, как воплотить идеи в жизнь с помощью Unity. На его курсах вы научитесь всем аспектам разработки игр, от базовой логики до сложных 3D-анимаций."
    },
];

const sliderContainer = document.querySelector(".slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlideIndex = 0;
const totalSlides = slides.length;

const displaySlides = () => {
    if (sliderContainer && nextBtn && prevBtn) {
        sliderContainer.style.opacity = 0;
        setTimeout(() => {
            const { name, job, image, info } = slides[currentSlideIndex];
            sliderContainer.innerHTML = `
            <div class="profile">
                <img src="${image}">
                <h3>${name} - ${job}</h3>
            </div>
            <p>${info}</p>
            `;
            sliderContainer.style.opacity = 1;
        }, 300);
    }
};

nextBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    displaySlides();
});

prevBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    displaySlides();
});

window.onload = displaySlides;