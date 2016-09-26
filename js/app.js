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
            e.dataTransfer.setData("img", e.target.id); 
        }

        function clonar(e) {
            var elementoArrastrado = document.getElementById(e.dataTransfer.getData("img")); 
            elementoArrastrado.style.opacity = ''; 
            var elementoClonado = elementoArrastrado.cloneNode(true); 
            elementoClonado.id = "ElemClonado" + contador;
            contador += 1;
            elementoClonado.style.position = "static"; 
            e.target.appendChild(elementoClonado); 
            e.target.style.border = ''; 
            	elementoClonado.addEventListener("dblclick",function(){
            		elementoClonado.style.display = "none";
            	});
        }
    });
})()

    