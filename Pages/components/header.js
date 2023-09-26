const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <link rel="stylesheet" href="Pages/components/header.css">
  <header>
    <div class="banner">
      <div class="logo">
        <img src="https://github.com/WhyFenceCode/LionSailing/blob/main/Photos/Logo/lion%20Head%20No%20Back%20Purlple.png?raw=true" alt="LionLogo">
        <h1>Lion</h1
      </div>
      <div class="account">
      
      </div>
    </div>
    <div class="navigation">
    
    </div>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
