'use strict';

// YALLA mahsulotlari: narxlar demo qiymatlari, kerak bo‘lsa shu ro‘yxatdan o‘zgartiring.
const imageBank = {
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=650&q=85',
  burger2: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=650&q=85',
  burger3: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=650&q=85',
  wrap: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=650&q=85',
  hotdog: 'https://images.unsplash.com/photo-1612392062798-2dba9b3f10f7?auto=format&fit=crop&w=650&q=85',
  pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=650&q=85',
  chicken: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=650&q=85',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=650&q=85',
  sauce: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=650&q=85',
  dessert: 'https://images.unsplash.com/photo-1551024506-0bb2d826e9c5?auto=format&fit=crop&w=650&q=85',
  drink: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=650&q=85',
  juice: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=650&q=85',
  combo: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c?auto=format&fit=crop&w=650&q=85'
};

const categoryNames = {
  burger: 'Burgerlar', lavash: 'Lavashlar', hotdog: 'Hot-doglar', pizza: 'Pizza',
  chicken: 'Tovuqli taomlar', snack: 'Snacklar', sauce: 'Souslar', dessert: 'Shirinliklar',
  soda: 'Gazli ichimliklar', drink: 'Gazsiz ichimliklar', combo: 'Kombo va setlar'
};

const rawProducts = [
  // Burgerlar
  ['Classic Burger','burger',39000,'Yumshoq bulochka, go‘shtli kotlet va yangi sabzavotlar.','burger','Mashhur'],
  ['Cheeseburger','burger',43000,'Mazali kotlet va erigan pishloq uyg‘unligi.','burger2','TOP'],
  ['Double Cheeseburger','burger',56000,'Ikki qavat kotlet va ikki karra pishloq.','burger3'],
  ['Chicken Burger','burger',37000,'Qarsildoq tovuq filesi va maxsus sous.','burger2'],
  ['BBQ Burger','burger',47000,'Barbekyu sousi bilan dudlangan ta’m.','burger'],
  ['Crispy Burger','burger',42000,'Qarsildoq tovuq, salat bargi va sous.','burger3'],
  ['Double Beef Burger','burger',59000,'Ikki dona mol go‘shtli kotlet.','burger2'],
  ['Spicy Burger','burger',44000,'Yengil achchiq sousli burger.','burger','Achchiq'],
  // Lavashlar
  ['Oddiy lavash','lavash',34000,'Go‘sht, sabzavotlar va maxsus sous.','wrap'],
  ['Pishloqli lavash','lavash',39000,'Pishloq qo‘shilgan mazali lavash.','wrap','TOP'],
  ['Mol go‘shtli lavash','lavash',42000,'Mol go‘shti va yangi sabzavotlar.','wrap'],
  ['Tovuqli lavash','lavash',36000,'Mayin tovuq filesi bilan tayyorlanadi.','wrap'],
  ['Achchiq lavash','lavash',37000,'Achchiq sousni yoqtiruvchilar uchun.','wrap','Achchiq'],
  ['Mini lavash','lavash',26000,'Yengil tamaddi uchun ixcham lavash.','wrap'],
  ['Maxsus YALLA lavash','lavash',49000,'YALLA uslubidagi maxsus lavash.','wrap','YALLA'],
  // Hot-doglar
  ['Classic Hot-Dog','hotdog',22000,'Klassik sosiska va maxsus sous.','hotdog'],
  ['Cheese Hot-Dog','hotdog',27000,'Pishloq va sosiska uyg‘unligi.','hotdog'],
  ['Double Hot-Dog','hotdog',34000,'Ikki dona sosiska bilan.','hotdog'],
  ['Maxi Hot-Dog','hotdog',39000,'Kattaroq o‘lcham, to‘yingan ta’m.','hotdog'],
  ['Spicy Hot-Dog','hotdog',26000,'Achchiq sousli hot-dog.','hotdog','Achchiq'],
  // Pizza
  ['Margarita','pizza',59000,'Pomidor, mozzarella va rayhon.','pizza'],
  ['Pepperoni','pizza',69000,'Pepperoni va pishloq bilan.','pizza','TOP'],
  ['Chicken Pizza','pizza',65000,'Tovuq filesi va pishloqli pizza.','pizza'],
  ['BBQ Pizza','pizza',72000,'BBQ sousi va mazali masalliqlar.','pizza'],
  ['Cheese Pizza','pizza',63000,'Pishloqni sevuvchilar uchun.','pizza'],
  ['Mix Pizza','pizza',75000,'Bir nechta sevimli masalliq birga.','pizza'],
  // Tovuqli taomlar
  ['Chicken Strips','chicken',32000,'Qarsildoq tovuq bo‘laklari.','chicken'],
  ['Chicken Wings','chicken',39000,'Maxsus sousli tovuq qanotlari.','chicken','TOP'],
  ['Nuggets','chicken',28000,'Yumshoq tovuq naggets bo‘laklari.','chicken'],
  ['Crispy Chicken','chicken',42000,'Qarsildoq qoplamali tovuq.','chicken'],
  ['Chicken Box','chicken',52000,'Tovuqli assortiment to‘plami.','chicken'],
  // Snacklar
  ['French Fries','snack',18000,'Oltinrang qovurilgan kartoshka.','fries'],
  ['Cheese Fries','snack',25000,'Pishloqli sous bilan fri.','fries'],
  ['Onion Rings','snack',22000,'Qarsildoq piyoz halqalari.','fries'],
  ['Potato Wedges','snack',23000,'Ziravorli kartoshka bo‘laklari.','fries'],
  ['Nuggets Snack','snack',26000,'Kichik naggets to‘plami.','chicken'],
  ['Pishloqli to‘plam','snack',31000,'Pishloqli yengil tamaddilar.','fries'],
  // Souslar
  ['Ketchup','sauce',5000,'Klassik pomidor sousi.','sauce'],
  ['Mayonez','sauce',5000,'Mayin va qaymoqli sous.','sauce'],
  ['Cheese Sauce','sauce',7000,'Pishloq ta’mli sous.','sauce'],
  ['BBQ Sauce','sauce',7000,'Dudlangan ta’mli barbekyu sousi.','sauce'],
  ['Garlic Sauce','sauce',7000,'Sarimsoq ta’mli maxsus sous.','sauce'],
  ['Spicy Sauce','sauce',6000,'Achchiq sous.','sauce','Achchiq'],
  // Shirinliklar
  ['Donut','dessert',16000,'Yumshoq va shirin ponchik.','dessert'],
  ['Cheesecake','dessert',29000,'Mayin pishloqli desert.','dessert'],
  ['Brownie','dessert',22000,'Shokoladli yumshoq desert.','dessert'],
  ['Muffin','dessert',15000,'Yengil va yumshoq maffin.','dessert'],
  ['Muzqaymoq','dessert',14000,'Salqin va mazali muzqaymoq.','dessert'],
  // Gazli ichimliklar
  ['Coca-Cola','soda',12000,'Gazlangan kola ichimligi.','drink'],
  ['Pepsi','soda',11000,'Gazlangan kola ichimligi.','drink'],
  ['Fanta','soda',11000,'Apelsin ta’mli gazli ichimlik.','drink'],
  ['Sprite','soda',11000,'Limon-ohak ta’mli gazli ichimlik.','drink'],
  ['7UP','soda',11000,'Limon ta’mli gazlangan ichimlik.','drink'],
  ['Energetik ichimlik','soda',16000,'Energetik ichimlik (namunaviy menyu).','drink'],
  ['Gazlangan suv','soda',7000,'Gazlangan ichimlik suvi.','drink'],
  // Gazsiz ichimliklar
  ['Oddiy suv','drink',5000,'Gazsiz ichimlik suvi.','drink'],
  ['Olma sharbati','drink',13000,'Olma ta’mli sharbat.','juice'],
  ['Muzli choy','drink',14000,'Salqin muzli choy.','drink'],
  ['Limonad','drink',17000,'Limonli salqin ichimlik.','juice'],
  ['Kompot','drink',12000,'Mevali kompot.','juice'],
  ['Nestea','drink',14000,'Muzli choy ichimligi.','drink'],
  ['Tabiiy mevali ichimlik','drink',18000,'Mevali ichimlik.','juice'],
  // Kombo va setlar
  ['YALLA Combo','combo',69000,'Burger, fri va ichimlikdan iborat to‘plam.','combo','YALLA'],
  ['Burger Set','combo',62000,'Burger va kartoshka fri.','combo'],
  ['Lavash Set','combo',57000,'Lavash va salqin ichimlik.','wrap'],
  ['Chicken Set','combo',65000,'Tovuqli taom va garnir.','chicken'],
  ['Family Box','combo',149000,'Birgalikda bahramand bo‘lish uchun to‘plam.','combo','OILA UCHUN'],
  ['Friends Box','combo',119000,'Do‘stlar davrasi uchun assortiment.','combo'],
  ['Maxi Combo','combo',89000,'Katta ishtaha uchun katta to‘plam.','combo','TOP']
];

