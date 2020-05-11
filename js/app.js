
const dataattri = Array.from(document.querySelectorAll('[data-nav]'));
const navbar = document.getElementById('navbar__list');


let fragment = document.createDocumentFragment();
dataattri.forEach(appenddata)
function appenddata(item) {
    const list_child = document.createElement('li');
    const anchors = document.createElement('a');
    anchors.setAttribute('href', '#'+item.id);
    anchors.textContent = item.dataset.nav;
    list_child.appendChild(anchors);
    fragment.appendChild(list_child);
    // console.log(anchors.getAttribute('href'))
}
navbar.appendChild(fragment);


const anchor_list = document.getElementById('navbar__list');
console.log(anchor_list);
anchor_list.addEventListener('click', function (event) {

    if(event.target.id !== "navbar__list"){
        event.preventDefault();
        const targetid = event.target.getAttribute('href');
        window.scrollTo({
            top: document.querySelector(targetid).offsetTop,
            behavior: 'smooth'
        });
    }
})
