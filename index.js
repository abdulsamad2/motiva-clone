// const bgHide = document.querySelector(".bg-[url('img/bg-subheader-1.jpg')]");
const btn = document.querySelector("#btn");
const bgDhide = document.querySelector("#bg-hide-desktop");
// const logo = document.querySelector("#logo");
// // btn.removeAttribute("class");

if (window.innerWidth <= "640") {
  btn.removeAttribute("class");
  bgDhide.setAttribute(
    "class",
    "bg-[url('img/bg-subheader-1.jpg')] py-32 bg-center block bg-cover"
  );
} else {
  btn.setAttribute("class", "bg-[url('img/bg-subheader-1.jpg')] pt-1 pb-60");

  bgDhide.removeAttribute("class");
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= "640") {
    btn.removeAttribute("class");
    bgDhide.setAttribute(
      "class",
      "bg-[url('img/bg-subheader-1.jpg')] py-32 bg-center block bg-cover"
    );
  } else {
    btn.setAttribute("class", "bg-[url('img/bg-subheader-1.jpg')] pt-1 pb-60");

    bgDhide.removeAttribute("class");
  }
});

// logo - light.png;
