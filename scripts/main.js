/**
 * осталось сделать рабочий поиск, прикрпить ссылки на вк тг и одноклассники, мб поменять дизайн и попробовать посадить сайт на реакт
 */
const input = document.getElementById('input')
const titles = document.querySelectorAll('.card__title')

input.addEventListener('input', function() {
    let value = this.value.trim().toLowerCase()
    
    if(value !== '') {

        titles.forEach(el => {
            // search возвращает -1 если подстроки нету в строке
            // search возвращает индекс символа(или начало последовательности символов) если он есть в строке
        if(el.textContent.toLowerCase().search(value) === -1) {
            // el.classList.add('hide')
            el.innerHTML = el.textContent   
            // console.log('не совпадает');
            
            
            // console.log('совпадает с каким то деревом');
            
        }   
        else {
                console.log(el.textContent.toLowerCase().search(value));
                console.log(el.textContent.toLowerCase());
    //         el.classList.remove('hide')
            let str = el.textContent
            el.innerHTML=insertMark(str, el.textContent.toLowerCase().search(value), value.length)
            // console.log(insertMark(str, el.textContent.toLowerCase().search(value), value.length));
            
}
    });
    }
    // если ничего значение в инпут пустое - удаляем .hide у элементов
    else {
        titles.forEach(el => {
    //             el.classList.remove('hide')
                el.innerHTML = el.textContent
        });
    }
})

function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len, string.length) 
}
