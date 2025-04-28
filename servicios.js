// Función para mostrar un modal con información
function mostrarModal(titulo, contenido) {
    const modal = document.getElementById("infoModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");

    modalTitle.textContent = titulo;
    modalContent.innerHTML = contenido; // Usamos innerHTML para permitir HTML en el contenido
    modal.style.display = "block"; // Mostramos el modal
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById("infoModal");
    modal.style.display = "none"; // Ocultamos el modal
}



document.addEventListener('DOMContentLoaded', () => {
    // Agregamos un event listener al botón de cerrar del modal
    const modalClose = document.querySelector(".modal-close");
    if (modalClose) {
        modalClose.addEventListener("click", cerrarModal);
    }

    // Agregamos event listeners a los elementos de la lista para mostrar el modal
    const listaItems = document.querySelectorAll('.service-details li');
    listaItems.forEach(item => {
        item.addEventListener('click', () => {
            const texto = item.textContent;
            let titulo = texto.split(":")[0];
            let contenido = "Información detallada sobre " + texto;
            let link = "";

            // Modificamos el contenido y el título según el item clickeado
            switch (titulo) {
                case "Diseño de sistemas HVAC":
                    contenido = "Diseño de sistemas de calefacción, ventilación y aire acondicionado.  Más información sobre ASHRAE Standard 62.1.";
                    link = "https://www.ashrae.org/";
                    break;
                case "Diseño de sistemas de iluminación":
                    contenido = "Diseño de sistemas de iluminación interior y exterior. Más información sobre IESNA Lighting Handbook.";
                    link = "https://www.ies.org/";
                    break;
                case "Diseño de sistemas de energía":
                    contenido = "Diseño de sistemas de distribución de energía eléctrica. Más información sobre NEC.";
                    link = "https://www.nfpa.org/NEC";
                    break;
                case "Diseño de sistemas de plomería":
                    contenido = "Diseño de sistemas de suministro de agua y desagüe. Más información sobre IPC.";
                    link = "https://iapmo.org/ipc/";
                    break;
                 case "Análisis de eficiencia energética":
                    contenido = "Análisis y optimización del uso de energía en edificios. Más información sobre LEED.";
                    link = "https://www.usgbc.org/leed";
                    break;
                case "Diseño conceptual":
                    contenido = "Desarrollo de la idea inicial del proyecto arquitectónico. Más información sobre la Bauhaus.";
                    link = "https://www.bauhaus100.de/en/";
                    break;
                case "Desarrollo de diseño":
                    contenido = "Refinamiento del diseño conceptual y creación de planos. Más información sobre ISO 4156.";
                    link = "https://www.iso.org/standard/9821.html";
                    break;
                case "Documentación de construcción":
                    contenido = "Preparación de los documentos necesarios para la construcción. Más información sobre el AIA.";
                    link = "https://www.aia.org/";
                    break;
                case "Diseño de interiores":
                    contenido = "Planificación y diseño de los espacios interiores. Más información sobre NKBA.";
                    link = "https://nkba.org/";
                    break;
                case "Diseño de paisajismo":
                    contenido = "Diseño de espacios exteriores y áreas verdes. Más información sobre ASLA.";
                    link = "https://www.asla.org/";
                    break;
                case "Planificación de proyectos":
                    contenido = "Establecimiento de los objetivos y el alcance del proyecto. Más información sobre PMBOK.";
                    link = "https://www.pmi.org/pmbok-guide";
                    break;
                case "Programación de proyectos":
                    contenido = "Creación de un cronograma detallado del proyecto. Más información sobre Microsoft Project.";
                    link = "https://www.microsoft.com/es-es/microsoft-365/project/project-management-software";
                    break;
                case "Presupuestación de proyectos":
                    contenido = "Estimación de los costos del proyecto. Más información sobre RICS.";
                    link = "https://www.rics.org/";
                    break;
                case "Coordinación de equipos":
                    contenido = "Gestión de la comunicación entre los miembros del equipo. Más información sobre ISO 21500.";
                    link = "https://www.iso.org/standard/50083.html";
                    break;
                case "Supervisión de construcción":
                    contenido = "Supervisión de las actividades de construcción. Más información sobre OSHA.";
                    link = "https://www.osha.gov/";
                    break;
                default:
                    contenido = "Información no disponible.";
            }

            if (link) {
               // Si hay un enlace, abrimos una nueva ventana
                window.open(link, '_blank');
            } else {
                // Si no hay enlace, mostramos el modal con el contenido
                 mostrarModal(titulo, contenido);
            }
        });
    });
});