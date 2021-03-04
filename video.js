document.addEventListener('DOMContentLoaded', () => {
    let link = document.querySelector('.ms-video-link');
    let layoutBg = document.querySelector('.ms-background-layout');
    let video = document.querySelector('.ms-video__wrapper');

    link.addEventListener('click', () => {
        layoutBg.classList.add('ms-show');
        video.classList.add('ms-show');
    });

    layoutBg.addEventListener('click', () => {
        layoutBg.classList.remove('ms-show');
        video.classList.remove('ms-show');
    });
});