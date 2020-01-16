document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const cartBtn = document.getElementById('cart');
  const cart = document.querySelector('.cart');

  const goodsWrapper = document.querySelector('.goods-wrapper');

  //   Functions
  const createCardGoods = (id, title, price, img) => {
    const card = document.createElement('div');
    card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
    card.innerHTML = `<div class="card">
    <div class="card-img-wrapper">
      <img class="card-img-top" src="${img}" alt="" />
      <button class="card-add-wishlist" data-goods-id="${id}"></button>
    </div>
    <div class="card-body justify-content-between">
      <a href="#" class="card-title">${title}</a>
      <div class="card-price">${price} ₽</div>
      <div>
        <button class="card-add-cart" data-goods-id="${id}">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>`;
    return card;
  };

  goodsWrapper.appendChild(createCardGoods(1, 'Archer', '1000', './img/temp/Archer.jpg'));

  goodsWrapper.appendChild(createCardGoods(3, 'Socks', '3000', './img/temp/Socks.jpg'));

  function openCart(e) {
    e.preventDefault();
    cart.style.display = 'flex';
  }

  function closeCart(e) {
    if (e.keyCode === 27 || e.which === 27) {
      cart.style.display = '';
    }
    if (e.target === cart || e.target.classList.contains('cart-close')) {
      cart.style.display = '';
    }
  }

  //   Event Listeners

  cartBtn.addEventListener('click', openCart);
  cart.addEventListener('click', closeCart);
  document.addEventListener('keydown', closeCart);
});
