const input = document.getElementById('input')
const titles = document.querySelectorAll('.card__title')

input.addEventListener('input', function() {
    let value = this.value.trim()

    if(value !== '') {

        titles.forEach(el => {
            // search возвращает -1 если подстроки нету в строке
            // search возвращает индекс символа если он есть в строке
            if(el.textContent.search(value) === -1) {
                el.classList.add('hide')
                el.innerHTML = el.textContent   
            }   
            else {
                el.classList.remove('hide')
                let str = el.textContent
                el.innerHTML=insertMark(str, el.innerText.search(value), value.length)
            }
        });
    }
    // если ничего значение в инпут пустое - удаляем .hide у элементов
    else {
        titles.forEach(el => {
                el.classList.remove('hide')
                el.innerHTML = el.textContent
        });
    }
})

function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len) 
}
