//   === === Menu === ===

const sections = [
    {
        "title": "Man",
        "subsection": [
            "Basics",
            "Shirts",
            "Pants",
            "Shorts"
        ]
    },

    {
        "title": "Woman",
        "subsection": [
            "Basics",
            "Shirts",
            "Pants"
        ]
    },

    {
        "title": "Kids",
        "subsection": [
            "Basics",
            "Shirts",
            "Pants"
        ]
    },

    {
        "title": "Baby",
        "subsection": [
            "Shirts",
            "Pants"
        ]
    }
]

let txtSec, text = `<li><a href="#" class="nav_section">Home</a></li>`
const nav = document.getElementById('nav')

sections.forEach(element=> {
    txtSec = ''
    element.subsection.forEach(subElement => {
        txtSec += `<li><a href="#">${subElement}</a></li>`
    });
    text +=
    `<li>
        <a href="#" class="nav_section">${element.title}</a>
        <ul class="nav_submenu">
            ${txtSec}
        </ul>
    </li>`
});
nav.innerHTML = text

