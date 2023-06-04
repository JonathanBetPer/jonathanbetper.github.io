document.getElementById('formulario').addEventListener('submit', function(event) 
    {
        event.preventDefault(); // No envía formulario por defecto

        // Nombre
        var nombreInput = document.getElementById('nombre');
        var nombreValue = nombreInput.value.trim();
        if (nombreValue === '') {
            alert('Por favor, ingresa tu nombre.');
            nombreInput.focus();
            return;
        }

        // Teléfono
        var telefonoInput = document.getElementById('telefono');
        var telefonoValue = telefonoInput.value.trim();
        if (telefonoValue === '') {
            alert('Por favor, ingresa tu teléfono.');
            telefonoInput.focus();
            return;
        }

        // Email
        var correoInput = document.getElementById('correo');
        var correoValue = correoInput.value.trim();
        if (correoValue === '') {
            alert('Por favor, ingresa tu correo.');
            correoInput.focus();
            return;
        }

        // Mensjae
        var mensajeInput = document.getElementById('mensaje');
        var mensajeValue = mensajeInput.value.trim();
        if (mensajeValue === '') {
            alert('Por favor, ingresa tu mensaje.');
            mensajeInput.focus();
            return;
        }
    
    }
);
