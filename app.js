document.addEventListener("DOMContentLoaded", function(){

    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector("#spinner");

    // Primero hay que pensar donde se guardará cualquier tipo de dato que introduscamos en los inputs. Hacemos un Objeto

    const email = {
        email: "",
        asunto: "",
        mensaje: ""
    }

    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur",validar);
    inputMensaje.addEventListener("blur", validar);
    formulario.addEventListener("submit", enviarEmail);
    

    function mostrarAlerta(mensaje, referencia){
        const alerta = referencia.querySelector("p");
        if(alerta) {
            alerta.remove();
        }
        const error = document.createElement("p");
        error.textContent = mensaje;
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector("p");
        if(alerta) {
            alerta.remove();
        }
    }

    function validar(e){

        if(e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] ="";
            comprobarEmail();
            return;
        }

        if (e.target.id === `email` && !validarEmail(e.target.value)) {
            mostrarAlerta(`El email no es válido`, e.target.parentElement);
            email[e.target.id]="";
            comprobarEmail();
            return;
        };

        limpiarAlerta(e.target.parentElement);

        email[e.target.id] = e.target.value.trim().toLowerCase();
        console.log(email);

    
        comprobarEmail();
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {

        Object.values(email).includes("");
            
        }
  
        btnReset.addEventListener("click", function(e){
            e.preventDefault();
    
            email.email="";
            asunto.asunto="";
            mensaje.mensaje="";
    
            formulario.reset();
            comprobarEmail();
        })

        function enviarEmail(e){
            e.preventDefault();
    
            spinner.classList.add("flex");
            spinner.classList.remove("hidden");
        }

});