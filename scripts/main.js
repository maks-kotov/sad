/**
 * осталось сделать рабочий поиск, прикрпить ссылки на вк тг и одноклассники, мб посадить сайт на реакт и вьебать сюда
 * препроцессор
 */
const container = document.getElementById('container')
function createTitle(text) {
    return `
        <div class="title">
            <div class="title__text">${text}</div>
        </div>
    `
}
container.appendChild(createTitle('Hello'))