const products = rawProducts.map((item, index) => ({
  id: index + 1, name: item[0], category: item[1], price: item[2], description: item[3],
  image: imageBank[item[4]] || imageBank.burger, emoji: categoryEmoji(item[1]), badge: item[5] || '', popular: item[5] === 'TOP' || item[5] === 'YALLA'
}));

function categoryEmoji(category) {
  return ({burger:'🍔',lavash:'🌯',hotdog:'🌭',pizza:'🍕',chicken:'🍗',snack:'🍟',sauce:'🥫',dessert:'🍰',soda:'🥤',drink:'🧃',combo:'🎁'})[category] || '🍽️';
}

const STORAGE_KEYS = { cart: 'yalla_cart_v1', favorites: 'yalla_favorites_v1', theme: 'yalla_theme_v1' };
function readStorage(key, fallback) {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch (error) { console.warn('Saqlangan ma’lumotni o‘qib bo‘lmadi:', error); return fallback; }
}
function saveStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (error) { console.warn('Ma’lumotni saqlab bo‘lmadi:', error); }
}

let cart = readStorage(STORAGE_KEYS.cart, []);
let favorites = readStorage(STORAGE_KEYS.favorites, []);
let activeCategory = 'all';
let searchTerm = '';
let sortMode = 'popular';
let toastTimer;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = value => `${new Intl.NumberFormat('uz-UZ').format(value)} so‘m`;
const productById = id => products.find(product => product.id === Number(id));

