function validarRespuestas() {
    const respuestasCorrectas = {
        q1: 'f',
        q2: 'v',
        q3: 'v',
        q4: 'v',
        q5: 'v',
        q6: 'v',
        q7: 'v',
        q8: 'f',
        q9: 'v',
    };

    const mensajesDeRetroalimentacion = {
        q1: {
            correcto: '¡Bien hecho! Entendiste que ningún sistema puede prevenir todos los ataques. <br>Respuesta correcta: Falso',
            incorrecto: 'Un ambiente de seguridad reduce el riesgo, pero no lo elimina. <br>Respuesta correcta: Falso'
        },
        q2: {
            correcto: '¡Correcto! La seguridad abarca tanto amenazas internas como externas. <br>Respuesta correcta: Verdadero',
            incorrecto: 'La seguridad en sistemas operativos cubre amenazas tanto internas como externas. <br>Respuesta correcta: Verdadero'
        },
        q3: {
            correcto: '¡Bien! Bell-LaPadula se enfoca en la confidencialidad. <br>Respuesta correcta: Verdadero',
            incorrecto: 'Bell-LaPadula se centra en mantener la confidencialidad. <br>Respuesta correcta: Verdadero'
        },
        q4: {
            correcto: '¡Exacto! El control de acceso protege contra accesos no autorizados. <br>Respuesta correcta: Verdadero',
            incorrecto: 'El control de acceso es fundamental para proteger contra accesos no autorizados. <br>Respuesta correcta: Verdadero'
        },
        q5: {
            correcto: '¡Correcto! Las matrices de acceso gestionan permisos eficientemente. <br>Respuesta correcta: Verdadero',
            incorrecto: 'Las matrices de acceso son herramientas para gestionar permisos. <br>Respuesta correcta: Verdadero'
        },
        q6: {
            correcto: '¡Perfecto! El modelo Biba prioriza la integridad de los datos. <br>Respuesta correcta: Verdadero',
            incorrecto: 'El modelo Biba se centra en la integridad. <br>Respuesta correcta: Verdadero'
        },
        q7: {
            correcto: '¡Muy bien! En DAC, los usuarios controlan los permisos de sus recursos. <br>Respuesta correcta: Verdadero',
            incorrecto: 'En DAC, los usuarios pueden gestionar los permisos de sus recursos. <br>Respuesta correcta: Verdadero'
        },
        q8: {
            correcto: '¡Correcto! No existe un sistema completamente libre de vulnerabilidades. <br>Respuesta correcta: Falso',
            incorrecto: 'No existe un sistema completamente libre de vulnerabilidades. <br>Respuesta correcta: Falso'
        },
        q9: {
            correcto: '¡Bien hecho! RBAC asigna permisos según los roles. <br>Respuesta correcta: Verdadero',
            incorrecto: 'RBAC asigna permisos según el rol del usuario. <br>Respuesta correcta: Verdadero'
        }
    };

    for (let i = 1; i <= 9; i++) {
        const preguntaName = 'q' + i;
        const checkboxes = document.getElementsByName(preguntaName);
        const preguntaRow = document.getElementById('pregunta' + i);

        preguntaRow.style.backgroundColor = '';
        const mensajeAnterior = preguntaRow.querySelector('.mensaje-repaso');
        if (mensajeAnterior) mensajeAnterior.remove();

        const checkboxesMarcados = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (checkboxesMarcados.length === 1) {
            const valorCheckbox = checkboxesMarcados[0].value;
            const mensaje = document.createElement('div');
            mensaje.classList.add('mensaje-repaso');

            if (valorCheckbox === respuestasCorrectas[preguntaName]) {
                preguntaRow.style.backgroundColor = 'rgba(144, 238, 144, 0.3)';
                mensaje.style.color = 'green';
                mensaje.innerHTML = mensajesDeRetroalimentacion[preguntaName].correcto;
            } else {
                preguntaRow.style.backgroundColor = 'rgba(255, 99, 71, 0.3)';
                mensaje.style.color = 'red';
                mensaje.innerHTML = mensajesDeRetroalimentacion[preguntaName].incorrecto;
            }
            preguntaRow.appendChild(mensaje);
        } else {
            preguntaRow.style.backgroundColor = 'rgba(173, 216, 230, 0.3)';
        }
    }
}
