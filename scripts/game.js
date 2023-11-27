document.getElementById("toggle-visibility").addEventListener("click", function() {
    var icon = this.querySelector("i");
    if (icon.classList.contains("fa-eye")) {
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });