class Futer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer class="page-footer sani fix_bottom">
        <div class="footer-copyright">
            <div class="container">
                <div class="col s10">&copy; @DateTime.Now.Year - Municipalidad de San Isidro. Todos los derechos reservados</div>
            </div>
        </div>
    </footer>

`;
        
    }
}

window.customElements.define("foo-ter", Futer);