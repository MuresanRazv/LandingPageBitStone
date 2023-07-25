/*
console.log(document.getElementById('header'))
console.log(document.getElementsByTagName('a'))
el = document.getElementsByClassName('social_media-btn')
console.log(el[0].innerHTML)
//el[0].innerText = 'te am pacalit'
//el[0].style.setProperty('background-color', 'red')
//el[0].classList.remove('social_media-btn')
elements = document.getElementsByTagName('a')
for (let el of elements) {
    console.log(el.parentNode)
    console.log(el.parentElement)
}

newEl = document.createElement('p')
newEl.innerText = "teapa"

el[0].appendChild(newEl)
el[0].remove(newEl)
newEl = el[0].cloneNode()
el[0].appendChild(newEl)
 */

// fix borders of cards text
let card_container = document.getElementsByClassName('works__description-container');
for (let card of card_container) {
    card.style.borderTopLeftRadius = "0px";
    card.style.borderTopRightRadius = "0px";
}

// fix borders of Google Maps
let maps = document.getElementsByTagName("iframe");
maps[0].style.borderTopLeftRadius = "0px";
maps[0].style.borderBottomLeftRadius = "0px"