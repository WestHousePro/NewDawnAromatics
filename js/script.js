function originalDisplay() {
  document.getElementById("section-blog_content_first").style.display =
    "inline-block";
  document.getElementById("disclaimer_popup").style.visibility = 'hidden';
  document.getElementById("consultation_popup").style.visibility = 'hidden';
  document.getElementById("consultation_ty").style.visibility = 'hidden';
}

function consultationPopup() {
  const openPopup = document.getElementById("consultation_popup");
    openPopup.style.visibility = 'visible';
    openPopup.style.opacity = 1;

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        openPopup.style.visibility = 'hidden';
        openPopup.style.opacity = 0;
      }
    });
}

function consultationThankYou() {
  const submitForm = document.getElementById("consultation_submit");
  const thankYou = document.getElementById("consultation_ty");
  submitForm.style.visibility = 'hidden';
  thankYou.style.visibility = 'visible';
}

function consultationPopupClose() {
  const closePopup = document.getElementById("consultation_popup");
  closePopup.style.visibility = 'hidden';
  closePopup.style.opacity = 0;
}

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

function navMenu() {
  const openMenu = document.getElementById("header_menuopen");
  const closeMenu = document.getElementById("header_menuclose");
  const menuBox = document.getElementById("header_menu");
  const closePopup = document.getElementById("consultation_popup");
  closePopup.style.visibility = 'hidden';
  closePopup.style.opacity = 0;

  if (closeMenu.style.display === "none") {
    menuBox.style.display = "inline";
    closeMenu.style.display = "inline";
    openMenu.style.display = "none";
    window.addEventListener("mouseup", function (event) {
      if (event.target !== menuBox) {
        menuBox.style.display = "none";
        closeMenu.style.display = "none";
        openMenu.style.display = "inline";
      }
    });
  }
}

function disclaimerPopup() {
  const openPopup = document.getElementById("disclaimer_popup");
    openPopup.style.visibility = 'visible';
    openPopup.style.opacity = 1;

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        openPopup.style.visibility = 'hidden';
        openPopup.style.opacity = 0;
      }
    });
}

function disclaimerPopupClose() {
  const closePopup = document.getElementById("disclaimer_popup");
  closePopup.style.visibility = 'hidden';
  closePopup.style.opacity = 0;
}

function submitNewsletter() {
  document.querySelector(".subscription").classList.add("done");
}

function blogSwitchFirst() {
  const firstBlog = document.getElementById("section-blog_content_first");
  const secondBlog = document.getElementById("section-blog_content_second");
  const thirdBlog = document.getElementById("section-blog_content_third");
  const firstTitle = document.getElementById("section-blog_title_first");
  const secondTitle = document.getElementById("section-blog_title_second");
  const thirdTitle = document.getElementById("section-blog_title_third");
  const firstList = document.getElementById("section-blog_list_first");
  const secondList = document.getElementById("section-blog_list_second");
  const thirdList = document.getElementById("section-blog_list_third");
  window.location = '#HomeBlog';

  if (secondBlog.style.display === "inline-block") {
    secondBlog.style.display = "none";
    firstBlog.style.display = "inline-block";
    secondTitle.style.display = "none";
    firstTitle.style.display = "inline-block";
    secondList.style.display = "inline-block";
    firstList.style.display = "none";
  } else if (thirdBlog.style.display === "inline-block") {
    thirdBlog.style.display = "none";
    firstBlog.style.display = "inline-block";
    thirdTitle.style.display = "none";
    firstTitle.style.display = "inline-block";
    thirdList.style.display = "inline-block";
    firstList.style.display = "none";
  }
}

function blogSwitchSecond() {
  const firstBlog = document.getElementById("section-blog_content_first");
  const secondBlog = document.getElementById("section-blog_content_second");
  const thirdBlog = document.getElementById("section-blog_content_third");
  const firstTitle = document.getElementById("section-blog_title_first");
  const secondTitle = document.getElementById("section-blog_title_second");
  const thirdTitle = document.getElementById("section-blog_title_third");
  const firstList = document.getElementById("section-blog_list_first");
  const secondList = document.getElementById("section-blog_list_second");
  const thirdList = document.getElementById("section-blog_list_third");
  window.location = '#HomeBlog';

  if (firstBlog.style.display === "inline-block") {
    firstBlog.style.display = "none";
    secondBlog.style.display = "inline-block";
    firstTitle.style.display = "none";
    secondTitle.style.display = "inline-block";
    firstList.style.display = "inline-block";
    secondList.style.display = "none";
  } else if (thirdBlog.style.display === "inline-block") {
    thirdBlog.style.display = "none";
    secondBlog.style.display = "inline-block";
    thirdTitle.style.display = "none";
    secondTitle.style.display = "inline-block";
    thirdList.style.display = "inline-block";
    secondList.style.display = "none";
  } 
}

function blogSwitchThird() {
  const firstBlog = document.getElementById("section-blog_content_first");
  const secondBlog = document.getElementById("section-blog_content_second");
  const thirdBlog = document.getElementById("section-blog_content_third");
  const firstTitle = document.getElementById("section-blog_title_first");
  const secondTitle = document.getElementById("section-blog_title_second");
  const thirdTitle = document.getElementById("section-blog_title_third");
  const firstList = document.getElementById("section-blog_list_first");
  const secondList = document.getElementById("section-blog_list_second");
  const thirdList = document.getElementById("section-blog_list_third");
  window.location = '#HomeBlog';

  if (firstBlog.style.display === "inline-block") {
    firstBlog.style.display = "none";
    thirdBlog.style.display = "inline-block";
    firstTitle.style.display = "none";
    thirdTitle.style.display = "inline-block";
    firstList.style.display = "inline-block";
    thirdList.style.display = "none";
  } else if (secondBlog.style.display === "inline-block") {
    secondBlog.style.display = "none";
    thirdBlog.style.display = "inline-block";
    secondTitle.style.display = "none";
    thirdTitle.style.display = "inline-block";
    secondList.style.display = "inline-block";
    thirdList.style.display = "none";
  } 
}