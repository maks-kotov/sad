/**
 * осталось сделать рабочий поиск, прикрпить ссылки на вк тг и одноклассники, мб посадить сайт на реакт и вьебать сюда
 * препроцессор
 */
const input = document.getElementById('input')
const titles = document.querySelectorAll('.card__title')
const inputBlock = document.querySelector('#search')
const resultsList = document.getElementById('resultsList')

titles.forEach(el => {
    el.id = el.textContent // эт мне просто влом проставлять каждому элементу id
    const result = `<a href="${'#'+el.id}"><li class="result">${el.textContent}</li></a>`    
    resultsList.insertAdjacentHTML('beforeend', result)
})

//очищать инпут и убирать контекстное меню при нажатии на элемент списка 
for (const el of resultsList.children) {
    const title = el.children[0]
    title.addEventListener('click', () => {
        resultsList.style.display = 'none'
        input.value = ''
    })
}
// resultsList.style.display="block"
input.addEventListener('input', function() {
    let value = this.value.trim().toLowerCase()
    
    if(value !== '') {

    resultsList.style.display="block"

   for (const el of resultsList.children) {    
        
        const title = el.children[0] // title - это тег li, вложенный в a, (содержит название сорта)
        
        if(title.textContent.toLowerCase().search(value) === -1) {
            title.innerHTML = el.textContent   //по факту это можно и не ставить
            title.classList.add('hide')     
        }
        else {
            title.classList.remove('hide')     
            title.innerHTML=insertMark(title.textContent, el.textContent.toLowerCase().search(value), value.length)
        }
   }
}
    else {
        resultsList.style.display="none"
        for (const el of resultsList.children) {
            const title = el.children[0] // title - это тег li, вложенный в a, (содержит название сорта)
            title.classList.remove('hide')
            title.innerHTML = el.textContent
       }
    }
})

function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len, string.length) 
}
