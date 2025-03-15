/**
 * осталось сделать рабочий поиск, прикрпить ссылки на вк тг и одноклассники, мб поменять дизайн и попробовать посадить сайт на реакт
 */
const input = document.getElementById('input')
const titles = document.querySelectorAll('.card__title')
const inputBlock = document.querySelector('#search')

const results = document.createElement('div')
results.style.position="absolute"
results.style.width="59%"
results.style.height="300px"
results.style.backgroundColor="#fff"
results.style.display="none"
results.style.right="0"
inputBlock.insertAdjacentElement('beforeend', results)

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
            results.style.display="block"
    }
    else {
        titles.forEach(el => {
                el.innerHTML = el.textContent
        });
    }
})

function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len, string.length) 
}
