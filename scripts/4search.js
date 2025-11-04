import { cardsInormation } from "./main.js";
const searchResults = document.getElementById('searchResults')
const input = document.getElementById('input')

for (const card of cardsInormation) { // заносим в searchResults все сорта 
    searchResults.insertAdjacentHTML('beforeend', `<a href="#${card.name}" class="search__a">
        <li class="search__li">${card.name}</li>
        </a>`)
}
for (const a of searchResults.children) { // добавляем всем a класс hide (результатам)
    a.classList.add('hide')            
}

input.addEventListener('input', function() {
    const inputValue = input.value.trim().toLowerCase()
    const inputLength = inputValue.length
    if(inputValue == '') {
        for (const a of searchResults.children) { // добавляем всем li класс hide
            a.classList.add('hide')            
            searchResults.classList.add('hide')     
        }
    }
    else {
            searchResults.classList.remove('hide')
        for (const a of searchResults.children) {
            const liText =  a.children[0].textContent.trim()
            
            const posStr = liText.toLowerCase().search(inputValue)

            if(posStr === -1) {
                a.classList.add('hide')

            }
            else {
                a.classList.remove('hide')
                a.children[0].innerHTML = createResult(
                liText.slice(0, posStr),
                liText.slice(posStr, posStr+inputLength),
                liText.slice(posStr+inputLength, liText.length)
            )
            }    
        }
        
    }
})
function createResult(start, middle, end) {
    return `${start}<mark>${middle}</mark>${end}`
}
