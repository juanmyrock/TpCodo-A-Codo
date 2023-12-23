document.addEventListener("DOMContentLoaded", function () {
    let cardBodies = document.querySelectorAll(".card-body");
    let categoriaSelect = document.getElementById("categoria");

    cardBodies.forEach(function (cardBody) {
        cardBody.addEventListener("click", function () {
            let categoria = cardBody.closest(".card").querySelector("h4").textContent.trim().toLowerCase();
            categoriaSelect.value = getCategoriaValue(categoria);
            calcularDescuento();
        });

        // Oscurecer card-body al pasar el ratón
        cardBody.addEventListener("mouseover", function () {
            cardBody.style.backgroundColor = "#d3d3d3";
        });

        cardBody.addEventListener("mouseout", function () {
            cardBody.style.backgroundColor = "";
        });
    });

    // Calcular descuento al cambiar la categoría
    categoriaSelect.addEventListener("change", function () {
        calcularDescuento();
    });

    // Calcular descuento al cargar la página
    calcularDescuento();

    // Botón Calcular Total
    document.getElementById("resumen").addEventListener("click", function (event) {
        event.preventDefault();
        calcularDescuento();
    });

    // Botón Borrar
    document.getElementById("borrar").addEventListener("click", function (event) {
        event.preventDefault();
        resetForm();
    });

    // Botón Comprar
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Compra realizada. ¡Gracias!");
        resetForm();
    });

    // Función para calcular el descuento y actualizar el total a pagar
    function calcularDescuento() {
        var precioBase = 1000;
        var descuento = 0;

        var categoria = categoriaSelect.value;
        switch (categoria) {
            case "1":
                descuento = 0.8; // 80%
                break;
            case "2":
                descuento = 0.5; // 50%
                break;
            case "3":
                descuento = 0.15; // 15%
                break;
            default:
                descuento = 0; // Sin descuento
                break;
        }

        var cantidad = document.getElementById("cant").value;
        var total = precioBase * cantidad * (1 - descuento);

        document.getElementById("total").textContent = "Total a pagar: $" + total.toFixed(2);
    }

    // Función para resetear el formulario
    function resetForm() {
        document.getElementById("name").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("cant").value = "";
        categoriaSelect.value = "0";
        document.getElementById("total").textContent = "Total a pagar: $";
    }

    // Función para obtener el valor de la categoría
    function getCategoriaValue(categoria) {
        switch (categoria) {
            case "estudiante":
                return "1";
            case "trainee":
                return "2";
            case "junior":
                return "3";
            default:
                return "0";
        }
    }
});
