$.validator.addMethod("terminaEn",function(value, element,parametro){
    if (value.endsWith(parametro)){
        return true;
    }
    return false;
}, "Debe terminar por {0}")


$("#form").validate({
    rules: {
        firstname: {
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        lastname: {
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        email: {
            required: true,
            email: true,
            terminaEn: ".com"

        },
        genero: {
            required: true,
        },

        date: {
            required: true,
        },

        phone: {
            required: true,
            number: true,
            minlength:9,
            maxlength: 9,
        },

        mensaje: {
            required: true,
            minlength: 5,
            maxlength: 200,
        }
    }
})
    


$("#enviar").click (function() {
    if ($("#form").valid() == false){
        return;
    }else {
        alert("Hola\n" +$("#firstname").val() + " "+ $("#lastname").val()+"\nGenero: "+$("#genero").val() + "\nFecha de Nacimiento: "+$("#date").val() +"\nCorreo: "+$("#email").val()+"\nCelular "+$("#phone").val())
    }

    let firstname = $("#firstname").val()
    let lastname = $("#lastname").val()
    let genero = $("#genero").val()
    let date = $("#date").val()
    let email = $("#email").val()
    let phone = $("#phone").val()
    let mensaje = $("#mensaje").val()

})
