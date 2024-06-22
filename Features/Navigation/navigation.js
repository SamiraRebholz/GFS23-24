class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
          <ul>
            <li><a href="./index.html"><img src="../Assets/icons/home.svg" alt="home"></a></li>
            <li><a href="./symptoms.html">Diagnostik & Symptome</a></li>
            <li><a href="">Pathophysiologie</a></li>
            <li><a href="">Epidemiologie</a></li>
            <li><a href="">Behandlung</a></li>
            <li><a href="./sources.html">Quellen</a></li>
          </ul>
        </nav>
      `;
    }
  }
  
  customElements.define('my-navbar', MyNavbar);