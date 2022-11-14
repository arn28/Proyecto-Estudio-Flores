(function () {
    //Objeto con las propiedades
    var propServicios = {
        widget : document.getElementsByClassName('widget'),
        parrafo : null,
    };

    //Objeto con los metodos
    var metServicios = {
        inicio: function () {

            for (var i = 0; i < propServicios.widget.length; i++) {
                propServicios.widget[i].addEventListener('click', metServicios.evento);                
            }
        },

        evento: function () {
            if (window.outerWidth < 600) {
                if (this.className == 'widget') {
                    for (var i = 0; i < propServicios.widget.length; i++) {
                        propServicios.widget[i].className = 'widget';
                    }
                    this.className = 'widget activo';
                }else{
                    this.className = 'widget';
                }
            }
        }
    };

    metServicios.inicio();  
}())
