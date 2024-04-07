function applyScrollStyles() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollTop === 0) {
      navbar.classList.remove('scrolled-down-style');
      navbar.classList.add('original-style');
    } else {
      navbar.classList.remove('original-style');
      navbar.classList.add('scrolled-down-style');
    }
  }
  
  window.addEventListener('scroll', applyScrollStyles);
  
  function applyHoverEffect(navbarClass) {
    const navLinks = document.querySelectorAll(`.${navbarClass} a`);
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
       
        link.nextElementSibling.style.position = 'absolute';
       
      });
  
      link.addEventListener('mouseout', () => {
       
        link.nextElementSibling.style.position = 'initial';
        
      });
    });
  }
  
  applyHoverEffect('original-style');
  applyHoverEffect('scrolled-down-style'); 

  applyScrollStyles(); 

  
  const mobileNav = document.querySelector('.mobileNav');
  const smallNav = document.querySelector('.smallNav');
  
  // Skapa en variabel för att hålla reda på om mobileNav är synlig eller inte
  let mobileNavVisible = false;
  
  // Lägg till en eventlyssnare på smallNav-elementet
  smallNav.addEventListener('click', function() {
      // Om mobileNav är dold, visa den och uppdatera mobileNavVisible till true
      if (!mobileNavVisible) {
          mobileNav.style.display = 'flex';
          mobileNavVisible = true;
      } else { // Om mobileNav är synlig, dölj den och uppdatera mobileNavVisible till false
          mobileNav.style.display = 'none';
          mobileNavVisible = false;
      }
  }); /*____*/
