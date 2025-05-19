 function isMobile() {
      return true
    }

    function checkOrientation() {
      const mainElement = document.getElementById('main')
      const warning = document.getElementById('rotate-warning');

      if (isMobile() && window.matchMedia("(orientation: portrait)").matches) {
        warning.style.display = 'flex';
        
      } else {
        warning.style.display = 'none';
      }
    }

    window.addEventListener('load', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);