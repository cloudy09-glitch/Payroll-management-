    window.addEventListener('scroll', function() {
        const img = document.querySelector('.aboutSite .pic1 img');
        const para = document.querySelector('.aboutSite .pic1 p');
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 250) { 
            img.classList.add('hidden');
            para.classList.add('hidden-para');
        } else {
            img.classList.remove('hidden');
            para.classList.remove('hidden-para');
        }
    });



