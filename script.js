const logo = document.getElementById("logo")

  logo.addEventListener("mouseenter", function () {
    logo.style.cursor = "pointer"
  })

  logo.addEventListener("mouseleave", function () {
    logo.style.cursor = "default"
  })

  logo.addEventListener("click", function () {
    window.location.href = "index.html"
  })