/**
 * осталось сделать рабочий поиск, прикрпить ссылки на вк тг и одноклассники, мб поменять дизайн и попробовать посадить сайт на реакт
 */
const input = document.getElementById('input')
const titles = document.querySelectorAll('.card__title')
const inputBlock = document.querySelector('#search')
const resultsList = document.getElementById('resultsList')

titles.forEach(el => {
    const result = document.createElement('li')
    result.style.width="100%"
    result.style.height="30px"
    result.style.backgroundColor="#000"
    result.style.marginBottom="10px"
    result.textContent = el.textContent
    resultsList.insertAdjacentElement('beforeend', result)
    result.style.color="#fff"
})

input.addEventListener('input', function() {
    let value = this.value.trim().toLowerCase()
    
    if(value !== '') {

        titles.forEach(el => {
            // search возвращает -1 если подстроки нету в строке
            // search возвращает индекс символа(или начало последовательности символов) если он есть в строке

        if(el.textContent.toLowerCase().search(value) === -1) {
            el.innerHTML = el.textContent   
        }   
        else {
            let str = el.textContent
            el.innerHTML=insertMark(str, el.textContent.toLowerCase().search(value), value.length)
        }
    });
            resultsList.style.display="block"

    }
    else {
        titles.forEach(el => {
                el.innerHTML = el.textContent
        });
        resultsList.style.display="none"

    }
})

function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len, string.length) 
}
