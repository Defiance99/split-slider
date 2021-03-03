document.addEventListener('DOMContentLoaded', () => {
    if (window.screen.width <= 1000) {
        let leftSide = document.querySelector('.ms-left');
        let rightSide = document.querySelector('.ms-right');
        let leftSideChilds = leftSide.children;
        let rightSideChilds = rightSide.children;
        let rightChildsLength = rightSideChilds.length;

        for (let i = 0; i < rightChildsLength; i++) {
            leftSide.insertBefore(rightSideChilds[0], leftSideChilds[i * 2 + 1]);
        }
    }
});