const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

const themeToggler = document.querySelector(".theme-toggler")

// Abri menu 
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';     //faz menu lateral abrir
})

// Fecha menu
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';     //faz menu lateral fachar
})

// Mudar o tema para dark 
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables')  //passa para o modo dark

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');  // efeito nos botões do modo
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Listando Pedidos do Orders.js 
Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 
                            'Recusado' ? 'danger' : order.shipping === 
                            'Pendente' ? 'warning' : 'primary'}">
                            ${order.shipping}
                        </td>
                        <td class="primary">Detalhes</td>
                        `
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})