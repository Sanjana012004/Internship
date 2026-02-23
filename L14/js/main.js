// =====================
// LOGIN PAGE LOGIC
// =====================

// Only run login logic if we're on the login page
var modal = document.getElementById('error-modal');

if (modal) {
  modal.style.display = "none";

  var loginForm = document.querySelector("#login-form");

  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Stop page from refreshing on submit
    });
  }
}

// FIX 1: Variable was declared as 'unameField' but used as 'uname' — now consistent
// FIX 2: || (OR) changed to && (AND) so BOTH fields must be correct
function validateLogin() {
  var unameField = document.querySelector("#uname");
  var pwdField = document.querySelector("#pwd");

  if (unameField.value != "Admin" && pwdField.value != "123456") {
    // Both fields wrong
    modal.style.display = "block";
  } else if (unameField.value == "Admin" && pwdField.value == "123456") {
    // Both fields correct — redirect to home
    alert("You are now logged in!");
    window.location.href = "index.html";
  } else {
    // One field correct, one wrong
    modal.style.display = "block";
  }
}

function dismissModal() {
  modal.style.display = "none";
}


// =====================
// HOME PAGE LOGIC
// =====================
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}
