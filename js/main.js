let burgerIcon = document.getElementById('burgerIcon')
let mobilMenu = document.getElementById('mobileMenu')
let closeIcon = document.getElementById('closeIcon')
let main = document.querySelector('main')
let mobilLi = document.querySelectorAll('.mobile')




burgerIcon.addEventListener('click',()=>{
mobilMenu.classList.toggle('hidden')
main.classList.toggle('hidden')

})

burgerIcon.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('klik');
        mobilMenu.classList.toggle('hidden')
        main.classList.toggle('hidden')
    }
});
closeIcon.addEventListener('click',()=>{
    mobilMenu.classList.toggle('hidden')
    main.classList.toggle('hidden')
    })

    

    mobilLi.forEach(li=>{
        li.addEventListener('click',()=>{mobilMenu.classList.toggle('hidden')
            main.classList.toggle('hidden')})
        
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

