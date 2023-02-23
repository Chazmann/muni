class validar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<!-- CARGA DE DATOS ABL -->
                 <div class="row"></div>
                    <span class="col s12 cv">
                        <i class="material-icons small">
                            arrow_right how_to_reg
                        </i>
                        <h6 class="mg10">En éste paso deberá proporcionar algunos datos a fin de verificar su residencia en el distrito.</h6>
                    </span>
                    <div class="input-field col s12 m6">
                        <i class="material-icons prefix">description</i>
                        <input id="npartida" type="tel" class="validate">
                        <label for="npartida">Número de Partida</label>
                    </div>
                    <div class="file-field input-field col s12 m6">
                        <div class="btn sani">
                            <span>ABL</span>
                            <input type="file">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Cargue su última factura de ABL">
                        </div>
                    </div>
                
                </div>
`;
        
}
}

window.customElements.define("vali-dar", validar);