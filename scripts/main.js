/**
 * осталось сделать рабочий поиск, прикрпить ссылки на вк тг и одноклассники, мб поменять дизайн и попробовать посадить сайт на реакт
 */
const input = document.getElementById('input')
const titles = document.querySelectorAll('.card__title')
const inputBlock = document.querySelector('#search')
const resultsList = document.getElementById('resultsList')

titles.forEach(el => {
    const result = `<a href="#"><li class="result">${el.textContent}</li></a>`
    
    resultsList.insertAdjacentHTML('beforeend', result)
})
resultsList.style.display="block"
// input.addEventListener('input', function() {
//     let value = this.value.trim().toLowerCase()
    
//     if(value !== '') {


//    for (const el of resultsList.children) {    
        
//         const title = el.children[0] // title - это тег li, вложенный в a, (содержит название сорта)
        
//         if(title.textContent.toLowerCase().search(value) === -1) {
//             title.innerHTML = el.textContent   //по факту это можно и не ставить
//             title.classList.add('hide')     
//         }
//         else {
//             let str = title.textContent
//             title.innerHTML=insertMark(str, el.textContent.toLowerCase().search(value), value.length)
//         }
//    }

//             resultsList.style.display="block"

//     }
//     else {
//        for (const el of resultsList.children) {
//         const title = el.children[0] // title - это тег li, вложенный в a, (содержит название сорта)
//         title.classList.remove('hide')
//         title.innerHTML = el.textContent
//        }
//        resultsList.style.display="none"
//     }
// })

// function insertMark(string, pos, len) {
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len, string.length) 
// }
