let items = 0;
let VCProductor = 3;
let VCConsumidor = 0;

function addProduct() {
    items = items + 1;
    VCProductor = VCProductor - 1;
    VCConsumidor = VCConsumidor + 1;
    document.querySelector('#items').innerText = items;
}

function takeProduct() {
    items = items - 1;
    VCProductor = VCProductor + 1;
    VCConsumidor = VCConsumidor - 1;
    document.querySelector('#items').innerText = items;
}