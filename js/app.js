;
(function() {
    window.addEventListener("load", function() {
        var manzana = document.getElementById("manzana");
        var platano = document.getElementById("platano")
        var naranja = document.getElementById("naranja")
        var mandarina = document.getElementById("mandarina")
        var fresa = document.getElementById("fresa")
        var dia = document.getElementsByClassName("alimento");
        var seccion = document.getElementById("menu-de-frutas");
        var contador = 0;

        for (var i = 0; i < dia.length; i++) {
            manzana.addEventListener("dragstart", function(evento) {
                inicio(evento, this);
            });

            dia[i].addEventListener("drop", function(evento) {
                clonar(evento, this);

            });

            dia[i].addEventListener("dragover", function(ev) {
                ev.preventDefault();
            });

            platano.addEventListener("dragstart", function(evento) {
                inicio(evento, this);
            });

            naranja.addEventListener("dragstart", function(evento) {
                inicio(evento, this);
            });

            mandarina.addEventListener("dragstart", function(evento) {
                inicio(evento, this);
            });

            fresa.addEventListener("dragstart", function(evento) {
                inicio(evento, this);
            });
        }

       
        function inicio(e) {
            e.dataTransfer.setData("img", e.target.id); //Coje el elemento que se va a mover
        }

        function clonar(e) {
            var elementoArrastrado = document.getElementById(e.dataTransfer.getData("img")); // Elemento arrastrado
            elementoArrastrado.style.opacity = ''; // Dejamos la opacidad a su estado anterior para copiar el elemento igual que era antes
            var elementoClonado = elementoArrastrado.cloneNode(true); // Se clona el elemento
            elementoClonado.id = "ElemClonado" + contador; // Se cambia el id porque tiene que ser unico
            contador += 1;
            elementoClonado.style.position = "static"; // Se posiciona de forma "normal" (Sino habria que cambiar las coordenadas de la posición)
            e.target.appendChild(elementoClonado); // Se añade el elemento clonado
            e.target.style.border = ''; // Quita el borde del "cuadro clonador"
            	elementoClonado.addEventListener("dblclick",function(){
            		elementoClonado.style.display = "none";
            	});
        }

    });

})()

    