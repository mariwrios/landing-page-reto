const btnSwitch = document.querySelector("#switch");
const registrar = document.querySelector("#boton");
const telefonoBlanco = document.querySelector("#sol")
const telefononegro = document.querySelector("#noche")

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    registrar.classList.toggle('dark');
    telefonoBlanco.classList.toggle("luna");
    telefononegro.classList.toggle("dia")
    
})



