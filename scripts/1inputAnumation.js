const input = document.getElementById('input')
input.addEventListener('focus', function() {
    document.querySelector('.search__label').style.opacity = '1'
})
input.addEventListener('blur', function() {
    document.querySelector('.search__label').style.opacity = '0.5'
})