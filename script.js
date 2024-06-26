document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        { id: 'question1', feedbackId: 'feedback1', requiredValue: 5, feedbackMessage: 'Bist du geistes?' },
        { id: 'question2', feedbackId: 'feedback2', requiredValue: 4, feedbackMessage: 'Du bist so lost..' },
        { id: 'question3', feedbackId: 'feedback3', requiredValue: 3, feedbackMessage: 'Calm down princess.' },
        { id: 'question4', feedbackId: 'feedback4', requiredValue: 1, feedbackMessage: 'Träum weiter' },
        { id: 'question5', feedbackId: 'feedback5', requiredValue: 2, feedbackMessage: 'Delusional..' },
    ];

    questions.forEach(question => {
        const questionElement = document.getElementById(question.id);
        const feedbackElement = document.getElementById(question.feedbackId);

        questionElement.addEventListener('input', function () {
            if (questionElement.value != question.requiredValue) {
                questionElement.value = "";  // Setzt den Wert auf keine Auswahl zurück
                feedbackElement.textContent = question.feedbackMessage;  // Zeigt die Nachricht an
            } else {
                feedbackElement.textContent = "";
            }
        });
    });

    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', function () {
        const surveyForm = document.getElementById('survey-form');
        surveyForm.reset();
        questions.forEach(question => {
            document.getElementById(question.feedbackId).textContent = "";
        });
        alert('Danke. Deine Antworten wurden gespeichert! (nicht wirklich lol)');
    });
});
