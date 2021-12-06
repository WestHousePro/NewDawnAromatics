function readMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const moreTextSecond = document.getElementById("moreSecond");
  const btnText = document.getElementById("section-about_more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `Read More&nbsp<span class="section-about_arrow">&#8595;</span>`;
    moreText.style.display = "none";
    moreTextSecond.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = `Read Less&nbsp<span class="section-about_arrow">&#8593;</span>`;
    moreText.style.display = "inline";
    moreTextSecond.style.display = "inline";
  }
}
