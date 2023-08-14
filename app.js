const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ' ');
            this.className += ' active-btn';
        });
    }

    // Sections Active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // Scroll to section when clicking on navigation links
    sectBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior

            const targetSectionId = btn.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth' // Adds smooth scrolling behavior
                });
            }
        });
    });

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

pageTransitions();



