document.addEventListener('DOMContentLoaded', () => {
    let link = document.querySelector('.ms-video-link');
    let layoutBg = document.querySelector('.ms-background-layout');
    let iframeWrapper = document.querySelector('.ms-video__wrapper');
    let iframe = document.querySelector('.ms-vimeo-iframe');
    let html = document.querySelector('html');
    let src = iframe.getAttribute('src');
    console.log(html)

    link.addEventListener('click', () => {
        iframe.setAttribute('src', src);
        layoutBg.classList.add('ms-show');
        html.classList.add('ms-overflow-hid');
        iframeWrapper.classList.add('ms-show');
    });

    layoutBg.addEventListener('click', () => {
        iframe.setAttribute('src', '');
        layoutBg.classList.remove('ms-show');
        html.classList.remove('ms-overflow-hid');
        iframeWrapper.classList.remove('ms-show');
    });
    
});