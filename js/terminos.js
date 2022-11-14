(function () {
    //Objeto con las propiedades de los terminos
    var propTerminos ={
        linkTerminos : document.getElementById('abrirTerminos'),
        cuerpoDom : document.getElementsByTagName('body')[0],
        terminosContenedor: null,
        modal: null,
        cerrarModal : null
    }

    //Objeto con los metodos de los terminos
    var metTerminos ={
        inicio: function () {
            propTerminos.linkTerminos.addEventListener('click', metTerminos.mostrarTerminos);
        },

        mostrarTerminos: function (e) {
            e.preventDefault();
            propTerminos.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id','terminosContenedor');
            propTerminos.terminosContenedor = document.getElementById('terminosContenedor');
            propTerminos.terminosContenedor.style.width = '100%';
            propTerminos.terminosContenedor.style.height = '100%';
            propTerminos.terminosContenedor.style.position = 'fixed';
            propTerminos.terminosContenedor.style.zIndex = '1000';
            propTerminos.terminosContenedor.style.background = 'rgba(0,0,0,0.8)';
            propTerminos.terminosContenedor.style.top = '0';
            propTerminos.terminosContenedor.style.left = '0';
            propTerminos.terminosContenedor.appendChild(document.createElement('DIV')).setAttribute('id','modal');
            propTerminos.modal = document.getElementById('modal');
            
            //Inserta el texto de Terminos y condiciones
            propTerminos.modal.innerHTML += '<h3>Términos y Condiciones</h3>'+
            '<p>Los términos y condiciones ("Términos") son un conjunto de términos legales definidos por el propietario de una página web. Establecieron los términos y condiciones que rigen las actividades de los visitantes de la página web en dicho sitio web y la relación entre los visitantes del sitio y el propietario del sitio web. <br> <br>'+
            'Los términos deben definirse de acuerdo con las necesidades específicas y la naturaleza de cada página web. Por ejemplo, una página web que ofrece productos a clientes en transacciones de comercio electrónico requiere términos que son diferentes de los términos de una página web que solo proporciona información. <br> <br>'+
            'Los Términos son un acuerdo entre el propietario del sitio web y los usuarios de la página web; detallan las políticas y procedimientos realizados por el sitio web. En muchos sentidos, los Términos brindan al propietario de la página web la posibilidad de protegerse de una posible exposición legal. <br><br>'+
            'Además, existen obligaciones legales para notificar a los usuarios de página web de tales actividades, y en muchos casos los Términos son el lugar indicado para hacerlo. <br><br>'+
            'Por lo tanto, es muy importante y muy recomendable que las páginas web tengan términos claros y completos que se ajusten y adapten al sitio web específico y a tus actividades. <br><br>'+
            '<span> Importante:</span> <br>'+
            'Las explicaciones y la información proporcionadas en este documento son solo explicaciones generales y de alto nivel, información y muestras. No debes confiar en este artículo como asesoramiento legal o como recomendaciones con respecto a lo que realmente debes hacer. Te recomendamos que busques asesoramiento legal para ayudarte a comprender y ayudarte a crear tus Términos.'+
            '</p>'
            
            propTerminos.modal.innerHTML += '<i id = "cerrar_modal" class="fa-solid fa-xmark"></i>';

            propTerminos.modal.style.opacity = 0;
                setTimeout(function () {
                    propTerminos.modal.style.opacity = 1;                
                }, 40)

            //asigna el icono cerrar
            propTerminos.cerrarModal = document.getElementById('cerrar_modal');
            propTerminos.cerrarModal.addEventListener('click', metTerminos.cerrarModal);
        },

        //elminina el DIV creado en body
        cerrarModal: function(){
            propTerminos.cuerpoDom.removeChild(propTerminos.terminosContenedor);
        }
    }

    metTerminos.inicio();
}())
