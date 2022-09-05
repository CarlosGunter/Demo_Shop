var product, container;
container = document.getElementById("objects");

for (var i = 0; i < 11; i++) {
    if(container.childNodes[0].wholeText == 'undefined') {
        product =
        '<div class="product">\
            <a href="#"><img src="../img.png" alt="img"></a>\
            <label class="description">Product ' + i + '<span>$1000</span></label>\
        </div>';
    } else {
        product +=
        '<div class="product">\
            <a href="#"><img src="../img.png" alt="img"></a>\
            <label class="description">Product ' + i + '<span>$1000</span></label>\
        </div>';
    }
    
    container.innerHTML = product;

}