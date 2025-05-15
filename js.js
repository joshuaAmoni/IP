
function displayGreeting() {
    const hour = new Date().getHours();
    const greeting = hour < 12
      ? "Good morning!"
      : hour < 18
      ? "Good Afternoon!"
      : "Good Evening!";
      
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.textContent = greeting;
    }
  }
  window.onload = displayGreeting;
  

  function validateContactForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    const emailRegex = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i;
    const phoneRegex = /^\d{10}$/;
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be 10 digits.");
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleTheme);
    }
  });
  
  function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.classList.contains("hidden")) {
      details.classList.remove("hidden");
      button.textContent = "Hide Details";
    } else {
      details.classList.add("hidden");
      button.textContent = "Show Details";
    }
  }
  function survey(){
    var comin=document.getElementById('comment').value;
    if(comin==""){
      alert('Please write out your comment')
      return false;
    }else{
      alert('form successfully submitted');
    }
  }