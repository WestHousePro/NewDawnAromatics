class Nav extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="header__nav">
        <img
          onclick="navMenu()"
          src="img/icon-menuopen.svg"
          alt="Open Menu Button"
          class="header__nav_open"
          id="header_menuopen"
          style="display: inline"
        />
        <img
          src="img/icon-menuclose.svg"
          alt="Close Menu Button"
          class="header__nav_close"
          id="header_menuclose"
          style="display: none"
        />
      <nav class="header__nav_menu" id="header_menu" style="display: none">
        <ol>
          <a href="#Home" class="header__nav_menu_item">
            <li class="header__nav_menu_list header__nav_menu_list_border">Home</li></a>
          <a href="javascript:;" class="header__nav_menu_item" onclick="consultationPopup()">
            <li class="header__nav_menu_list header__nav_menu_list_border">Consultation</li></a>
          <a href="#HowItWorks" class="header__nav_menu_item">
            <li class="header__nav_menu_list header__nav_menu_list_border">How it Works</li></a>
          <a href="#AboutMe" class="header__nav_menu_item">
            <li class="header__nav_menu_list header__nav_menu_list_border">About Me</li></a>
          <a href="#HomeBlog" class="header__nav_menu_item">
            <li class="header__nav_menu_list">Blog</li></a>
        </ol>
      </nav>
    </div>
        `;
      }
  }

customElements.define('nav-component', Nav);