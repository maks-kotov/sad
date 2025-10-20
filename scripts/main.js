const intro = document.getElementById('intro')
function createTitle(text) {
    return `
        <div class="title">
            <div class="title__text">${text}</div>
        </div>
    `
}
intro.insertAdjacentHTML('afterend', createTitle('Hello'))
