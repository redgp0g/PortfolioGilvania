const nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    nav.classList.toggle('sticky', window.scrollY > 50);
});

let menu = document.querySelector('#menu-icon'),
    navitems = document.querySelector('.navItems'),
    navicons = document.querySelector('.icons');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navitems.classList.toggle('open');
    navicons.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navitems.classList.remove('open');
    navicons.classList.remove('open');
};

var typingEffect = new Typed('.multiText', {
    strings: ['analista corporal', 'mãe'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
});


var modal = document.getElementById('videoModal');
var btn = document.getElementById('showVideoBtn');
var span = document.getElementsByClassName('close')[0];
var video = document.getElementById('modalVideo');

btn.onclick = function () {
    modal.style.display = 'flex';
    video.play();
};

span.onclick = function () {
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    }
};
