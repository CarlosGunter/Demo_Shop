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
                <span class="material-symbols-outlined bg-hov" id="addCart">
                    shopping_cart
                </span>
                <div class="obj_amout">
                    <button type="button" value="min" class="bg-hov" id="-">-</button>
                    <input type="text" value="1" id="amoutI">
                    <button type="button" value="plus" class="bg-hov" id="+">+</button>
                </div>
                <p>Sz:</p>
                <div class="obj_size">
                    <input type="text" readonly value="S" class="bg-hov" id="sizeI">
                    <div class="obj_slcSz">
                        <p class="bg-hov" id="selectSz">S</p>
                        <p class="bg-hov" id="selectSz">M</p>
                        <p class="bg-hov" id="selectSz">L</p>
                        <p class="bg-hov" id="selectSz">2L</p>
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
            e.target.parentElement.parentElement.childNodes[1].value = e.target.innerHTML
            e.target.parentElement.classList.toggle('obj_selectSz-active')
        }

        // === === Variacion de cantidad === ===
        if (e.target.id === '+' || e.target.id === '-') {
            amout = e.target.parentNode.childNodes[3].value
            amout = parseInt(amout)

            if (e.target.id === '+' && amout < 100) {
                amout++
                e.target.previousElementSibling.value = amout
            } else if (e.target.id === '-' && amout > 1) {
                amout--
                e.target.nextElementSibling.value = amout
            } else {
                e.target.parentNode.childNodes[3].value = 1
            }
        }

        // === === Intruducir solo numeros en el campo cantidad === ===
        if (e.target.id === 'amoutI') {
            e.target.addEventListener("keyup", k => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '')
            })
        }
    }
    
})