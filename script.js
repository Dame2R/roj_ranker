document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        { id: 'question1', feedbackId: 'feedback1', requiredValue: 5, feedbackMessage: 'Bist du geistes?' },
        { id: 'question2', feedbackId: 'feedback2', requiredValue: 4, feedbackMessage: 'Du bist so lost..' },
        { id: 'question3', feedbackId: 'feedback3', requiredValue: 3, feedbackMessage: 'Calm down princess.' },
        { id: 'question4', feedbackId: 'feedback4', requiredValue: 1, feedbackMessage: 'Träum weiter' },
        { id: 'question5', feedbackId: 'feedback5', requiredValue: 2, feedbackMessage: 'Delusional..' },
    ];

    questions.forEach((question, index) => {
        const stars = document.querySelectorAll(`.stars[data-question="${index + 1}"] .star`);
        const feedbackElement = document.getElementById(question.feedbackId);

        stars.forEach(star => {
            star.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                if (value != question.requiredValue) {
                    resetStars(stars);
                    feedbackElement.textContent = question.feedbackMessage;
                } else {
                    feedbackElement.textContent = '';
                    selectStars(stars, value);
                }
            });
        });
    });

    function resetStars(stars) {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    }

    function selectStars(stars, value) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', function () {
        const surveyForm = document.getElementById('survey-form');
        surveyForm.reset();
        questions.forEach(question => {
            document.getElementById(question.feedbackId).textContent = '';
            const stars = document.querySelectorAll(`.stars[data-question="${question.id.replace('question', '')}"] .star`);
            resetStars(stars);
        });
        alert('Your responses have been saved! (not really)');
    });
});