const productGrid = $('#productGrid');
const emptyState = $('#emptyState');
const cartPanel = $('#cartPanel');
const cartOverlay = $('#cartOverlay');
const checkoutModal = $('#checkoutModal');

function safeImage(url, alt, className = '') {
  return `<img class="${className}" src="${url}" alt="${escapeHTML(alt)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="product-fallback" aria-hidden="true">🍽️</span>`;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function renderProducts() {
  let list = products.filter(product => {
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const query = searchTerm.toLocaleLowerCase('uz');
    const searchMatch = !query || `${product.name} ${product.description} ${categoryNames[product.category]}`.toLocaleLowerCase('uz').includes(query);
    return categoryMatch && searchMatch;
  });
  if (sortMode === 'price-asc') list.sort((a,b) => a.price - b.price);
  if (sortMode === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (sortMode === 'name') list.sort((a,b) => a.name.localeCompare(b.name, 'uz'));
  if (sortMode === 'popular') list.sort((a,b) => Number(b.popular) - Number(a.popular) || a.id - b.id);

  productGrid.innerHTML = list.map((product, index) => `
    <article class="product-card" style="animation-delay:${Math.min(index * 25, 250)}ms">
      <div class="product-image-wrap">
        ${safeImage(product.image, product.name, 'product-image')}
        ${product.badge ? `<span class="product-badge">${escapeHTML(product.badge)}</span>` : ''}
        <button class="product-favorite ${favorites.includes(product.id) ? 'active' : ''}" data-favorite="${product.id}" aria-label="${favorites.includes(product.id) ? 'Sevimlilardan o‘chirish' : 'Sevimlilarga qo‘shish'}">${favorites.includes(product.id) ? '♥' : '♡'}</button>
      </div>
      <div class="product-info">
        <span class="product-category">${categoryNames[product.category]}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <p class="product-description">${escapeHTML(product.description)}</p>
        <div class="product-bottom"><span class="product-price">${money(product.price)}</span><button class="add-cart-btn" data-add="${product.id}" aria-label="${escapeHTML(product.name)} savatchaga qo‘shish">＋</button></div>
      </div>
    </article>`).join('');

  $('#resultsCount').textContent = `${list.length} ta mahsulot`;
  $('#resultsLabel').textContent = activeCategory === 'all' ? (searchTerm ? 'Qidiruv natijalari' : 'Barcha mazali takliflar') : categoryNames[activeCategory];
  productGrid.classList.toggle('hidden', list.length === 0);
  emptyState.classList.toggle('hidden', list.length !== 0);
}

function updateCounts() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  $('#cartCount').textContent = count;
  $('#cartTitleCount').textContent = `(${count})`;
  $('#favoriteCount').textContent = favorites.length;
  $('#favoritesTitleCount').textContent = `(${favorites.length})`;
}
function getCartTotal() { return cart.reduce((sum, item) => sum + (productById(item.id)?.price || 0) * item.quantity, 0); }

function addToCart(id) {
  const product = productById(id);
  if (!product) return;
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity += 1;
  else cart.push({ id: product.id, quantity: 1 });
  saveStorage(STORAGE_KEYS.cart, cart);
  renderCart(); updateCounts(); showToast(`${product.name} savatchaga qo‘shildi`);
}
function changeQuantity(id, delta) {
  const item = cart.find(entry => entry.id === Number(id));
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== Number(id));
  saveStorage(STORAGE_KEYS.cart, cart); renderCart(); updateCounts();
}
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== Number(id));
  saveStorage(STORAGE_KEYS.cart, cart); renderCart(); updateCounts(); showToast('Mahsulot savatchadan olib tashlandi');
}
function renderCart() {
  const content = $('#cartItems');
  if (!cart.length) {
    content.innerHTML = '<div class="cart-empty"><span>🛍️</span><h4>Savatchangiz hozircha bo‘sh</h4><p>Menyudan yoqtirgan taomingizni tanlang va savatchaga qo‘shing.</p></div>';
    $('#cartSubtotal').textContent = money(0);
    $('#checkoutBtn').disabled = true;
    $('#checkoutBtn').style.opacity = '.5';
    return;
  }
  content.innerHTML = cart.map(item => {
    const product = productById(item.id);
    if (!product) return '';
    return `<div class="cart-item">
      ${safeImage(product.image, product.name)}
      <div><h4>${escapeHTML(product.name)}</h4><div class="cart-item-price">${money(product.price * item.quantity)}</div>
      <div class="quantity-control"><button data-quantity="${product.id}" data-delta="-1" aria-label="Kamaytirish">−</button><span>${item.quantity}</span><button data-quantity="${product.id}" data-delta="1" aria-label="Ko‘paytirish">＋</button></div></div>
      <button class="remove-item" data-remove="${product.id}" aria-label="O‘chirish">×</button>
    </div>`;
  }).join('');
  $('#cartSubtotal').textContent = money(getCartTotal());
  $('#checkoutBtn').disabled = false;
  $('#checkoutBtn').style.opacity = '1';
}

