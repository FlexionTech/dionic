document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const iconSpan = document.getElementById("theme-icon");
  const body = document.body;
  const logo = document.getElementById("logo");
  const form = document.getElementById("contactForm");
  const introMessage = document.getElementById("contact-intro");

  const sunIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="15" height="14">
      <circle cx="12" cy="12" r="5"/>
      <g stroke="currentColor" stroke-width="2">
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </g>
    </svg>`;

  const moonIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="15" height="14">
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
    </svg>`;

  function updateIcon(theme) {
    iconSpan.innerHTML = theme === "dark" ? sunIcon : moonIcon;
    themeToggleBtn.title =
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  }

  function updateLogo(theme) {
    logo.src =
      theme === "dark"
        ? "images/dionic_logo_dark.png"
        : "images/dionic_logo_light.png";
    logo.alt = "Growth Strength Resilience";
  }

  const initialTheme =
    savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : prefersDark
      ? "dark"
      : "light";

  body.setAttribute("data-bs-theme", initialTheme);
  updateIcon(initialTheme);
  updateLogo(initialTheme);
  localStorage.setItem("theme", initialTheme);

  themeToggleBtn.onclick = function () {
    const currentTheme = body.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
    updateLogo(newTheme);
  };

  const submitBtn = document.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ⬅️ Only once, at the top

    if (!form.checkValidity()) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          const introMessage = document.getElementById("contact-intro");
          if (introMessage) {
            introMessage.style.display = "none";
          }

          form.innerHTML =
            "<p>Thanks for your message! We will connect with you shortly.</p>";
        } else {
          form.innerHTML =
            "<p>Oops! There was a problem. Please try again later.</p>";
        }
      })
      .catch(() => {
        form.innerHTML = "<p>There was a problem. Please try again later.</p>";
      });
  });

  const fields = ["firstName", "lastName", "contactNumber"];
  fields.forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("focusout", () => {
      if (!input.checkValidity()) {
        input.style.borderColor = "red";
        input.style.boxShadow = "0 0 4px red";
      } else {
        input.style.borderColor = "";
        input.style.boxShadow = "";
      }
    });
    input.addEventListener("input", () => {
      input.style.borderColor = "";
      input.style.boxShadow = "";
    });
  });

  // Enable/disable submit button
  submitBtn.disabled = true;
  submitBtn.classList.remove("active");
  form.addEventListener("input", () => {
    if (form.checkValidity()) {
      submitBtn.disabled = false;
      submitBtn.classList.add("active");
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.remove("active");
    }
  });

  // Menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const menuDialog = document.getElementById("menu-dialog");
  const closeDialog = document.getElementById("close-dialog");

  menuBtn.addEventListener("click", () => {
    menuDialog.classList.toggle("show");
  });
  closeDialog.addEventListener("click", () => {
    menuDialog.classList.remove("show");
  });
  document.addEventListener("click", (e) => {
    if (!menuDialog.contains(e.target) && !menuBtn.contains(e.target)) {
      menuDialog.classList.remove("show");
    }
  });
});
