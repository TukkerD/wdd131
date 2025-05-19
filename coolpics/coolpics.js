document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navList = document.querySelector('nav ul');
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('image-viewer');
    
    menuButton.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
    
    function handleResize() {
        if (window.innerWidth > 1000) {
            navList.classList.remove('show');
        } else {
            navList.classList.add('show');
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    gallery.addEventListener('click', function(event) {
        const clickedImg = event.target.closest('img');
        if (clickedImg) {
            const imgSrc = clickedImg.src.split('-')[0] + '-full.jpeg';
            const imgAlt = clickedImg.alt;
            modal.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}"><button class="close-viewer">X</button>`;
            modal.showModal();
            
            const closeButton = modal.querySelector('.close-viewer');
            closeButton.addEventListener('click', function() {
                modal.close();
            });
        }
    });
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.close();
        }
    });
});