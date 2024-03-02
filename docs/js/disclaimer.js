class Disclaimer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <section class="section-disclaimer" id="section-disclaimer">
        <ol class="section-disclaimer_text">
          <li>&copy; Copyright 2024 - All rights reserved</li>
          <li>Built with care by WestHousePros</li>
          <li><span class="section-disclaimer_link" onclick="disclaimerPopup()">Read our disclaimer here</span></li>
        </ol>
        <div class="section-disclaimer_popup" id="disclaimer_popup">
          <div class="section-disclaimer_popup_header"> Disclaimers and Privacy Policy </div>
            <ion-icon
              name="close-outline"
              alt="X Close Button"
              class="section-disclaimer_popup_icon_close"
              id="disclaimer_close"
              onclick="disclaimerPopupClose()">
            </ion-icon>
            <div class="section-disclaimer_popup_text"><p>Health Disclaimer - Clinical Aromatherapists are not doctors and do not diagnose or treat conditions. Rather we use essential oils and herbs to support the body. When used as part of a holistic lifestyle they can assist in greater health, well being and quality of life. Good health is our own personal responsibility and the final decision on any recommendation made is always yours. This should empower each of us knowing that we can make decisions everyday that can impact our health in a positive way. This site is for informational purposes only, and is not to be used or relied on for any diagnostic or treatment purposes. This is not a replacement for seeking medical attention.</p>
            <p>Privacy Policy - This website uses google analytics and cookies to identify where our readers are visiting from, and if they’ve been here previously so we can best serve our audience. We allow people to sign-up for our email newsletter, and your email will only be used for this purpose. Anyone who signs up to our email list can unsubscribe if they choose to leave.
              By using our website you are accepting the use of cookies on our site. If you sign up for our programs or email newsletter you will need to confirm that you’re human and that you agree to these terms.</p>
          </p></div>
        </div>
      </section>
        `;
      }
  }

customElements.define('disclaimer-component', Disclaimer);