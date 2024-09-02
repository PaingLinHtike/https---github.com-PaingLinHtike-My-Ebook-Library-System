// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetUrl = this.getAttribute('href');

            document.getElementById('page-content').classList.add('fade-out');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Duration matches the CSS transition duration
        });
    });
});
