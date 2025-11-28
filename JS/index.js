document.addEventListener("DOMContentLoaded", () => {
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
        activarTab("cv");
        contenedorContenido.innerHTML = `
            <p>esto es cv</p>
        `;
    }

    //**Otras Páginas**
    contenedorBtnOP.addEventListener('click', () => {
        mostrarOtrasPaginas();
        sessionStorage.setItem("Tab", "op");
    });

    function mostrarOtrasPaginas() {
        activarTab("op");
        contenedorContenido.innerHTML = `
            <p>esto es op</p>
        `;
    }
});