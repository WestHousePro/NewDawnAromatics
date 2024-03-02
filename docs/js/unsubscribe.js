class Unsubscribe extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <section class="section-unsubscribe">
        <div class="section-unsubscribe_container">
          <img
              src="/img/newsletter_trees.webp"
              alt="Faded Tree and Orange Leaves"
              class="section-unsubscribe_image"
            />
          <div class="section-unsubscribe_content">
           <h2 class="heading-primary-long">Unsubscribe</h2>
            <p class="section-unsubscribe_text"> Sad to see you go! Enter your email to unsubscribe.
            </p>
            <div class="content">
                <form class="subscription" action="https://formspree.io/f/mdoqzjkb" method="POST">
                  <input name="email" class="add-email" type="email" placeholder="unsubscribe@me.now" required>
                  <input type="text" name="_gotcha" class="form_input" />
                  <button class="submit-email" type="submit" id="submit_unsubscribe" onsubmit="submitUnsubscribe();">
                    <span class="before-submit">Unubscribe</span>
                    <span class="after-submit">Your email will be removed from the newsletter</span>
                   </button>
                </form>
            </div>
          </div>
        </div>
      </section>
        `;
      }
  }

customElements.define('unsubscribe-component', Unsubscribe);