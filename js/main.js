let burgerIcon = document.getElementById('burgerIcon')
let mobilMenu = document.getElementById('mobileMenu')
let closeIcon = document.getElementById('closeIcon')
let main = document.querySelector('main')




burgerIcon.addEventListener('click',()=>{
mobilMenu.classList.toggle('hidden')
main.classList.toggle('hidden')

})

closeIcon.addEventListener('click',()=>{
    mobilMenu.classList.toggle('hidden')
    main.classList.toggle('hidden')
    })
    

    function toggleAnswer(element) {
        const answer = element.nextElementSibling;
        const icon = element.querySelector('span:last-child');
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            icon.textContent = '-';
        } else {
            answer.classList.add('hidden');
            icon.textContent = '+';
        }
    }

