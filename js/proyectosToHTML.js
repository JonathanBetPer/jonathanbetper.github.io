fetch('./js/info_proyectos.json')

  .then(response => response.json())
  .then(data => {
    
    var proyectosContainer = document.querySelector('.proyectos.carrusel .carrusel-contenido');
    
    data.proyectos.forEach(function(proyecto) {

        var proyectoElement = document.createElement('div');
        proyectoElement.classList.add('unProyecto', 'carrusel-item');

        //Contenido
        var contenidoElement = document.createElement('div');
        var nombreElement = document.createElement('h3');
        nombreElement.textContent = proyecto.nombre;
        var descripcionElement = document.createElement('p');
        descripcionElement.textContent = proyecto.descripcion;

        //Enlace
        var enlaceElement = document.createElement('a');
        enlaceElement.href = proyecto.url;
        var iconoElement = document.createElement('div');
        iconoElement.classList.add('imagen_proyecto');
        var imagenElement = document.createElement('img');
        imagenElement.src = proyecto.imagen;
        imagenElement.alt = '';


        //Estructura del documento
        iconoElement.appendChild(imagenElement);
        enlaceElement.appendChild(iconoElement);
        contenidoElement.appendChild(nombreElement);
        contenidoElement.appendChild(descripcionElement);
        proyectoElement.appendChild(contenidoElement);
        proyectoElement.appendChild(enlaceElement);


        proyectosContainer.appendChild(proyectoElement);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
