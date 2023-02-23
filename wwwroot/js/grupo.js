class GrupoFam extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div id="grupo" class="col s12">
    <div class="row">
    <div class="col m4 s12">
        <h5>| Grupo Familiar </h5>
        <br>
        <a class="col s12 centrar btn sani2 modal-trigger tooltipped" href="#addperson" data-position="bottom" data-tooltip="Podés agregar un familiar desde aquí"><h6 class="tbtn hidemobile">Agregar vínculo</h6><i class="material-icons mg10">person_add</i></a>
        
    </div>
    <div class="col m7 s12">
        <div class="row">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header"><i class="material-icons">person</i>Agustina Ampudia (esposa)</div>
                    <div class="collapsible-body">
                    <div class="row">
                            <div class="input-field col s12">
                                 <input disabled value="29445995" id="disabled" type="number">
                                <label for="disabled">Documento</label>
                            </div>
                            <div class="input-field col s12">
                                <input disabled value="Esposa" id="disabled" type="text">
                                <label for="disabled">Tipo de vínculo</label>
                            </div>
                            <div class="input-field col s12">
                                 <input disabled value="11-3532-2253" id="disabled" type="tel">
                                <label for="disabled">Teléfono de contacto</label>
                            </div>
                            <div class="input-field col s12">
                                 <input disabled value="agus_ampudia@gmail.com" id="disabled" type="email">
                                <label for="disabled">Correo electrónico</label>
                            </div>

                        </div>
                        
                        <!-- BOTONERA SOLICITUDES -->
                        <div class="row">
                            <a class="col s6 centrar btn sani modal-trigger" href="#editdata" ><h6 class="tbtn hidemobile">Editar</h6><i class="material-icons mg10">edit</i></a>
                            <a class="col s6 centrar btn sani2 modal-trigger" href="#baja-vinculo" ><h6 class="tbtn hidemobile">Eliminar</h6><i class="material-icons mg10">cancel</i></a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="collapsible-header"><i class="material-icons">person</i>Joaquín Gonzalez Ampudia (hijo)</div>
                    <div class="collapsible-body">
                        <div class="row">
                            <div class="input-field col s12">
                                 <input disabled value="40445995" id="disabled" type="number">
                                <label for="disabled">Documento</label>
                            </div>
                            <div class="input-field col s12">
                                <input disabled value="Hijo" id="disabled" type="text">
                                <label for="disabled">Tipo de vínculo</label>
                            </div>
                            <div class="input-field col s12">
                                 <input disabled value="11-2332-2263" id="disabled" type="tel">
                                <label for="disabled">Teléfono de contacto</label>
                            </div>
                            <div class="input-field col s12">
                                 <input disabled value="joaquingona@gmail.com" id="disabled" type="email">
                                <label for="disabled">Correo electrónico</label>
                            </div>

                        </div>
                        
                        <!-- BOTONERA SOLICITUDES -->
                        <div class="row">
                            <a class="col s6 centrar btn sani modal-trigger" href="#editdata" ><h6 class="tbtn hidemobile">Editar</h6><i class="material-icons mg10">edit</i></a>
                            <a class="col s6 centrar btn sani2 modal-trigger" href="#baja-vinculo" ><h6 class="tbtn hidemobile">Eliminar</h6><i class="material-icons mg10">cancel</i></a>
                        </div>
                    </div>
                </li>
                
                
                </ul>
           
        </div>
        <!------------ MODAL PARA SOLICITUDES --------------------------------------->
            <!-- EDITAR DATOS VINCULO ----------->
            <div id="editdata" class="modal modal-fixed-footer">
                <div class="modal-content">
                    <h4>Editar Datos</h4>
                    <p>Datos a editar</p>
                </div>
                <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect btn-flat sani2 white-text">Descartar</a>
                    <a href="#!" class="modal-close waves-effect btn-flat">Guardar</a>
                </div>
            </div>

            
             <!-- AGREGAR VINCULO ----------->
             <div id="addperson" class="modal modal-fixed-footer">
    <div class="modal-content">

        <h4>Agregar vínculo</h4>
        <p>Ingresar datos de búsqueda</p>

        <div class="row">
            <div class="input-field col s12 m6">
                <i class="material-icons prefix">pin</i>
                <input id="dni1" type="tel" class="validate">
                <label for="dni1">Número de documento</label>
            </div>
            <div class="input-field col s12 m6">
                <select class="icons" required>
                    <option value="" disabled selected>Elija su opción</option>
                    <option value="F" data-icon="../wwwroot/images/female.png">Femenino</option>
                    <option value="M" data-icon="../wwwroot/images/male.png">Masculino</option>
                </select>
                <label>Seleccione su sexo:</label>
            </div>
            
            <button class="col s12 btn waves-effect sani white-text" type="submit" name="action">Buscar
    <i class="material-icons right">search</i>
  </button>
            
        </div>


    </div>
    <!-- FIN CONTENIDO MODAL -->

    <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect btn-flat sani2 white-text">Descartar</a>
        <a href="#!" class="modal-close waves-effect btn-flat sani white-text">Agregar</a>
    </div>

</div>
            
           
            <!-- ELIMINAR VINCULO ----------->
            <div id="baja-vinculo" class="modal">
                <div class="modal-content">
                    <h4>Eliminar vínculo</h4>
                    <p>Está a punto de eliminar ésta persona.</p>
                    <p>¿Desea continuar?</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect btn-flat sani2 white-text">Cancelar</a>
                    <a href="#!" class="modal-close waves-effect btn-flat sani white-text">Confirmar</a>
                    
                </div>
            </div>
            <!------------ FIN ÁREA MODAL PARA SOLICITUDES --------------------------------------->
    </div>
</div>
</div>

`;

    }
}

window.customElements.define("grupo-fami", GrupoFam);