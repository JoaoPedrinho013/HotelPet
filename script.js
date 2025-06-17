const btnTopo = document.getElementById("btnTopo");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

