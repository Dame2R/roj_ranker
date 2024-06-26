document.addEventListener('DOMContentLoaded', function () {
    const surveyHeading = document.querySelector('.survey h2');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= surveyHeading.offsetTop - 50) {
            surveyHeading.style.position = 'sticky';
            surveyHeading.style.top = '0';
        } else {
            surveyHeading.style.position = 'static';
        }
    });
    
    const questions = [
        { id: 'question1', feedbackId: 'feedback1', requiredValue: 5, feedbackMessage: 'Bist du geistes?' },
        { id: 'question2', feedbackId: 'feedback2', requiredValue: 4, feedbackMessage: 'Du bist so lost..' },
        { id: 'question3', feedbackId: 'feedback3', requiredValue: 3, feedbackMessage: 'Calm down princess.' },
        { id: 'question4', feedbackId: 'feedback4', requiredValue: 4, feedbackMessage: 'Träum weiter' },
        { id: 'question5', feedbackId: 'feedback5', requiredValue: 1, feedbackMessage: 'Delusional..' },
    ];

    questions.forEach((question, index) => {
        const stars = document.querySelectorAll(`.stars[data-question="${index + 1}"] .star`);
        const feedbackElement = document.getElementById(question.feedbackId);

        stars.forEach(star => {
            star.addEventListener('mouseenter', () => highlightStars(stars, star.getAttribute('data-value')));
            star.addEventListener('mouseleave', () => unhighlightStars(stars));
            star.addEventListener('click', function () {
                const value = parseInt(this.getAttribute('data-value'), 10);
                if (value !== question.requiredValue) {
                    feedbackElement.textContent = question.feedbackMessage;
                    resetStars(stars);
                } else {
                    feedbackElement.textContent = '';
                    selectStars(stars, value);
                }
            });
        });
    });

    function highlightStars(stars, value) {
        stars.forEach((star, index) => {
            if (index < value) {
                star.classList.add('highlighted');
            }
        });
    }

    function unhighlightStars(stars) {
        stars.forEach(star => {
            star.classList.remove('highlighted');
        });
    }

    function resetStars(stars) {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    }

    function selectStars(stars, value) {
        stars.forEach((star, index) => {
            if (index < value) {
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
            const stars = document.querySelectorAll(`.stars[data-question="${question.id.replace('question', '')}"] .star`);
            resetStars(stars);
            document.getElementById(question.feedbackId).textContent = '';
        });
        alert('Dein Rating wurde gespeichert! (nicht wirklich lol)');
    });
});
