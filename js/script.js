const searchButton = document.getElementById("searchButton");
const searchForm = document.getElementById("searchForm");

function displayDate() {
    var currentDate = new Date();
    var options = {year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('currentDate').innerHTML = dateString;
}

searchButton.addEventListener('click', function() {
    searchForm.classList.toggle('show');
});

const navbar = document.getElementById('navbar');

let prevScrollpos = window.scrollY;

window.addEventListener('scroll', function() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
        navbar.classList.remove('fixed-top');
    } else {
        if (currentScrollPos < prevScrollpos) {
            if (currentScrollPos > navbar.offsetTop - navbar.offsetHeight) {
                navbar.classList.add('fixed-top');
            }
        } else {
            if (currentScrollPos < navbar.offsetTop - window.innerHeight + navbar.offsetHeight * 2) {
                navbar.classList.remove('fixed-top');
            }
        }

        prevScrollpos = currentScrollPos;
    }
});