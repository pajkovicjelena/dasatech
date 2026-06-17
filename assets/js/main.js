// Fentech clone — minimal client-side behaviour
(function () {
  // Close the mobile nav when a link is tapped
  var nav = document.getElementById('mainNav');
  if (nav) {
    nav.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'A' && window.innerWidth <= 768) {
        nav.classList.remove('open');
      }
    });
  }
})();
