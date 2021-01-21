const navSlide = () => {

    const burger = document.querySelector ('.fa-bars');
    const close = document.querySelector ('.fa-times');
    const nav = document.querySelector ('.nav');

    burger.addEventListener('click', () => {
        nav.style = 'transform: translateX(0%);';
        close.style = 'display: block';
        burger.style = 'display: none';
    });

    close.addEventListener('click', () => {
        nav.style = 'transform: translateX(100%); display: none;'
        close.style = 'display: none';
        burger.style = 'display: block';
    });

    

}

    navSlide ();