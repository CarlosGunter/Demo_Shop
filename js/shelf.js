// === === Principal === ===

let product = ''
const container = document.getElementById("objects")

for (var i = 1; i <= 20; i++) {
    product +=
    `<div class="obj_product">
        <img src="../img/shirt.webp" alt="img">
        <label class="obj_name">Product ${i}</label>
        <div class="obj_shop">
            <div>
                <span class="material-symbols-outlined" id="addCart">
                    shopping_cart
                </span>
                <div class="obj_amout">
                    <button type="button" value="min" id="-">-</button>
                    <input type="text" value="1" id="amoutI">
                    <button type="button" value="plus" id="+">+</button>
                </div>
                <p>Sz:</p>
                <div class="obj_size">
                    <input type="text" readonly value="S" id="sizeI">
                    <div class="obj_slcSz">
                        <p id="selectSz">S</p>
                        <p id="selectSz">M</p>
                        <p id="selectSz">L</p>
                        <p id="selectSz">2L</p>
                    </div>
                </div>
            </div>
            <p>Price</p>
        </div>
    </div>`
}
container.innerHTML = product

// === === Evento talla y cantidad === ===
let amout
container.addEventListener('click', e => {
    if (e.target.id) {

        // === === Abrir panel de talla === ===
        if (e.target.id === 'sizeI') {
            e.target.nextElementSibling.classList.toggle('obj_selectSz-active')
        }
        if (e.target.id === 'selectSz') {
            e.path[2].childNodes[1].value = e.target.innerHTML
            e.path[1].classList.toggle('obj_selectSz-active')
        }

        // === === Variacion de cantidad === ===
        if (e.target.id === '+' || e.target.id === '-') {
            amout = e.path[1].childNodes[3].value
            amout = parseInt(amout)
            
            if (e.target.id === '+' && amout < 100) {
                amout++
                e.path[1].childNodes[3].value = amout
            }else if (e.target.id === '-' && amout > 1) {
                amout--
                e.path[1].childNodes[3].value = amout
            }else {
                e.path[1].childNodes[3].value = 1
            }
        }
    }
})