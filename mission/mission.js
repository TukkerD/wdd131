document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('themeToggle');
    const label = document.getElementById('themeLabel');
    const logo = document.querySelector('.logo');
    const body = document.body;

    toggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark');
            body.classList.remove('light');
            logo.src = "images/byui-logo_white.png";
            label.textContent = "Dark Mode";
        } else {
            body.classList.add('light');
            body.classList.remove('dark');
            logo.src = "images/byui-logo_blue.webp";
            label.textContent = "Light Mode";
        }
    });
});