//   === === Menu === ===
const menu = {
    "man": {
        "general": [
            "shirts",
            "pants",
            "shorts",
            "shoes"
        ],
        "accesories": [
            "backpack",
            "watches"
        ]
    },
    "woman": {
        "general": [
            "shirts",
            "pants",
            "shorts",
            "shoes"
        ],
        "accesories": [
            "backpack",
            "necklaces",
            "rings",
            "watches"
        ]
    },
    "kids": {
        "general": [
            "shirts",
            "pants",
            "shorts",
            "shoes"
        ],
        "accesories": [
            "backpack",
            "watches"
        ]
    },
    "baby": {
        "general": [
            "shirts",
            "pants",
            "shoes"
        ],
        "accesories": [
            "caps",
        ]
    }
}

//Print Menu
let text = '<li class="txt-hov nav_section">home</li>'
const nav = document.getElementById('nav')

Object.keys(menu).forEach(element => {
    text +=
        `<li class="txt-hov nav_section">${element}</li>`
});
nav.innerHTML = text

//Print Sub Menu
let txtGeneral, txtAccesories, submenu

let arrow_back = document.createElement("i")
arrow_back.setAttribute('class', 'ri-arrow-left-fill')

function subMenu(title) {
    txtGeneral = `<li><a href="#">General</a></li>`
    txtAccesories = `<li><a href="#">Accesories</a></li>`
    menu[title]?.general?.forEach(element => {
        txtGeneral += `<li><a href="#" class="txt-hov">${element}</a></li>`
    });
    menu[title]?.accesories?.forEach(element => {
        txtAccesories += `<li><a href="#" class="txt-hov">${element}</a></li>`
    });
    submenu = `
        <ul>
            <li><a href="#">highlight</a></li>
            <li><a href="#" class="txt-hov">most soldier</a></li>
            <li><a href="#" class="txt-hov">new</a></li>
            <li><a href="#" class="txt-hov">promotions</a></li>
            <li><a href="#" class="txt-hov">basics</a></li>
        </ul>
        <ul>
            ${txtGeneral}
        </ul>
        <ul>
            ${txtAccesories}
        </ul>
    `

    section_element = document.createElement("section")
    section_element.setAttribute('class', 'nav_submenu')
    section_element.setAttribute('id', 'nav_submenu')
    section_element.innerHTML = submenu
    document.getElementById('nav_submenu')?.parentElement.removeChild(document.getElementById('nav_submenu'))
    nav.insertAdjacentElement("afterend", section_element)
}

nav.addEventListener("click", (evt) => {
    if (evt.target?.tagName === 'LI'
        && evt.target?.innerHTML != 'home'
        && evt.target?.innerHTML != 'close') {
        subMenu(evt.target.innerHTML)
        let nav_submenu = document.getElementById('nav_submenu')
        nav_submenu.classList.add('nav_submenu-focus')
        nav.classList.toggle('nav_list-submenu')
        if (window.innerWidth < 900) nav_submenu.insertAdjacentElement("afterbegin", arrow_back)
    }
})
nav.addEventListener("mouseover", (evt) => {
    if (evt.target?.tagName === 'LI'
        && evt.target?.innerHTML != 'home'
        && window.innerWidth >= 900) {
        subMenu(evt.target.innerHTML)
        let nav_submenu = document.getElementById('nav_submenu')
        nav_submenu.classList.add('nav_submenu-focus')
    }
})
nav.addEventListener("mouseout", (evt) => {
    let nav_submenu = document.getElementById('nav_submenu')
    if (window.innerWidth >= 900) nav_submenu?.classList?.remove('nav_submenu-focus')
})

//Print icons to mobile design in menu
menu_icon = document.createElement("i")
menu_icon.setAttribute('class', 'ri-menu-line top_icon_menu')
menu_icon.setAttribute('id', 'icon_menu')

exit_menu = document.createElement("li")
exit_menu.setAttribute('class', 'txt-hov nav_section material-symbols-outlined')
exit_menu.innerHTML = 'close'

if (innerWidth < 900) {
    nav.insertAdjacentElement('afterbegin', exit_menu)
    document.getElementById('nav_submenu')?.insertAdjacentElement("afterbegin", arrow_back)
    document.getElementById('top').insertAdjacentElement("afterbegin", menu_icon)
}

addEventListener("resize", evt => {
    if (evt.target.innerWidth < 900) {
        document.getElementById('top').insertAdjacentElement("afterbegin", menu_icon)
        nav.insertAdjacentElement('afterbegin', exit_menu)
        document.getElementById('nav_submenu')?.insertAdjacentElement("afterbegin", arrow_back)
    }
    if (evt.target.innerWidth >= 900) {
        exit_menu.parentElement?.removeChild(exit_menu)
        menu_icon.parentElement?.removeChild(menu_icon)
        arrow_back.parentElement?.removeChild(arrow_back)
    }
})

//Open & close menu with icon
menu_icon.addEventListener("click", evt => {
    document.getElementsByClassName('nav')[0].classList.add('nav-open')
})
exit_menu.addEventListener("click", evt => {
    document.getElementsByClassName('nav')[0].classList.remove('nav-open')
})

//Back to main menu in submenu
arrow_back.addEventListener("click", evt => {
    document.getElementById('nav_submenu').parentElement.removeChild(document.getElementById('nav_submenu'))
    nav.classList.remove('nav_list-submenu')
})