function toggleFavorite(id) {
  const product = productById(id);
  if (!product) return;
  if (favorites.includes(product.id)) {
    favorites = favorites.filter(favoriteId => favoriteId !== product.id);
    showToast('Sevimlilardan olib tashlandi');
  } else {
    favorites.push(product.id);
    showToast('Sevimlilarga qo‘shildi');
  }
  saveStorage(STORAGE_KEYS.favorites, favorites); renderProducts(); renderFavorites(); updateCounts();
}
function renderFavorites() {
  const holder = $('#favoritesItems');
  const favoriteProducts = favorites.map(productById).filter(Boolean);
  if (!favoriteProducts.length) {
    holder.innerHTML = '<div class="favorites-empty"><div style="font-size:42px;margin-bottom:10px">♡</div>Hozircha sevimli mahsulotingiz yo‘q.<br>Yurakcha belgisini bosib, yoqtirganlaringizni saqlang.</div>';
    return;
  }
  holder.innerHTML = favoriteProducts.map(product => `<article class="favorite-card">${safeImage(product.image, product.name)}<div class="favorite-card-content"><h4>${escapeHTML(product.name)}</h4><p>${money(product.price)}</p><button data-fav-add="${product.id}">Savatchaga qo‘shish ＋</button></div></article>`).join('');
}

