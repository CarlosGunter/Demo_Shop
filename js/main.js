//   === === Menu === ===
const menu = {
    "men": {
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
        ]
    }
}

//Print Menu
let text = '<li class="txt-hov nav_section">home</li>'
const nav = document.getElementById('nav')

Object.keys(menu).forEach(element=> {
    text +=
    `<li class="txt-hov nav_section">${element}</li>`
});
nav.innerHTML = text

//Print Sub Menu
let txtGeneral, txtAccesories
const menu_general = document.getElementById('menu_general')
const menu_accesories = document.getElementById('menu_accesories')
const nav_submenu = document.getElementById('nav_submenu')

function subMenu(title) {
    txtGeneral = `<li><a href="#">General</a></li>`
    txtAccesories = `<li><a href="#">Accesories</a></li>`
    menu[title]?.general?.forEach(element => {
        txtGeneral += `<li><a href="#" class="txt-hov">${element}</a></li>`
    });
    menu[title]?.accesories?.forEach(element => {
        txtAccesories += `<li><a href="#" class="txt-hov">${element}</a></li>`
    });
    menu_general.innerHTML = txtGeneral
    menu_accesories.innerHTML = txtAccesories
}

nav.addEventListener("click",(evt)=>{
    if (evt.target?.tagName === 'LI' && evt.target?.innerHTML != 'home') {
        subMenu(evt.target.innerHTML)
        nav_submenu.classList.add('nav_submenu-focus')
    }
})
nav.addEventListener("mouseover",(evt)=>{
    if (evt.target?.tagName === 'LI' && evt.target?.innerHTML != 'home') {
        subMenu(evt.target.innerHTML)
        nav_submenu.classList.add('nav_submenu-focus')
    }
})
nav.addEventListener("mouseout",(evt)=>{
    nav_submenu.classList.remove('nav_submenu-focus')
})
