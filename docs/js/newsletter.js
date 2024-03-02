class Newsletter extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <section class="section-newsletter">
        <div class="section-newsletter_container">
          <img
              src="/img/newsletter_trees.webp"
              alt="Faded Tree and Orange Leaves"
              class="section-newsletter_image"
            />
          <div class="section-newsletter_content" id="Newsletter">
           <h2 class="heading-primary-long">Get your weekly dose of nature</h2>
            <p class="section-newsletter_text"> Learn about plants and essential oils. Tips, news, and recipes delivered right to your inbox!
            </p>
            <div class="content">
                <form class="subscription" action="https://formspree.io/f/xqknbzep" method="POST">
                  <input name="email" class="add-email" type="email" placeholder="subscribe@me.now" required>
                  <input type="text" name="_gotcha" class="form_input" />
                  <button class="submit-email" type="submit" id="submit_newsletter" onsubmit="submitNewsletter();">
                    <span class="before-submit">Subscribe</span>
                    <span class="after-submit">Thank you for subscribing!</span>
                   </button>
                </form>
            </div>
          </div>
        </div>
      </section>
        `;
      }
  }

customElements.define('newsletter-component', Newsletter);