const adminLink = document.getElementById('admin-link');
const adminPanel = document.getElementById('admin-panel');
const adminContent = document.getElementById('admin-content');
const cartLink = document.getElementById('cart-link');
const cartSection = document.getElementById('cart-section');
const cartItems = [];

// Abre o painel admin ao clicar no link
adminLink.addEventListener('click', () => {
  adminPanel.style.display = 'block';
});

// Abre a seção do carrinho ao clicar no link
cartLink.addEventListener('click', () => {
  cartSection.style.display = 'block';
  updateCart();
});

// Função para validar a senha do admin
function validateAdmin() {
  const password = document.getElementById('admin-password').value;
  if (password === 'Nogatec@2020') {
    adminContent.style.display = 'block';
  } else {
    alert('Senha incorreta!');
  }
}

// Função para adicionar um novo item ao menu
function addMenuItem() {
  const name = document.getElementById('new-item-name').value;
  const description = document.getElementById('new-item-description').value;
  const imageUrl = document.getElementById('new-item-image').value;

  if (name && description && imageUrl) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
      <img src="${imageUrl}" alt="${name}">
      <div>
        <h3>${name}</h3>
        <p>${description}</p>
        <button onclick="addToCart('${name}')">Adicionar ao Carrinho</button>
      </div>
    `;
    document.querySelector('main section').appendChild(menuItem);
    alert('Item adicionado ao menu com sucesso!');
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}

// Função para adicionar itens ao carrinho
function addToCart(itemName) {
  cartItems.push(itemName);
  alert(`${itemName} foi adicionado ao carrinho.`);
}

// Atualiza a lista de itens no carrinho
function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    cartList.appendChild(listItem);
  });
}

// Função para finalizar o pedido e coletar dados do cliente
function finalizeOrder() {
  const userInfo = prompt("Digite suas informações de entrega:\nNome, Telefone, Endereço, Número, Bairro, Complemento, Cidade (Jales-SP).");
  if (userInfo) {
    alert("Seu pedido do Violeta Açaí chegará no sábado desta semana. Tenha um ótimo dia, tarde ou noite!");
  }
}
