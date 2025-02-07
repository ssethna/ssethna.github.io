document.write(
`        <!-- The overlay -->
        <div id="myNav" class="overlay" style="z-index:1;">
          <!-- Button to close the overlay navigation -->
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <!-- Overlay content -->
          <div class="overlay-content">
            <a href="index.html">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14" />
            </a>
            <div class="dropdown" id="resume">
              <li class="dropbtn">
                <a href="pages/SSethna.pdf" target="_blank">Resume</a>
              </li>
            </div>
            <div class="dropdown" id="portfolio" style="margin-top:35px;">
              <li class="dropbtn">Portfolio</li>
                <div class="dropdown-content">
                  <a></a>
                  <a href="pages/webSiteTesting.html">Test Automation</a>
                  <a href="pages/gof.html">Gang of Four (GOF) Design Patterns</a>
                  <a href="pages/restExample.html">Rest Web Service</a>
                  <a href="pages/projectEuler.html">Project Euler</a>
                  <a href="pages/forexFactoryCalendar.html">Economic Calendar</a>
                </div>
            </div>
          </div>
          <div>
            <a class="contact" style="margin-top:150px;" href="mailto:shahveersethna@outlook.com">shahveersethna@outlook.com</a>
            <a class="contact" href="tel:6472827774">647-282-7774</a>
            <a class="contact" href="https://www.linkedin.com/in/shahveersethna" target="_blank">
            <svg class="icon2" style="vertical-align: middle;"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 48 48"
                     width="36px" height="36px">
                  <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>
            </a>
          </div>
        </div>

<script>
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

</script>
`);
