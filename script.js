// Mobile Menu Script
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
    } else {
      mobileMenuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
    }
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
    });
  });
});

// Navigation Script
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  
  // Handle smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
  
  // Update active state on scroll
  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 300) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
  
  // Back to top button
  const backToTopButton = document.getElementById("back-to-top");
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Project Filter Script
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");
      const filter = this.getAttribute("data-filter");
      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Dropdown Script
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("project-type-button");
  const dropdown = document.getElementById("project-type-dropdown");
  const dropdownText = document.getElementById("project-type-text");
  const dropdownOptions = dropdown.querySelectorAll("[data-value]");
  const hiddenInput = document.getElementById("project-type");
  
  if (dropdownButton && dropdown) {
    dropdownButton.addEventListener("click", function () {
      dropdown.classList.toggle("hidden");
    });
    
    dropdownOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        const text = this.textContent;
        dropdownText.textContent = text;
        hiddenInput.value = value;
        dropdown.classList.add("hidden");
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !dropdownButton.contains(event.target) &&
        !dropdown.contains(event.target)
      ) {
        dropdown.classList.add("hidden");
      }
    });
  }
});

// Form Script
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      // Form validation
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
      const projectType = document.getElementById("project-type").value;
      const message = document.getElementById("message").value;
      
      if (!firstName || !lastName || !email || !projectType || !message) {
        alert("Please fill in all required fields");
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }
      
      // Form submission would go here
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
      document.getElementById("project-type-text").textContent = "Select project type";
    });
  }
});

// Download CV Button
document.addEventListener("DOMContentLoaded", function () {
  const downloadCVButton = document.getElementById("download-cv-btn");
  if (downloadCVButton) {
    downloadCVButton.addEventListener("click", function (e) {
      e.preventDefault();
      
      // Google Drive file ID from the URL
      const fileId = "1t-YgC4ybkGGTyB2EaKVN8eJJZ8w9CoEx";
      
      // Create direct download link for Google Drive
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Zeel_Devani_Resume.pdf';
      link.target = '_blank';
      
      // Add to DOM, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    });
  }
});

// Social Media Links
document.addEventListener("DOMContentLoaded", function () {
  // Instagram links
  // const instagramLinks = document.querySelectorAll('#instagram-link, #footer-instagram-link');
  // instagramLinks.forEach(link => {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     const instagramUrl = "#";
  //     window.open(instagramUrl, '_blank');
  //   });
  // });
  
  // Behance links
  const behanceLinks = document.querySelectorAll('#behance-link, #footer-behance-link');
  behanceLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const behanceUrl = "https://www.behance.net/zeeldewani";
      window.open(behanceUrl, '_blank');
    });
  });
  
  // Dribbble links
  // const dribbbleLinks = document.querySelectorAll('#dribbble-link, #footer-dribbble-link');
  // dribbbleLinks.forEach(link => {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     const dribbbleUrl = "#";
  //     window.open(dribbbleUrl, '_blank');
  //   });
  // });
  
  // LinkedIn links
  const linkedinLinks = document.querySelectorAll('#linkedin-link, #footer-linkedin-link');
  linkedinLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const linkedinUrl = "https://www.linkedin.com/in/zeel-devani-332212363/";
      window.open(linkedinUrl, '_blank');
    });
  });
});

// Logo/Brand Name Click
document.addEventListener("DOMContentLoaded", function () {
  const brandLinks = document.querySelectorAll('.brand-logo');
  brandLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
});

// Project View Buttons
document.addEventListener("DOMContentLoaded", function () {
  const projectViewButtons = document.querySelectorAll('a[data-readdy="true"]');
  projectViewButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const projectTitle = this.closest('.project-card').querySelector('h3').textContent;
      alert(`Opening project: ${projectTitle}\n\nThis would typically open a detailed project page or portfolio view.`);
    });
  });
});

// Contact Information Click Handlers
document.addEventListener("DOMContentLoaded", function () {
  // Email click
  const emailContact = document.getElementById("email-contact");
  if (emailContact) {
    emailContact.addEventListener("click", function () {
      window.open("mailto:hello@zeeldevani.com", '_blank');
    });
    emailContact.style.cursor = "pointer";
  }
  
  // Phone click
  const phoneContact = document.getElementById("phone-contact");
  if (phoneContact) {
    phoneContact.addEventListener("click", function () {
      window.open("tel:+919876543210", '_blank');
    });
    phoneContact.style.cursor = "pointer";
  }
});

// Footer Navigation Links
document.addEventListener("DOMContentLoaded", function () {
  const footerLinks = document.querySelectorAll('footer a[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
