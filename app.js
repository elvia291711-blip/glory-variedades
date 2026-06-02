
const productos=[
{id:1,nombre:'Xerjoff Wardasina',precio:8500},
{id:2,nombre:'Club de Nuit Oud',precio:3200},
{id:3,nombre:'Ariana Grande Thank U Next',precio:2800},
{id:4,nombre:'Cadena Elegante',precio:1500},
{id:5,nombre:'Reloj Premium',precio:3500}
];
if(document.getElementById('productos')){
document.getElementById('productos').innerHTML=productos.map(p=>`<div class='card'><h3>${p.nombre}</h3><p>RD$ ${p.precio}</p><button onclick='add(${p.id})'>Agregar</button></div>`).join('');
}
function add(id){let c=JSON.parse(localStorage.getItem('cart')||'[]');c.push(id);localStorage.setItem('cart',JSON.stringify(c));alert('Agregado');}
if(document.getElementById('carrito')){
let c=JSON.parse(localStorage.getItem('cart')||'[]');let html='';let total=0;
c.forEach(id=>{let p=productos.find(x=>x.id===id); if(p){total+=p.precio; html+=`<p>${p.nombre} - RD$ ${p.precio}</p>`;}});
html+=`<h3>Total: RD$ ${total}</h3>`; document.getElementById('carrito').innerHTML=html;
}
function checkout(){window.open('https://wa.me/18294446461?text=Hola,%20quiero%20realizar%20mi%20pedido','_blank');}
