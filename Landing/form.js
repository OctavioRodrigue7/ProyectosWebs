var nombre = document.getElementById("nombre");
var email = document.getElementById("mail");
var input_sumbit = document.getElementById("input_sumbit");
var feedback = document.getElementById('feedback');

input_sumbit.addEventListener("click", enviarformulario);

function enviarformulario(event) {
    event.preventDefault();

    if (nombre.checkValidity() && email.checkValidity()) {
        console.log("hemos hecho click");
        var valornombre = nombre.value.trim();
        var valoremail = email.value.trim();

        var placeholder_nombre = document.getElementById('nombre_placeholder');
        var placeholder_mail = document.getElementById('mail_placeholder');
        var divOcultarForm = document.getElementById('ocultarform');
        var image = document.getElementById('image');
        
        placeholder_nombre.innerHTML = valornombre;
        placeholder_mail.innerHTML = valoremail;

        if (divOcultarForm) {
            Array.from(divOcultarForm.children).forEach(function(child) {
                if (child !== image) {
                    child.classList.add('oculto');
                }
            });
        }
        if (feedback){
            feedback.classList.remove('oculto');
        }
    } else {
        nombre.reportValidity();
        email.reportValidity();
    }
}

document.getElementById('boton').addEventListener('click', function(){
    var formulario = document.getElementById('formulario');
    formulario.classList.remove('oculto');

    if (!formulario.classList.contains('oculto')){
        this.disabled = true;
    }
});

document.getElementById('boton2').addEventListener('click', function(){
    var formulario = document.getElementById('formulario');
    formulario.classList.remove('oculto');

    if (!formulario.classList.contains('oculto')){
        this.disabled = true;
    }
});

document.getElementById('quit').addEventListener('click', function(){
var formulario = document.getElementById('formulario');
formulario.classList.add('oculto');

document.getElementById('boton').disabled = false;
document.getElementById('boton2').disabled = false;

});
