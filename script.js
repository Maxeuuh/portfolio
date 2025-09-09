document.addEventListener('DOMContentLoaded', () => {
  // TEXTE ANIMÉ (uniquement si présent)
  const welcomeTextEl = document.getElementById("welcome-text");
  if (welcomeTextEl) {
    const text = "Bienvenue sur mon portfolio !";
    let i = 0;
    const speed = 100;
    function typeWriter() {
      if (i < text.length) {
        welcomeTextEl.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }

  // MENU HAMBURGER
  const menuBtn = document.getElementById('menu-btn');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-btn');

  if (menuBtn && sideMenu) {
    menuBtn.addEventListener('click', () => {
      if (sideMenu.style.width === '250px') {
        sideMenu.style.width = '0';
      } else {
        sideMenu.style.width = '250px';
      }
    });
  }

  if (closeBtn && sideMenu) {
    closeBtn.addEventListener('click', () => {
      sideMenu.style.width = '0';
    });
  }

  // Fermer le menu si on clique sur un lien
  const menuLinks = document.querySelectorAll('.side-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (sideMenu) sideMenu.style.width = '0';
    });
  });
});
