class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
      <div class="footer_container">
        <div class="footer_boxes footer_boxes_firstline">
          <ol>
            <li class="footer_boxes_text">
              <a href="#Home">
              Home</a>
            </li>
            <li class="footer_boxes_text">
              <a href="#HowItWorks">
              How it works</a>
            </li>
            <li class="footer_boxes_text">
              <a href="#AboutMe">
              About me</a>
            </li>
          </ol>
        </div>
        <div class="footer_boxes footer_boxes_secondline">
          <ol>
            <li class="footer_boxes_text">
              <a href="#Newsletter">
              Newsletter</a>
            </li>
            <li class="footer_boxes_text">
              <span class="footer_boxes_text_consultation" onclick="consultationPopup()">
              Consultation</span>
            </li>
            <li class="footer_boxes_text">
              <a href="#HomeBlog">
              Blog</a>
            </li>
          </ol>
        </div>
        <div>
            <div class="footer_boxes footer_boxes_thirdline">
              <a href="mailto:info@newdawnaromatics.com">
                <ion-icon
                  name="mail-open"
                  alt="E-Mail Icon"
                  class="section-about_icon section-about_icon_mail">
              </ion-icon>
              </a>
              <a href="https://www.facebook.com/newdawnaromatics/">
                <ion-icon
                  name="logo-facebook"
                  alt="Facebook Icon"
                  class="section-about_icon section-about_icon_facebook">
              </ion-icon>
              </a>
              <a href="https://www.youtube.com/channel/UCQNhPQ_ErNPKXLUr44VSEzg">
                <ion-icon
                  name="logo-youtube"
                  alt="Youtube Icon"
                  class="section-about_icon section-about_icon_youtube">
                </ion-icon>
              </a>
              <a href="https://www.instagram.com/newdawnaromatics/">
                <ion-icon
                  name="logo-instagram"
                  alt="Instagram Icon"
                  class="section-about_icon section-about_icon_instagram">
                </ion-icon>
              </a>
            </div>
          <span class="footer_boxes_text">
            <a href="tel:(770)335-5628">(770) 335-5628</a>
          </span>
        </div>
      </div>
    </footer>
        `;
      }
  }

customElements.define('footer-component', Footer);