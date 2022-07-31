/* ScrollSpy using Intersection Observer */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navlinks a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            let id = entry.target.id;

            navLinks.forEach((link) => {

                link.classList.remove('active');

                // getting anchor-tag's href attribute & removing '#' from it.
                let href = link.getAttribute('href').substring(1);

                if (href === id) {
                    link.classList.add('active');
                }

            });

        }
    });
}, {
    threshold: 0.5
});

sections.forEach((sec) => {
    observer.observe(sec);
});
