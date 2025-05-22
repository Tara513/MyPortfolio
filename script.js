// Attendre que le document soit chargé
document.addEventListener('DOMContentLoaded', function() {
  // Année courante pour le footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Fonction pour activer les tabs dans les projets
  window.activateTab = function(tabId) {
    // Cacher tous les contenus de tab
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });
    
    // Afficher le contenu du tab sélectionné
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
      selectedContent.classList.remove('hidden');
    }
    
    // Mise à jour des boutons de tabs
    const tabButtons = document.querySelectorAll('[data-tab]');
    tabButtons.forEach(button => {
      if (button.getAttribute('data-tab') === tabId) {
        button.classList.add('tab-active');
        button.classList.add('border-b-2');
        button.classList.add('border-white');
        button.classList.remove('text-opacity-70');
      } else {
        button.classList.remove('tab-active');
        button.classList.remove('border-b-2');
        button.classList.remove('border-white');
        button.classList.add('text-opacity-70');
      }
    });
  };

  // Menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarLinks = document.querySelector('.navbar-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navbarLinks.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }

  // Menu qui change de couleur au scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 50) {
      navbar.style.padding = '10px 0';
    } else {
      navbar.style.padding = '20px 0';
    }

    // Afficher/masquer le bouton "retour en haut"
    if (window.scrollY > 500) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  // Navigation smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Fermer le menu mobile si ouvert
      if (navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Lien actif dans la navigation
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-links ul li a');

  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Animation des compétences
  const skillItems = document.querySelectorAll('.skill-progress');
  
  // Observer pour animer les compétences quand elles sont visibles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // L'élément est visible
        const progressBars = entry.target.parentElement.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
        // Ne plus observer cet élément une fois animé
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observer les sections de compétences
  document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
  });

  // Formulaire de contact
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Ici, vous pourriez implémenter l'envoi du formulaire à un serveur
      // Pour l'instant, nous simulons un envoi réussi
      
      alert('Merci pour votre message ! Je vous répondrai dès que possible.');
      contactForm.reset();
    });
  }
}); 