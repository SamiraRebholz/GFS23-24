class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
          <ul>
            <li><a href="/workspaces/GFS23-24/index.html"><img src="./Assets/icons/home.svg" alt="home"></a></li>
            <li><a href="/workspaces/GFS23-24/Pages/symptoms.html">Diagnostik & Symptome</a></li>
            <li><a href="">Pathophysiologie</a></li>
            <li><a href="">Epidemiologie</a></li>
            <li><a href="">Behandlung</a></li>
            <li><a href="">Quellen</a></li>
          </ul>
        </nav>
      `;
    }
  }
  
  customElements.define('my-navbar', MyNavbar);