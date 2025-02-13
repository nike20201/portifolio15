const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const activePage = () => {
    navlinks.forEach(link => {
        link.classList.remove('active');
    });
};

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
        }
    });
});


logolink.addEventListener('click', () => { 
    if (!navlinks[0].classList.contains('active')){
        activePage();

        navlinks[0].classList.add('active');
    }
});



const resumebtns = document.querySelectorAll('.resume-btn');

resumebtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumedetails = document.querySelectorAll('.resume-detail');

        
        resumebtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumedetails.forEach(detail => { 
            detail.classList.remove('active');
        });

        
        resumedetails[idx].classList.add('active');
    });
});
