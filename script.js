const arrowIcon = document.querySelectorAll('.arrow-icon');
const xIcon = document.querySelectorAll('.x-icon');
const questions = document.querySelectorAll('.question-text');

arrowIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        const question = icon.parentElement.parentElement;
        question.classList.add('active');
    })
})

questions.forEach(question => {
    question.addEventListener('click', () => {
        const questionParent = question.parentElement.parentElement;
        questionParent.classList.toggle('active');
    })
})

xIcon.forEach(x => {
    x.addEventListener('click', () => {
        const question = x.parentElement.parentElement;
        question.classList.remove('active');
    })
})
