class MisDatos extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div id="mydata" class="col s12">
    <div class="row">
    <div class="col m4 s12">
        <h5>| Mis Datos </h5>
        <br>
        <a class="col s12 centrar btn sani2 modal-trigger tooltipped" href="#modidata" data-position="bottom" data-tooltip="Podés editar algunos datos"><h6 class="tbtn hidemobile">Modificar datos</h6><i class="material-icons mg10">edit</i></a>        <a class="col s12 centrar btn sani2 modal-trigger tooltipped" href="#validar" data-position="bottom" data-tooltip="Cargá tu boleta de ABL"><h6 class="tbtn hidemobile">Agregar ABL</h6><i class="material-icons mg10">upload</i></a>
    </div>
    <div class="col m7 s12">
        <div class="row"><br>
        <div class="row">
            <div class="row mg10">
                <div class="input-field">
                <input disabled value="Juan Pablo Salleras" id="disabled" type="text" class="validate">
                <label for="disabled">Nombre y Apellido</label>
                </div>
                <div class="input-field col s12">
                    <input disabled value="30445995" id="disabled" type="number" class="validate">
                    <label for="disabled">Documento</label>
                </div>
                <div class="input-field col s12 m6">
                    <input disabled value="Mansilla 1475" id="disabled" type="text" class="validate">
                    <label for="disabled">Domicilio</label>
                </div>
                <div class="input-field col s12 m6">
                    <input disabled value="San Isidro" id="disabled" type="text" class="validate">
                    <label for="disabled">Localidad</label>
                </div>
                <div class="input-field col s12">
                    <input disabled value="Sin Observaciones" id="disabled" type="text" class="validate">
                    <label for="disabled">Observaciones del domicilio</label>
                </div>
                <div class="input-field col s12 m6">
                    <input disabled value="15-3336-8474" id="disabled" type="tel" class="validate">
                    <label for="disabled">Nº de contacto</label>
                </div>
                <div class="input-field col s12 m6">
                    <input disabled value="jpsalleras@gmail.com" id="disabled" type="text" class="validate">
                    <label for="disabled">Email</label>
                </div>
              </div>
          
        </div>
          <!-- Modificar datos personales ----------->
          <div id="modidata" class="modal modal-fixed-footer">
                <div class="modal-content">
                    <h4>Editar Datos</h4>
                   <div class="divider"></div><br>
                <div class="input-field col s12 m8">
                <input disabled value="Juan Pablo Salleras" id="disabled" type="text" class="validate">
                <label for="disabled">Nombre y Apellido</label>
                </div>
                <div class="input-field col s12 m4">
                    <input disabled value="30445995" id="disabled" type="number" class="validate">
                    <label for="disabled">Documento</label>
                </div>
                <div class="input-field col s12 m6">
                    <input disabled value="Mansilla 1475" id="disabled" type="text" class="validate">
                    <label for="disabled">Domicilio</label>
                </div>
                <div class="input-field col s12 m6">
                    <input disabled value="San Isidro" id="disabled" type="text" class="validate">
                    <label for="disabled">Localidad</label>
                </div>
                <div class="input-field col s12">
                    <input value="Sin Observaciones" id="enabled" type="text" class="validate">
                    <label for="enabled">Observaciones del domicilio</label>
                </div>
                <div class="input-field col s12 m6">
                    <input value="15-3336-8474" id="enabled" type="tel" class="validate">
                    <label for="enabled">Nº de contacto</label>
                </div>
                <div class="input-field col s12 m6">
                    <input value="jpsalleras@gmail.com" id="enabled" type="text" class="validate">
                    <label for="enabled">Email</label>
                </div>
                </div>
                <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect btn-flat sani2 white-text">Descartar</a>
                    <a href="#!" class="modal-close waves-effect sani btn-flat white-text">Guardar cambios</a>
                </div>
            </div> 
            <!-- agregar abl -->
            <div id="validar" class="modal modal-fixed-footer">
                <div class="modal-content">
                    <h4>Carga de boleta de ABL para validar residencia</h4>
                   <div class="divider"></div><br>
                    <!-- fin titulo -->
                    <!-- CARGA DE DATOS ABL -->
                 <div class="row"></div>
                    <span class="col s12 cv">
                        <i class="material-icons small">
                            arrow_right how_to_reg
                        </i>
                        <h6 class="mg10">En éste paso deberá proporcionar algunos datos a fin de validar su registro.</h6>
                    </span>
                    <div class="input-field col s12 m6">
                        <i class="material-icons prefix">description</i>
                        <input id="npartida" type="tel" class="validate">
                        <label for="npartida">Número de Partida</label>
                    </div>
                    <div class="file-field input-field col s12 m6">
                        <div class="btn sani">
                            <span>ABL.</span>
                            <input type="file">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Cargue su última factura de ABL">
                        </div>
                    </div>
                
                </div>

                    <!-- MODAL FOOTER -->
                <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect btn-flat sani2 white-text">Descartar</a>
                    <a href="#!" class="modal-close waves-effect sani btn-flat white-text">Cargar</a>
                </div>
                </div>

               
            </div>

        </div>
    </div>
</div>
</div>

`;
        
}
}

window.customElements.define("mis-datos", MisDatos);