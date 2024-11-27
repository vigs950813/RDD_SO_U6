function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, incorrectFeedback) {
        const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
        const feedbackElement = document.getElementById(feedbackId);

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                correctCount++;
                feedbackElement.innerHTML = '<span style="color: green;">Respuesta correcta</span>';
            } else {
                incorrectCount++;
                feedbackElement.innerHTML = `<span style="color: red;">Respuesta incorrecta. ${incorrectFeedback[selectedAnswer.value]}</span>`;
            }
        } else {
            incorrectCount++;
            feedbackElement.innerHTML = '<span style="color: blue;">Por favor, selecciona una respuesta</span>';
        }
    }

    checkAnswer('q1', 'b', 'feedback-q1', {
        'a': 'Virtualización no es dividir discos.',
        'c': 'Virtualización no implica compresión de datos.'
    });

    checkAnswer('q2', 'a', 'feedback-q2', {
        'b': 'Los emuladores no crean máquinas virtuales.',
        'c': 'No monitorean recursos.'
    });

    checkAnswer('q3', 'b', 'feedback-q3', {
        'a': 'No requiere asistencia de hardware.',
        'c': 'Emulación no es asistencia por hardware.'
    });

    checkAnswer('q4', 'b', 'feedback-q4', {
        'a': 'No requiere emulación completa del hardware.',
        'c': 'La paravirtualización requiere un hipervisor.'
    });

    checkAnswer('q5', 'b', 'feedback-q5', {
        'a': 'No es particionar discos.',
        'c': 'No es un tipo de máquina virtual.'
    });

    checkAnswer('q6', 'a', 'feedback-q6', {
        'b': 'No ofrecen más aislamiento a nivel de hardware.',
        'c': 'No soportan más sistemas operativos diferentes.'
    });

    checkAnswer('q7', 'a', 'feedback-q7', {
        'b': 'El emulador de BIOS no es fundamental para la virtualización.',
        'c': 'Un contenedor no es fundamental para la virtualización asistida por hardware.'
    });

    checkAnswer('q8', 'b', 'feedback-q8', {
        'a': 'No comparte el kernel.',
        'c': 'No es para ejecutar múltiples sistemas operativos directamente.'
    });

    const resultsSummary = document.getElementById('results-summary');
    resultsSummary.innerHTML = `<p>Respuestas correctas: <span style="color: green;">${correctCount}</span></p>
                                <p>Respuestas incorrectas: <span style="color: red;">${incorrectCount}</span></p>`;
}
