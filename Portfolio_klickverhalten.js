document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const clicked = this.getAttribute('data-clicked') === 'true';
            const isMobileView = window.innerWidth <= 998; // Anpassbare Breite für die mobile Ansicht
            
            if (isMobileView && !clicked) {
                event.preventDefault();
                this.setAttribute('data-clicked', 'true');
                this.querySelector('.overlay').style.opacity = '1';
                this.querySelector('.overlay').style.backgroundColor = 'rgba(133, 7, 105, 0.5)';
                
                setTimeout(() => {
                    this.setAttribute('data-clicked', 'false');
                    this.querySelector('.overlay').style.opacity = '0';
                    this.querySelector('.overlay').style.backgroundColor = '';
                }, 2000); // Reset nach 2 Sekunden
            } else {
                window.location.href = this.getAttribute('data-href');
            }
        });
    });
});