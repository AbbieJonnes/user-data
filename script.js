/* =========================
   DARK MODE SYSTEM
========================= */

function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-gray-100");
    } else {
      document.body.classList.remove("bg-gray-900", "text-white");
      document.body.classList.add("bg-gray-100");
    }
  }
  
  // Load saved theme
  let savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
  
  // Toggle theme (NO ICONS)
  document.addEventListener("click", function (e) {
    if (e.target.id === "themeToggle") {
  
      let currentTheme = localStorage.getItem("theme") || "light";
  
      if (currentTheme === "light") {
        localStorage.setItem("theme", "dark");
        applyTheme("dark");
        e.target.innerText = "Dark Mode On";
      } else {
        localStorage.setItem("theme", "light");
        applyTheme("light");
        e.target.innerText = "Light Mode On";
      }
    }
  });
  
  
  /* =========================
     SAVE DATA + NAVIGATION
  ========================= */
  
  document.getElementById("userForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
  
    localStorage.setItem("userName", name);
    localStorage.setItem("userAge", age);
  
    window.location.href = "quote.html";
  });
  
  
  /* =========================
     QUOTES PAGE LOGIC
  ========================= */
  
  function loadQuotesPage() {
  
    const name = localStorage.getItem("userName");
    const age = localStorage.getItem("userAge");
  
    if (!name || !age) return;
  
    document.getElementById("greeting").innerText =
      `Welcome ${name}`;
  
    document.getElementById("ageMonths").innerText =
      `You are ${age * 12} months old`;
  
    document.getElementById("adultMsg").innerText =
      age >= 18
        ? "You can access adult content"
        : "You are too young for adult content";
  
    let quotes = "";
  
    for (let i = 1; i <= 5; i++) {
      quotes += `<p class="bg-gray-100 p-2 rounded">Believe in yourself</p>`;
    }
  
    document.getElementById("quotes").innerHTML = quotes;
  }
  
  loadQuotesPage();
  
  
  /* =========================
     BACK BUTTON
  ========================= */
  
  document.getElementById("backBtn")?.addEventListener("click", function () {
    window.location.href = "index.html";
  });