function openCart() {
  renderCart(); cartPanel.classList.add('open'); cartPanel.setAttribute('aria-hidden','false'); cartOverlay.classList.add('open'); document.body.classList.add('no-scroll');
}
function closeCart() {
  cartPanel.classList.remove('open'); cartPanel.setAttribute('aria-hidden','true'); cartOverlay.classList.remove('open'); document.body.classList.remove('no-scroll');
}
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('no-scroll');
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open'); modal.setAttribute('aria-hidden','true');
  if (!$('.modal-backdrop.open') && !cartPanel.classList.contains('open')) document.body.classList.remove('no-scroll');
}
function openProductDetails(id) {
  const product = productById(id);
  if (!product) return;
  $('#productModalContent').innerHTML = `<div class="product-detail">${safeImage(product.image, product.name)}<div><span class="product-category">${categoryNames[product.category]}</span><h3 id="productModalTitle">${escapeHTML(product.name)}</h3><p>${escapeHTML(product.description)}</p><strong class="detail-price">${money(product.price)}</strong><button class="btn btn-primary" data-detail-add="${product.id}">Savatchaga qo‘shish <span>＋</span></button></div></div>`;
  openModal('productModal');
}

function showToast(message) {
  $('#toastMessage').textContent = message;
  const toast = $('#toast');
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function setTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-mode', isLight);
  $('#themeIcon').textContent = isLight ? '☾' : '☼';
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isLight ? '#f6f5f0' : '#10100f');
  saveStorage(STORAGE_KEYS.theme, theme);
}

function showCheckout() {
  if (!cart.length) { showToast('Avval savatchaga mahsulot qo‘shing'); return; }
  closeCart();
  $('#checkoutForm').classList.remove('hidden');
  $('#successState').classList.add('hidden');
  $('#formError').textContent = '';
  $('#checkoutTotal').textContent = money(getCartTotal());
  openModal('checkoutModal');
}

function formatPhone(value) { return value.replace(/[^\d+]/g, ''); }
function validateCheckout() {
  const name = $('#customerName').value.trim();
  const phone = formatPhone($('#customerPhone').value);
  const address = $('#customerAddress').value.trim();
  if (name.length < 3) return 'Iltimos, ism va familiyangizni kiriting.';
  if (!/^\+?998\d{9}$/.test(phone)) return 'Telefon raqami +998 bilan boshlanib, 9 ta raqamdan iborat bo‘lsin.';
  if ($('#orderType').value === 'delivery' && address.length < 5) return 'Yetkazib berish manzilini to‘liq kiriting.';
  if (!cart.length) return 'Savatchada mahsulot yo‘q.';
  return '';
}

// Barcha asosiy bosish hodisalari.
document.addEventListener('click', event => {
  const addButton = event.target.closest('[data-add]');
  const favoriteButton = event.target.closest('[data-favorite]');
  const quantityButton = event.target.closest('[data-quantity]');
  const removeButton = event.target.closest('[data-remove]');
  const favoriteAddButton = event.target.closest('[data-fav-add]');
  const detailAddButton = event.target.closest('[data-detail-add]');
  const categoryJump = event.target.closest('[data-category-jump]');
  const orderButton = event.target.closest('[data-order]');
  const closeButton = event.target.closest('[data-close]');
  const productCard = event.target.closest('.product-card');

  if (addButton) { addToCart(addButton.dataset.add); return; }
  if (favoriteButton) { toggleFavorite(favoriteButton.dataset.favorite); return; }
  if (quantityButton) { changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.delta)); return; }
  if (removeButton) { removeFromCart(removeButton.dataset.remove); return; }
  if (favoriteAddButton) { addToCart(favoriteAddButton.dataset.favAdd); return; }
  if (detailAddButton) { addToCart(detailAddButton.dataset.detailAdd); closeModal('productModal'); return; }
  if (categoryJump) { activeCategory = categoryJump.dataset.categoryJump; updateCategoryButtons(); renderProducts(); $('#menu').scrollIntoView({behavior:'smooth'}); return; }
  if (orderButton) { showCheckout(); return; }
  if (closeButton) { const target = closeButton.dataset.close; if (target === 'cart') closeCart(); else closeModal(`${target}Modal`); return; }
  if (productCard && !event.target.closest('button')) { openProductDetails(productCard.querySelector('[data-add]')?.dataset.add); }
});

