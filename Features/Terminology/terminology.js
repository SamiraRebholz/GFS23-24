/*class TerminologyModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal" id="terminologyModal" style="display: none;">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Terminologie</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        `;
    }
} customElements.define('terminology-modal', TerminologyModal);

const modal = document.getElementById('terminologyModal');
const modalOpener = document.getElementById('openTerminology');
const closeButton = document.querySelector('.close');

// Wenn auf modalOpener geklickt wird, wird das Modal angezeigt
modalOpener.addEventListener('click', function() {
    modal.style.display = "block";
});

// Wenn auf closeButton geklickt wird, wird das Modal geschlossen
closeButton.addEventListener('click', function() {
    modal.style.display = "none";
});*/
class TerminologyModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal" id="terminologyModal" style="display: none;">
            <div class="modal-content">
                <span class="close"><img src="../Assets/icons/closeWhite.svg"></span>
                <h2>Terminologie</h2>
                <table class="modal-table">
                    <tr>
                        <td>Terminologie/Fachbegriff</td>
                        <td>Bedeutung</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
            </div>
        </div>
        `;

        this.querySelector('.close').addEventListener('click', () => {
            this.hide();
        });
    }

    show() {
        this.querySelector('.modal').style.display = 'block';
    }

    hide() {
        this.querySelector('.modal').style.display = 'none';
    }
}
customElements.define('terminology-modal', TerminologyModal);

const modalOpener = document.getElementById('openTerminology');
modalOpener.addEventListener('click', () => {
    document.querySelector('terminology-modal').show();
    console.log('Modal opened');
});