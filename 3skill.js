// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

onclick;
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// const signinBtn = document.getElementById("menuBtn");
// signinBtn.addEventListener("click", function () {
//   window.location.href = "3skillSigin.html";
// });
// Course Filtering
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // In a real implementation, you would filter courses here
    // This is just a visual demonstration
  });
});

// Course Card Animation on Scroll
const courseCards = document.querySelectorAll(".course-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

courseCards.forEach((card) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(card);
});

// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.innerHTML =
    type === "password"
      ? '<i class="far fa-eye"></i>'
      : '<i class="far fa-eye-slash"></i>';
});

// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple validation
  if (email && password) {
    // In a real application, you would submit the form here
    alert("Sign in successful! Redirecting to your dashboard...");
    // Redirect to dashboard
    // window.location.href = 'dashboard.html';
  } else {
    alert("Please fill in all fields");
  }
});

// Social login buttons
document.querySelectorAll(".social-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const provider = this.textContent.trim().split(" ").pop().toLowerCase();
    alert(`Signing in with ${provider}...`);
    // In a real app, you would redirect to the provider's authentication page
  });
});
