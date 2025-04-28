document.addEventListener('DOMContentLoaded', () => {
    const serviciosData = [
        {
            nombre: 'Ingeniería Mecánica y Eléctrica',
            opciones: [
                { nombre: 'Diseño de sistemas HVAC', precio: 1000, codigo: 'HVAC' },
                { nombre: 'Diseño de sistemas de iluminación', precio: 800, codigo: 'ILUM' },
                { nombre: 'Diseño de sistemas de energía', precio: 1200, codigo: 'ENERG' },
                { nombre: 'Diseño de sistemas de plomería', precio: 900, codigo: 'PLOM' },
                { nombre: 'Análisis de eficiencia energética', precio: 1100, codigo: 'EFIC' },
            ],
            paquetes: [
                { nombre: 'Paquete HVAC + Iluminación', opciones: ['HVAC', 'ILUM'], descuento: 0.15 },
                { nombre: 'Paquete Energía + Eficiencia', opciones: ['ENERG', 'EFIC'], descuento: 0.10 },
            ],
        },
        {
            nombre: 'Diseño Arquitectónico',
            opciones: [
                { nombre: 'Diseño conceptual', precio: 1500, codigo: 'CONC' },
                { nombre: 'Desarrollo de diseño', precio: 2000, codigo: 'DESD' },
                { nombre: 'Documentación de construcción', precio: 2500, codigo: 'DOCC' },
                { nombre: 'Diseño de interiores', precio: 1800, codigo: 'INTD' },
                { nombre: 'Diseño de paisajismo', precio: 1200, codigo: 'PAIS' },
            ],
            paquetes: [
                { nombre: 'Paquete Diseño Conceptual + Desarrollo', opciones: ['CONC', 'DESD'], descuento: 0.20 },
                { nombre: 'Paquete Diseño Interiores + Paisajismo', opciones: ['INTD', 'PAIS'], descuento: 0.10 },
            ],
        },
        {
            nombre: 'Gestión de Proyectos',
            opciones: [
                { nombre: 'Planificación de proyectos', precio: 2000, codigo: 'PLAN' },
                { nombre: 'Programación de proyectos', precio: 1500, codigo: 'PROG' },
                { nombre: 'Presupuestación de proyectos', precio: 1800, codigo: 'PRESP' },
                { nombre: 'Coordinación de equipos', precio: 2200, codigo: 'COORD' },
                { nombre: 'Supervisión de construcción', precio: 2500, codigo: 'SUPER' },
            ],
            paquetes: [
                { nombre: 'Paquete Planificación + Programación', opciones: ['PLAN', 'PROG'], descuento: 0.15 },
                { nombre: 'Paquete Coordinación + Supervisión', opciones: ['COORD', 'SUPER'], descuento: 0.25 },
            ],
        },
    ];

    function calcularPrecio() {
        let precioTotal = 0;
        const serviciosSeleccionados = [];
        const paquetesSeleccionados = [];

        serviciosData.forEach((servicio, index) => {
            const servicioElement = document.getElementById(`servicio-${index}`);
            if (!servicioElement) return;

            const opcionesSeleccionadas = [];
            let servicioSeleccionado = false;

            servicio.opciones.forEach(opcion => {
                const opcionInput = document.getElementById(opcion.codigo);
                if (opcionInput && opcionInput.checked) {
                    precioTotal += opcion.precio;
                    opcionesSeleccionadas.push(opcion.codigo);
                    servicioSeleccionado = true;
                }
            });

            if (servicioSeleccionado) {
                serviciosSeleccionados.push({
                    nombre: servicio.nombre,
                    opciones: opcionesSeleccionadas,
                    indice: index,
                });
            }

            servicio.paquetes.forEach(paquete => {
                const paqueteSeleccionado = paquete.opciones.every(opcionCodigo => opcionesSeleccionadas.includes(opcionCodigo));
                if (paqueteSeleccionado) {
                    const paqueteInfoElement = document.getElementById(`paquete-${index}-${paquete.opciones.join('-')}`);
                    if (paqueteInfoElement) {
                        paqueteInfoElement.classList.add('show');
                    }
                    precioTotal *= (1 - paquete.descuento);
                    paquetesSeleccionados.push({
                        nombre: paquete.nombre,
                        descuento: paquete.descuento,
                        servicioIndice: index,
                    });
                }
            });
        });

        // Descuento por múltiples servicios y paquetes
        if (serviciosSeleccionados.length > 1 && paquetesSeleccionados.length > 1) {
            const descuentoTotal = 0.10;
            precioTotal *= (1 - descuentoTotal);
            const descuentoInfoElement = document.getElementById('descuento-multiple');
            if (descuentoInfoElement) {
                descuentoInfoElement.classList.add('show');
            }
        }

        const resultadoElement = document.getElementById('resultado-calculo');
        if (resultadoElement) {
            resultadoElement.textContent = `Precio Total: $${precioTotal.toFixed(2)}`;
            resultadoElement.classList.add('show');
        }
    }

    const serviciosContainer = document.querySelector('.container');
    if (serviciosContainer) {
        serviciosData.forEach((servicio, index) => {
            const servicioHTML = document.createElement('div');
            servicioHTML.id = `servicio-${index}`;
            servicioHTML.className = 'servicio-card card';
            servicioHTML.innerHTML = `
                <h2 class="servicio-titulo">${servicio.nombre}</h2>
                ${servicio.opciones.map(opcion => `
                    <div class="opcion-grupo">
                        <div class="opcion-item">
                            <input type="checkbox" id="${opcion.codigo}" name="opcion-${opcion.codigo}" value="${opcion.codigo}">
                            <label for="${opcion.codigo}">${opcion.nombre} - $${opcion.precio}</label>
                        </div>
                    </div>
                `).join('')}
                ${servicio.paquetes.map(paquete => `
                    <div
                        key="${index}-${paquete.opciones.join('-')}"
                        id="paquete-${index}-${paquete.opciones.join('-')}"
                        class="paquete-info"
                    >
                        Paquete ${paquete.nombre}: ${paquete.descuento * 100}% de descuento aplicado.
                    </div>
                `).join('')}
            `;
            serviciosContainer.appendChild(servicioHTML);
        });

        const descuentoHTML = document.createElement('div');
        descuentoHTML.id = 'descuento-multiple';
        descuentoHTML.className = 'descuento-info';
        descuentoHTML.textContent = 'Descuento del 10% aplicado por seleccionar múltiples servicios y paquetes.';
        serviciosContainer.appendChild(descuentoHTML);

        const calcularButtonHTML = document.createElement('button');
        calcularButtonHTML.id = 'calcular-button';
        calcularButtonHTML.className = 'mt-4 boton-contacto';
        calcularButtonHTML.textContent = 'Calcular Precio';
        calcularButtonHTML.addEventListener('click', calcularPrecio);
        serviciosContainer.appendChild(calcularButtonHTML);

        const resultadoHTML = document.createElement('div');
        resultadoHTML.id = 'resultado-calculo';
        resultadoHTML.className = 'mt-8 card';
        resultadoHTML.textContent = 'Precio Total:';
        serviciosContainer.appendChild(resultadoHTML);
    }
    else{
        console.error("No se encontró el contenedor de servicios");
    }
});
