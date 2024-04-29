const button = document.getElementById("yoyo"); // Corrected selector

button.addEventListener('click', () => { // Corrected event listener syntax
  document.querySelector('h1').style.display = "block"; // Show the hidden h1 element
});



window.addEventListener('scroll', function() {
  // Calculate how far down the page we've scrolled
  var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  // Calculate the height of the page
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var documentHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

  // Check if we've scrolled past 50% of the page
  if (scrollPosition > (documentHeight - windowHeight) * 0.5) {
    // Simulate click event on the button
    var button = document.querySelector('.button');
    if (button) {
      button.click();
    }
  }
});