const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    let currentActiveButton = document.querySelector('.control.active-btn');

    // Button click active class
    sectBtn.forEach(button => {
        button.addEventListener('click', function() {
            if (currentActiveButton) {
                currentActiveButton.classList.remove('active-btn');
            }
            this.classList.add('active-btn');
            currentActiveButton = this;
        })
    })

    // Sections active using Event Delegation
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        const id = target.dataset.id;

        if (id && target.classList.contains('control')) {
            // Remove selected from the other buttons
            sectBtn.forEach(btn => btn.classList.remove('active'));

            // Hide other sections
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to the click section
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('active');
            }
        }
    })
    
}

PageTransitions();