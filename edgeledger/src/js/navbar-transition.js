/*
  When we scroll down a bit we want to:
  - move the menu up and make it re-appear after a short
    amount of time, without the 'top' class, so it has
    a background color
*/
const navbar = document.getElementById('navbar');
let scrollStarted = false;
window.onscroll = () => {
  if (window.scrollY > 100) {
    // if we have scrolled down mor than 100px,
    // remove the top class, so the navbar is
    // no longer transparent
    navbar.classList.remove('top');
    if (!scrollStarted) {
      navbar.style.transform = 'translateY(-70px)';
    }

    // bring the bar back after 200ms
    setTimeout(() => {
      navbar.style.transform = 'translateY(0px)';
      scrollStarted = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrollStarted = false;
  }
};

// smooth scrolling between sections
$('#navbar a, .btn').on('click', (e) => {
  const hash = e.target.hash;
  // no hash, no section
  if (hash !== '') {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
