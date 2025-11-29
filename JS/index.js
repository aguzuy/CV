document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo");

    const texto = titulo.textContent.trim();
    titulo.textContent = ''; 

    let i = 0;
    const velocidad = 100;

    function escribir() {
      if (i < texto.length) {
        titulo.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, velocidad);
      }
    }

    escribir();

    if (!sessionStorage.getItem("Tab")) {
        sessionStorage.setItem("Tab", "inicio");
    }

    const contenedorBtnCV = document.getElementById("CV-btn");
    const contenedorBtnIni =  document.getElementById("Ini-btn");
    const contenedorBtnOP =  document.getElementById("OP-btn");

    const contenedorTabCV = document.getElementById("CV-tab");
    const contenedorTabIni =  document.getElementById("Ini-tab");
    const contenedorTabOP =  document.getElementById("OP-tab");

    const contenedorContenido = document.getElementById("contenido-tabs");

    let cambiarFondo = false;

    if (!contenedorBtnCV || !contenedorBtnIni || !contenedorBtnOP || !contenedorContenido) {
        console.error("Falta Ini-btn, CV-btn, OP-btn o #tabs en el HTML");
        return;
    }

    //cargar la tab correcta
    const tabGuardada = sessionStorage.getItem("Tab");
    if (tabGuardada === "cv") {
        mostrarCV();
    } else if(tabGuardada === "inicio") {
        mostrarInicio();
    } else {
        mostrarOtrasPaginas();
    }

    function activarTab(tab) {
        // quitar active, activa y no-activa de todos
        contenedorBtnIni.classList.remove("active");
        contenedorBtnCV.classList.remove("active");
        contenedorBtnOP.classList.remove("active");
        contenedorTabIni.classList.remove("activa");
        contenedorTabCV.classList.remove("activa");
        contenedorTabOP.classList.remove("activa");
        contenedorTabIni.classList.remove("no-activa");
        contenedorTabCV.classList.remove("no-activa");
        contenedorTabOP.classList.remove("no-activa");

        if (tab === "inicio"){  
            contenedorBtnIni.classList.add("active");
            contenedorTabIni.classList.add("activa");

            contenedorTabCV.classList.add("no-activa");
            contenedorTabOP.classList.add("no-activa");
        }
        if (tab === "cv"){ 
            contenedorBtnCV.classList.add("active");
            contenedorTabCV.classList.add("activa");

            contenedorTabIni.classList.add("no-activa");
            contenedorTabOP.classList.add("no-activa");
        }
        if (tab === "op"){
            contenedorBtnOP.classList.add("active");
            contenedorTabOP.classList.add("activa");

            contenedorTabCV.classList.add("no-activa");
            contenedorTabIni.classList.add("no-activa");
        }
    }    

    //**Inicio**
    contenedorBtnIni.addEventListener('click', () => {
        mostrarInicio();
        sessionStorage.setItem("Tab", "inicio");
    });

    function mostrarInicio() {
        cambiarFondo = false;
        document.documentElement.style.setProperty('--color-fondo', cambiarFondo ? 'rgb(32, 32, 32)' : 'white');
        activarTab("inicio");
        contenedorContenido.innerHTML = `
            <p>esto es inicio</p>
        `;
    }


    //**CV**

    contenedorBtnCV.addEventListener('click', () => {
        mostrarCV();
        sessionStorage.setItem("Tab", "cv");
    });

    function mostrarCV() {
        cambiarFondo = true;
        document.documentElement.style.setProperty('--color-fondo', cambiarFondo ? 'gb(32, 32, 32)' : 'white');
        activarTab("cv");
        contenedorContenido.innerHTML = `
            <section id="tabs-cv">
                <ul class="nav nav-tabs">
                    <li class="nav-item" id="SM-tab">
                        <a class="nav-link" id="SM-btn" href="#">Sobre Mí</a>
                    </li>
                    <li class="nav-item" id="EX-tab">
                        <a class="nav-link" id="EX-btn" href="#">Experiencia Laboral y Educación</a>
                    </li>
                    <li class="nav-item" id="OE-tab">
                        <a class="nav-link" id="OE-btn" href="#">Otros Estudios</a>
                    </li>
                    <li class="nav-item" id="HI-tab">
                        <a class="nav-link" id="HI-btn" href="#">Habilidades e Idiomas</a>
                    </li>
                </ul>
            </section>

            <section id="contenido-tab-cv">
                <!-- aca va el contenido de cada tab cv -->
            </section>
        `;

        if (!sessionStorage.getItem("Tab-cv")) {
            sessionStorage.setItem("Tab-cv", "sm");
        }

        const contenedorBtnSM = document.getElementById("SM-btn");
        const contenedorBtnEX =  document.getElementById("EX-btn");
        const contenedorBtnOE =  document.getElementById("OE-btn");
        const contenedorBtnHI =  document.getElementById("HI-btn");

        const contenedorTabSM = document.getElementById("SM-tab");
        const contenedorTabEX =  document.getElementById("EX-tab");
        const contenedorTabOE =  document.getElementById("OE-tab");
        const contenedorTabHI =  document.getElementById("HI-tab");

        const contenedorContenidoCV= document.getElementById("contenido-tab-cv");

        if (!contenedorBtnSM || !contenedorBtnEX || !contenedorBtnOE || !contenedorBtnHI || !contenedorContenidoCV) {
            console.error("Falta los btn o el contenedor");
            return;
        }
        
        //cargar la tab correcta
        const tabGuardadaCV = sessionStorage.getItem("Tab-cv");
        if (tabGuardadaCV === "sm") {
            mostrarSM();
        } else if(tabGuardadaCV === "ex") {
            mostrarEX();
        } else if(tabGuardadaCV === "oe") {
            mostrarOE();
        } else {
            mostrarHI();
        }

        function activarTabCV(tab) {
            // quitar active, activa y no-activa de todos
            contenedorBtnSM.classList.remove("active");
            contenedorBtnEX.classList.remove("active");
            contenedorBtnOE.classList.remove("active");
            contenedorBtnHI.classList.remove("active");

            contenedorTabSM.classList.remove("activa");
            contenedorTabEX.classList.remove("activa");
            contenedorTabOE.classList.remove("activa");
            contenedorTabHI.classList.remove("activa");

            contenedorTabSM.classList.remove("no-activa");
            contenedorTabEX.classList.remove("no-activa");
            contenedorTabOE.classList.remove("no-activa");
            contenedorTabHI.classList.remove("no-activa");

            if (tab === "sm"){  
                contenedorBtnSM.classList.add("active");
                contenedorTabSM.classList.add("activa");

                contenedorTabEX.classList.add("no-activa");
                contenedorTabOE.classList.add("no-activa");
                contenedorTabHI.classList.add("no-activa");
            }
            if (tab === "ex"){ 
                contenedorBtnEX.classList.add("active");
                contenedorTabEX.classList.add("activa");

                contenedorTabSM.classList.add("no-activa");
                contenedorTabOE.classList.add("no-activa");
                contenedorTabHI.classList.add("no-activa");
            }
            if (tab === "oe"){
                contenedorBtnOE.classList.add("active");
                contenedorTabOE.classList.add("activa");

                contenedorTabSM.classList.add("no-activa");
                contenedorTabEX.classList.add("no-activa");
                contenedorTabHI.classList.add("no-activa");
            }
            if (tab === "hi"){
                contenedorBtnHI.classList.add("active");
                contenedorTabHI.classList.add("activa");

                contenedorTabSM.classList.add("no-activa");
                contenedorTabEX.classList.add("no-activa");
                contenedorTabOE.classList.add("no-activa");
            }
        }
        
        contenedorBtnSM.addEventListener('click', () => {
            mostrarSM();
            sessionStorage.setItem("Tab-cv", "sm");
        });

        contenedorBtnEX.addEventListener('click', () => {
            mostrarEX();
            sessionStorage.setItem("Tab-cv", "ex");
        });

        contenedorBtnOE.addEventListener('click', () => {
            mostrarOE();
            sessionStorage.setItem("Tab-cv", "oe");
        });

        contenedorBtnHI.addEventListener('click', () => {
            mostrarHI();
            sessionStorage.setItem("Tab-cv", "hi");
        });

        function mostrarSM() {
            activarTabCV("sm");
            contenedorContenidoCV.innerHTML = `
                <h3>Datos Personales</h3>
                <div class="info">
                    <h6>Nombre Completo:</h6> <p>Agustina Lourdes Zarzur Pereyra</p>
                </div>
                <div class="info">
                    <h6>Edad:</h6> <p id="edad"></p>
                </div>
                <div class="info">
                    <h6>Dirección:</h6> <p>Solymar Sur, Canelones</p>
                </div>
                <div id="sobre-mi-desc">
                    <p>
                    Soy una persona responsable, comunicativa y organizada, con experiencia en atención al cliente y un gran interés por el desarrollo de software. 
                    Me adapto con facilidad al trabajo en equipo o individual, y disfruto aprendiendo cosas nuevas.
                    Actualmente busco una oportunidad como programadora junior para seguir creciendo profesionalmente y aplicar mis conocimientos en proyectos reales.
                    </p>
                </div>

                <a id="redirr-ini" href="#">Redes Sociales y Métodos de contacto</a>
            `;

            const contEdad= document.getElementById("edad");
            const cumple= new Date('2002-09-25');

            calcularEdad(cumple);

            function calcularEdad(fechaNac){
                const hoy = new Date();
                let edad = hoy.getFullYear() - fechaNac.getFullYear();
                const mes = hoy.getMonth() - fechaNac.getMonth();

                if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
                    edad--;
                }
                contEdad.innerHTML=`
                ${edad}
                `
            }

            const btnRediRedes= document.getElementById("redirr-ini");

            btnRediRedes.addEventListener('click', () => {
                sessionStorage.setItem("Tab", "inicio");
                location.reload();
            });
        }

        function mostrarEX() {
            activarTabCV("ex");
            contenedorContenidoCV.innerHTML = `
                <table class="table table-group-divider">
                <thead>
                    <tr>
                        <th scope="col" id="trabajos">Experiencia Laboral</th>
                        <th scope="col" id="CH-trabajo">Competencias y habilidades adquiridas</th>
                        <th scope="col" id="eduaciones">Eduacación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <h6 class="trabajo-lugar">Alorica - Call Center</h6>
                            <p class="posicion-trabajo">Agente de call center</p>
                            <p class="trab-duracion">2025 Febrero - 2025 Abril</p>
                        </th>
                        <td class="desc-trabajo">Atención al cliente en inglés, resolviendo consultas y gestionando incidencias de forma eficiente. 
                            Desarrollé habilidades de comunicación, empatía y organización bajo presión.</td>
                        <td>
                            <h6 class="trabajo-lugar">CEIBAL - Jóvenes a Programar Edición 2025</h6>
                            <p class="trab-duracion">2025 Marzo - 2025 Diciembre</p>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">
                        </th>
                        <td>
                        </td>
                        <td>
                            <h6 class="trabajo-lugar">UTU LATU - Tecnólogo en Informática</h6>
                            <p class="trab-duracion">2024 - Actualidad</p>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">
                        </th>
                        <td>
                        </td>
                        <td>
                            <h6 class="trabajo-lugar">UDELAR Facultad de Ingeniería - Ingeniería en Computación (pausado)</h6>
                            <p class="trab-duracion">2021 - Actualidad</p>
                        </td>
                    </tr> 

                    <tr>
                        <th scope="row" class="ult-row-izq">
                        </th>
                        <td>
                        </td>
                        <td class="ult-row-der">
                            <h6 class="trabajo-lugar">Instituto Crandon - Estudios Secundarios - Bachillerato Físico-matemático</h6>
                            <p class="trab-duracion">2015 - 2020</p>
                        </td>
                    </tr> 
                </tbody>
            `;
        }

        function mostrarOE() {
            activarTabCV("oe");
            contenedorContenidoCV.innerHTML = `
                <p>esto es OE</p>
            `;
        }

        function mostrarHI() {
            activarTabCV("hi");
            contenedorContenidoCV.innerHTML = `
                <p>esto es HI</p>
            `;
        }
    }

    //**Otras Páginas**
    contenedorBtnOP.addEventListener('click', () => {
        mostrarOtrasPaginas();
        sessionStorage.setItem("Tab", "op");
    });

    function mostrarOtrasPaginas() {
        cambiarFondo = false;
        document.documentElement.style.setProperty('--color-fondo', cambiarFondo ? 'rgb(32, 32, 32)' : 'white');
        activarTab("op");
        contenedorContenido.innerHTML = `
            <p>esto es op</p>
        `;
    }

});