let items = 0;
let VCProductor = 3;
let VCConsumidor = 0;

function addProduct() {
    document.querySelector('#buttonConsumer').disabled = false;
    items = items + 1;
    VCProductor = VCProductor - 1;
    VCConsumidor = VCConsumidor + 1;
    document.querySelector('#items').innerText = items;
    document.querySelector('#VCC').innerText = VCConsumidor;
    document.querySelector('#VCP').innerText = VCProductor;
    if (VCProductor == 0) {
        document.querySelector('#buttonProducer').disabled = true;
    }
    document.querySelector('#divCounter').style.backgroundColor = "#188E00";
    setTimeout(function () { document.querySelector('#divCounter').style.backgroundColor = null; }, 100);



}

function takeProduct() {
    document.querySelector('#buttonProducer').disabled = false;
    items = items - 1;
    VCProductor = VCProductor + 1;
    VCConsumidor = VCConsumidor - 1;
    document.querySelector('#items').innerText = items;
    document.querySelector('#VCC').innerText = VCConsumidor;
    document.querySelector('#VCP').innerText = VCProductor;
    if (VCConsumidor == 0) {
        document.querySelector('#buttonConsumer').disabled = true;
    }
    document.querySelector('#divCounter').style.backgroundColor = "#26E600";
    setTimeout(function () { document.querySelector('#divCounter').style.backgroundColor = null; }, 100);
}