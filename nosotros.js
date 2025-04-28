document.addEventListener('DOMContentLoaded', () => {


    window.onload = function() {
        const img22 = document.getElementById('image22');
        const img24 = document.getElementById('image24');

        if (img22 && img24) {
            img24.onload = function() {
                img24.style.height = img22.offsetHeight + 'px';
            };
            //check if image24 loaded
            if (img24.complete) {
                img24.style.height = img22.offsetHeight + 'px';
            }
        }
    };
    
    // Carrusel de imágenes
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carrusel-item'); // Corrección: carousel-item a carrusel-item
    const prevButton = document.querySelector('.control-carrusel-prev'); // Corrección: carousel-control-prev a control-carrusel-prev
    const nextButton = document.querySelector('.control-carrusel-next'); // Corrección: carousel-control-next a control-carrusel-next

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
        showSlide(0);
        setInterval(nextSlide, 5000);
    }


    function addSectionInteractivity(sectionClass) {
        const sections = document.querySelectorAll(sectionClass);
        sections.forEach(section => {
            section.addEventListener('mouseenter', () => {
                section.style.transform = 'translateY(-0.5rem)';
                section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            });
            section.addEventListener('mouseleave', () => {
                section.style.transform = 'translateY(0)';
                section.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    addSectionInteractivity('.seccion-historia'); // Corrección: .history-section a .seccion-historia
    addSectionInteractivity('.seccion-formacion'); // Corrección: .formation-section a .seccion-formacion
    addSectionInteractivity('.seccion-crecimiento');  // Corrección: .growth-section a .seccion-crecimiento
    addSectionInteractivity('.seccion-clientes'); // Corrección: .clients-section a .seccion-clientes
    addSectionInteractivity('.seccion-especializacion'); // Corrección: .specialization-section a .seccion-especializacion

    const companyValuesList = document.querySelector('.valores-empresa'); // Corrección: .company-values a .valores-empresa
    if(companyValuesList){
        const valuesItems = companyValuesList.querySelectorAll('li');
        valuesItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = '#d1d5db';
                item.style.transform = 'translateX(0.5rem)';
            });
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = '#e5e7eb';
                item.style.transform = 'translateX(0)';
            });
        });
    }
});