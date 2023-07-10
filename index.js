// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  const pageLinks = document.querySelectorAll("a");
  if (window.scrollY > (window.innerHeight * .80)) {
    document.getElementById("header-text").style.padding = "15px 10px";
    // document.getElementById("header-text").style.backgroundColor = 'rgba(191,87,0,.98)';
    document.getElementById("header-text").style.backgroundColor = 'rgba(8,18,28,.90)'; 
    document.getElementById("header-text").style.color = "white";
    document.getElementById("header-text").style.borderBottomLeftRadius = "2%";
    document.getElementById("header-text").style.borderBottomRightRadius = "2%";
    document.getElementById("header-links").style.paddingTop = "3px";
    pageLinks.forEach((item) => {
      item.addEventListener('mouseenter', (event) => {
        event.target.style.color = "lightBlue";
      });
      item.addEventListener('mouseleave', (event) => {
        event.target.style.color = "white";
      })
    })
  } else {
    document.getElementById("header-text").style.padding = "3vh 10px";
    document.getElementById("header-text").style.removeProperty("background-color");
    document.getElementById("header-links").style.paddingTop = "3px";
    pageLinks.forEach((item) => {
      item.addEventListener('mouseenter', (event) => {
        event.target.style.color = "lightblue";
      });
      item.addEventListener('mouseleave', (event) => {
        event.target.style.color = "white";
      })
    })
  }
}
