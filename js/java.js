function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";



}

document
  .querySelector('.js-change-theme')
  .addEventListener('click', () => {
    const body = document.querySelector('body');

    if (body.classList.contains('t--light')) {
      body.classList.remove('t--light');
      body.classList.add('t--dark');
    }
    else {
      body.classList.remove('t--dark');
      body.classList.add('t--light');
    }
  })
;

document.getElementById("defaultOpen").click();

document
  .querySelector('.js-change-theme')
  .addEventListener('click', () => {
    const body = document.querySelector('body');

    if (body.classList.contains('t--light')) {
      body.classList.remove('t--light');
      body.classList.add('t--dark');
    }
    else {
      body.classList.remove('t--dark');
      body.classList.add('t--light');
    }
  })
;

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 6000);
}

var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();
