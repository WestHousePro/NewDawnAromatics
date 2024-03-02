class Consultation extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <section class="section-consultation">
        <div id="consultation_popup" class="section-consultation_popup">
          <h2 class="section-consultation_form_title">Take a step towards better health!</h2>
          <div class="section-consultation_forms">
            <form id="ConsultationForm" action="https://formspree.io/f/mbjwygwk" method="POST">
              <input name="Name" class="section-consultation_form" placeholder="Your Name" type="text" required />
              <input name="Email" class="section-consultation_form" placeholder="Email" type="email" required />
              <input name="Phone Number" class="section-consultation_form" placeholder="Phone Number" type="tel" required />
              <textarea name="Additional Input" class="section-consultation_form" placeholder="Share With Us"></textarea>
              <input type="text" name="_gotcha" class="form_input" />
              <div class="section-consultation_checkbox">
                <input name="Newsletter Signup" class="section-consultation_checkbox_box" type="checkbox" />
                <span>Sign up for our Newsletter!</span> 
              </div>
            </form>
          </div>
          <input id="consultation_submit" onsubmit="consultationThankYou()" form="ConsultationForm" class="btn-small btn-small--green section-consultation_btn" type="submit" />
          <span id="consultation_ty" class="section-consultation_ty">Thank you! Look forward to meeting you</span>
            <h2 class="section-consultation_info_title">What happens next?</h2>
            <div class="section-consultation_text">
              <p class="section-consultation_text_line">You will be contacted to set up a consultation time that works best for you.</p>
              <p class="section-consultation_text_line">1½ - 2 Hour Consultation - $150</p>
              <p class="section-consultation_text_line">Consultations are currently conducted via zoom.</p>
              <p class="section-consultation_text_line">Want to see if this is a good fit for you? Request a 15 minute complimentary introduction so we can get to know each other. </p>
            </div>
            <button class="btn-small btn-small--green-white section-consultation_btn2" onclick="consultationPopupClose()">Close</button>
  
        </div>
      </section>
        `;
      }
  }

customElements.define('consultation-component', Consultation);