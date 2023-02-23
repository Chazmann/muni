class HeaderLogged extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<header class="nav-wrapper sani ">
<div class="container">
    <nav class="transparent row s12 cv left-align  bxn">
        <div class="col s6 m4 l4 pull-l2 offset-l2">
            <a href="#" class="">
                <img src="../wwwroot/images/logo.png" alt="" srcset="" class="responsive-img">
            </a>
        </div>
        <div class="col s5 m4 offset-m3 l4 offset-l2 right-align">
            <!-- MOSTRAR USUARIO SI SESIÓN INICIADA -->
            <span class="sm-txt">Hola @USUARIO</span>
            <span class="mg10"><a class="waves-effect" href="login.html"><i class="sm material-icons">logout</i></a></span>
            
        </div>
        <div class="col s1">
            <a href="#" data-target="slide-out" class="sidenav-trigger">
                <i class="material-icons">menu</i>
            </a>
        </div>
    </nav>
</div>

<ul id="slide-out" class="sidenav">
    <li>
        <div class="user-view sani left-align">
            <a href="#user"><img class="circle" src="../wwwroot/images/def_avatar.jpg"></a>
            <a href="#name"><span class="white-text name">Juan Pablo Salleras</span></a>
            <a href="#email"><span class="white-text email">jpsalleras@gmail.com</span></a>
        </div>
    </li>
    <li><a href="logged_v2copy.html#misdatos" target="_self"><i class="material-icons">person_pin</i>Mis Datos</a></li>
    <li>
        <div class="divider"></div>
    </li>
    <li><a href="logged_v2copy.html#grupo" target="_self"><i class="material-icons">groups</i>Grupo Familiar</a></li>
    <li><a href="logged_v2copy.html#tarjeta" target="_self"><i class="material-icons">badge</i>Tarjetas</a></li>  
    <li>
        <div class="divider"></div>
    </li>
    <li><a class="waves-effect" href="login.html"><i class="material-icons">logout</i>Cerrar sesión</a></li>
</ul>

</header>
`;
        
}
}

window.customElements.define("head-log", HeaderLogged);