function updateCategoryButtons() {
  $$('.category-chip').forEach(button => button.classList.toggle('active', button.dataset.category === activeCategory));
}
$('#categoryFilters').addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category; updateCategoryButtons(); renderProducts();
});
$('#productSearch').addEventListener('input', event => { searchTerm = event.target.value.trim(); renderProducts(); });
$('#sortProducts').addEventListener('change', event => { sortMode = event.target.value; renderProducts(); });
$('#resetFilters').addEventListener('click', () => { activeCategory = 'all'; searchTerm = ''; sortMode = 'popular'; $('#productSearch').value = ''; $('#sortProducts').value = 'popular'; updateCategoryButtons(); renderProducts(); });
$('#openCart').addEventListener('click', openCart);
$('#cartOverlay').addEventListener('click', closeCart);
$('#openFavorites').addEventListener('click', () => { renderFavorites(); openModal('favoritesModal'); });
$('#themeToggle').addEventListener('click', () => setTheme(document.body.classList.contains('light-mode') ? 'dark' : 'light'));
$('#checkoutBtn').addEventListener('click', showCheckout);
$('#successClose').addEventListener('click', () => closeModal('checkoutModal'));

$('#checkoutForm').addEventListener('submit', event => {
  event.preventDefault();
  const error = validateCheckout();
  if (error) { $('#formError').textContent = error; return; }
  $('#formError').textContent = '';
  // Bu faqat frontend namoyishi. Haqiqiy restoran buyurtmasiga yuborilmaydi.
  const demoOrder = {
    customer: $('#customerName').value.trim(),
    phone: formatPhone($('#customerPhone').value),
    address: $('#customerAddress').value.trim(),
    type: $('#orderType').value,
    payment: $('#paymentType').value,
    note: $('#customerNote').value.trim(),
    total: getCartTotal(),
    items: cart.map(item => ({...item}))
  };
  console.info('YALLA demo buyurtma:', demoOrder);
  $('#checkoutForm').classList.add('hidden');
  $('#successState').classList.remove('hidden');
  cart = []; saveStorage(STORAGE_KEYS.cart, cart); renderCart(); updateCounts();
});

$('#orderType').addEventListener('change', event => {
  const addressField = $('#customerAddress').closest('.form-field');
  if (event.target.value === 'pickup') {
    $('#customerAddress').required = false;
    $('#customerAddress').placeholder = 'Olib ketish uchun manzil shart emas';
    addressField.style.opacity = '.55';
  } else {
    $('#customerAddress').required = true;
    $('#customerAddress').placeholder = 'Shahar, ko‘cha, uy raqami';
    addressField.style.opacity = '1';
  }
});
$('#customerPhone').addEventListener('input', event => {
  // Raqam kiritishni yengillashtiradi, ammo foydalanuvchi matnini majburan o‘zgartirmaydi.
  event.target.value = event.target.value.replace(/[^\d+\s()-]/g, '').slice(0, 19);
});

// Mobil navigatsiya.
$('#mobileMenuBtn').addEventListener('click', () => {
  const nav = $('#mainNav');
  const isOpen = nav.classList.toggle('open');
  $('#mobileMenuBtn').setAttribute('aria-expanded', String(isOpen));
});
$$('.nav-link').forEach(link => link.addEventListener('click', () => {
  $('#mainNav').classList.remove('open'); $('#mobileMenuBtn').setAttribute('aria-expanded','false');
}));

// Modal fonini bosish va Escape orqali yopish.
$$('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', event => {
  if (event.target === backdrop) closeModal(backdrop.id);
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeCart();
    $$('.modal-backdrop.open').forEach(modal => closeModal(modal.id));
    $('#mainNav').classList.remove('open');
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault(); $('#productSearch').focus(); $('#menu').scrollIntoView({behavior:'smooth'});
  }
});

// Scroll effektlari, faol navigatsiya va yuqoriga qaytish tugmasi.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
}, {threshold: .12});
$$('.reveal').forEach(element => revealObserver.observe(element));
const sections = $$('main section[id]');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) $$('.nav-link').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, {rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section => sectionObserver.observe(section));
window.addEventListener('scroll', () => $('#backToTop').classList.toggle('visible', window.scrollY > 500), {passive:true});
$('#backToTop').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// Dastlabki holat.
const savedTheme = readStorage(STORAGE_KEYS.theme, 'dark');
setTheme(savedTheme);
renderProducts(); renderCart(); renderFavorites(); updateCounts();
$('#currentYear').textContent = new Date().getFullYear();
