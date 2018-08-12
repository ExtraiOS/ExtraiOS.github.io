  //TABS
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


      // When the user scrolls down 20px from the top of the document, show the button
    	window.onscroll = function() {scrollFunction()};

    	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    	        document.getElementById("myBtn").style.display = "block";
    	    } else {
    	        document.getElementById("myBtn").style.display = "none";
    	    }


    	// When the user clicks on the button, scroll to the top of the document
    	    document.body.scrollTop = 0; // For Safari
    	    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    	}

  //DARK MODE
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

  //DEFAULT HOME PAGE OPEN
    document.getElementById("defaultOpen").click();

  //HOME PAGE APP GALLERY
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

  //HOME PAGE DATE
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toDateString();

  //REFRESH TO TOP OF SCREEN
    $(document).on('click', 'a', function (e) {
        if ($('#'+e.target.id).attr('href')=='#') {
            e.preventDefault();
        }
    });

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

	//APPS SEARCH BAR
  	function myFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
        }
  	 }

	//LOADING
	 $(document).ready( function() {
				$('#deletesuccess').delay(8000).fadeOut();
			});
