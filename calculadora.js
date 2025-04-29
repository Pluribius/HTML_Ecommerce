const servicioCheckboxes = document.querySelectorAll('input[name="servicios"]');
        const detailsDivs = document.querySelectorAll('.details');
        const totalPriceSpan = document.getElementById('total-price');

        servicioCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const detailsDiv = document.getElementById(this.id + '-details');
                detailsDiv.style.display = this.checked ? 'block' : 'none';
            });
        });

        function calculateTotal() {
            let total = 0;
            let hasError = false;

            servicioCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    total += parseInt(checkbox.value);
                    const detailsDivId = checkbox.id + '-details';
                    const detailsDiv = document.getElementById(detailsDivId);
                    if (detailsDiv) {
                        const inputs = detailsDiv.querySelectorAll('input[type="number"], select');
                        inputs.forEach(input => {
                            if (input.type === 'number') {
                                if (parseInt(input.value) < 0) {
                                    alert(`El valor para "${input.labels[0].textContent}" no puede ser negativo.`);
                                    hasError = true;
                                    return; // Salir de la iteración del input
                                }
                            }
                            if (input.value) {
                                // Lógica de cálculo (ajustar según necesidad)
                                total += parseInt(input.value) * 10;
                            }
                        });
                        if (hasError) return; // Salir de la iteración del servicio si hubo un error

                        const selects = detailsDiv.querySelectorAll('select');
                        selects.forEach(select => {
                            total += parseInt(select.value);
                        });
                    }
                }
                if (hasError) return; // Salir de la iteración de los checkboxes si hubo un error
            });

            if (!hasError) {
                totalPriceSpan.textContent = total;
            } else {
                totalPriceSpan.textContent = 'Error en los datos';
            }
        }