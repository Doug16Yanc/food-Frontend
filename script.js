document.addEventListener('DOMContentLoaded', function() {
    const prato = document.getElementById("prato");
    const prato1 = document.getElementById("prato1");
    const feijoada = document.getElementById("feijoada");
    const lasanha = document.getElementById("lasanha");
    const macarronada = document.getElementById("macarronada");
    const frango = document.getElementById("frango");

    prato1.addEventListener('click', () => {
        prato.src = "img/prato1.png";
    });

    feijoada.addEventListener('click', () => {
        prato.src = "img/feijoada.png";
    });

    lasanha.addEventListener('click', () => {
        prato.src = "img/lasanha.png";
    });

    macarronada.addEventListener('click', () => {
        prato.src = "img/macarronada.png";
    });

    frango.addEventListener('click', () => {
        prato.src = "img/frango.png";
    });
});
