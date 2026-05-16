// Eats — screens. Browse, Restaurant, Cart.
const { EIcon, EBtn, PillRow, Pill, CategoryTile, RestaurantCard, MenuItem, Stepper } = window;

const RESTAURANTS = [
  { id: 'tartine', name: 'Tartine Bakery', photo: '../../assets/photo-food-burger.svg',
    meta: 'Bakery · $$', eta: '15–25 min', fee: '$0.49', badge: 'Promo',
    items: [
      { id: 'a', name: 'Morning Bun', desc: 'Croissant dough, orange zest, cinnamon sugar', price: 5.50, image: '../../assets/photo-food-burger.svg' },
      { id: 'b', name: 'Country Bread Toast', desc: 'Naturally leavened bread, cultured butter, sea salt', price: 8.00, image: '../../assets/photo-food-burger.svg' },
      { id: 'c', name: 'Avocado Toast', desc: 'Country bread, avocado, lemon, pepper flakes', price: 14.50, image: '../../assets/photo-food-burger.svg' },
      { id: 'd', name: 'Espresso', desc: 'Single origin, locally roasted', price: 3.75, image: '../../assets/photo-food-burger.svg' },
    ]
  },
  { id: 'mission', name: 'Mission Pizza', photo: '../../assets/photo-food-pizza.svg',
    meta: 'Pizza · $$', eta: '20–30 min', fee: '$1.99' },
  { id: 'ichiraku', name: 'Ichiraku Sushi', photo: '../../assets/photo-food-sushi.svg',
    meta: 'Sushi · $$$', eta: '25–35 min', fee: '$2.49' },
  { id: 'el-farolito', name: 'El Farolito', photo: '../../assets/photo-food-burger.svg',
    meta: 'Mexican · $', eta: '10–20 min', fee: '$0.99', badge: 'Buy 1, get 1' },
];

const ScreenBrowse = ({ onOpen }) => (
  <div style={{ background: '#FFF', minHeight: '100%' }}>
    {/* Sticky header */}
    <div style={{ position: 'sticky', top: 0, background: '#FFF', zIndex: 5,
      borderBottom: '1px solid #EEE' }}>
      <div style={{ padding: '54px 16px 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <div style={{ font: '400 12px var(--font-text)', color: '#757575' }}>Deliver now to</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4,
            font: '700 18px var(--font-text)' }}>
            415 Mission St <EIcon name="chevron-down" size={18}/>
          </div>
        </div>
        <button style={{ width: 40, height: 40, borderRadius: 20, background: '#F6F6F6',
          border: 'none', cursor: 'pointer', display:'flex',alignItems:'center',justifyContent:'center' }}>
          <EIcon name="user" size={20}/>
        </button>
      </div>
      <div style={{ padding: '0 16px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10,
          background: '#F6F6F6', borderRadius: 999, padding: '10px 16px' }}>
          <EIcon name="search" size={18} color="#757575"/>
          <span style={{ font: '400 15px var(--font-text)', color: '#757575' }}>Search Uber Eats</span>
        </div>
      </div>
      <PillRow style={{ paddingBottom: 12 }}>
        <Pill selected icon={<EIcon name="zap" size={14}/>}>Deliver</Pill>
        <Pill icon={<EIcon name="shopping-bag" size={14}/>}>Pickup</Pill>
        <Pill icon={<EIcon name="package" size={14}/>}>Grocery</Pill>
      </PillRow>
    </div>

    {/* Categories */}
    <div style={{ padding: '16px 0 8px' }}>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 16px' }}>
        <CategoryTile image="../../assets/photo-food-burger.svg" label="Burgers"/>
        <CategoryTile image="../../assets/photo-food-pizza.svg" label="Pizza" bg="#FFD27A"/>
        <CategoryTile image="../../assets/photo-food-sushi.svg" label="Sushi" bg="#E2E2E2"/>
        <CategoryTile image="../../assets/photo-food-burger.svg" label="Mexican" bg="#FFC043"/>
        <CategoryTile image="../../assets/photo-food-burger.svg" label="Coffee" bg="#BEDDCA"/>
        <CategoryTile image="../../assets/photo-food-burger.svg" label="Healthy" bg="#7CBA9E"/>
      </div>
    </div>

    {/* Section: featured */}
    <div style={{ padding: '12px 16px 4px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3 style={{ font: '700 20px var(--font-display)', letterSpacing: '-0.01em', margin: 0 }}>Featured</h3>
      <button style={{ font: '500 14px var(--font-text)', background: 'transparent',
        border: 'none', cursor: 'pointer', color: '#000', textDecoration: 'underline' }}>See all</button>
    </div>
    <div style={{ padding: '8px 16px 24px', display: 'grid', gap: 18 }}>
      {RESTAURANTS.map(r => (
        <RestaurantCard key={r.id} {...r} onClick={() => onOpen(r)} />
      ))}
    </div>
  </div>
);

const ScreenRestaurant = ({ restaurant, cart, setCart, onBack, onCart }) => {
  const r = restaurant;
  const items = r.items || RESTAURANTS[0].items;
  const add = (id) => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const sub = (id) => setCart(c => {
    const n = (c[id] || 0) - 1;
    const next = { ...c };
    if (n <= 0) delete next[id]; else next[id] = n;
    return next;
  });
  const totalCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const subtotal = items.reduce((sum, it) => sum + (cart[it.id] || 0) * it.price, 0);
  return (
    <div style={{ background: '#FFF', minHeight: '100%', position: 'relative' }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: 200 }}>
        <img src={r.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        <button onClick={onBack} style={{ position: 'absolute', top: 56, left: 16,
          width: 40, height: 40, borderRadius: 20, background: '#FFF', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <EIcon name="arrow-left" size={20}/>
        </button>
        <button style={{ position: 'absolute', top: 56, right: 16,
          width: 40, height: 40, borderRadius: 20, background: '#FFF', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <EIcon name="share-2" size={18}/>
        </button>
      </div>
      <div style={{ padding: '16px 16px 12px' }}>
        <h2 style={{ font: '700 26px var(--font-display)', letterSpacing: '-0.015em', margin: 0 }}>{r.name}</h2>
        <div style={{ font: '400 14px var(--font-text)', color: '#757575', marginTop: 4 }}>
          {r.meta} · {r.eta} · {r.fee} delivery
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 8,
          font: '500 14px var(--font-text)' }}>
          <EIcon name="star" size={14}/> 4.7 (1,200+ ratings) · <span style={{ color: '#066E3A' }}>Top rated</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #EEE', borderBottom: '1px solid #EEE',
        padding: '12px 16px', font: '500 14px var(--font-text)' }}>
        <span style={{ color: '#066E3A' }}>● 25% off your order</span>
        <span style={{ color: '#757575' }}> · Spend $20, save $5</span>
      </div>
      <div style={{ padding: '16px 16px 100px' }}>
        <div style={{ font: '700 20px var(--font-display)', margin: '8px 0 4px' }}>Featured items</div>
        {items.map(it => (
          <MenuItem key={it.id} {...it}
            qty={cart[it.id] || 0}
            onAdd={() => add(it.id)}
            onMinus={() => sub(it.id)} />
        ))}
      </div>
      {totalCount > 0 && (
        <div style={{ position: 'sticky', bottom: 0, left: 0, right: 0, padding: '12px 16px 16px',
          background: 'linear-gradient(to top, #FFF 60%, rgba(255,255,255,0))' }}>
          <button onClick={onCart} style={{ width: '100%', background: '#000', color: '#FFF',
            border: 'none', borderRadius: 999, padding: '14px 20px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            font: '500 16px var(--font-text)' }}>
            <span style={{ background: '#FFF', color: '#000', borderRadius: 999, padding: '2px 10px',
              font: '700 14px var(--font-text)' }}>{totalCount}</span>
            View cart
            <span>${subtotal.toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
};

const ScreenCart = ({ restaurant, cart, setCart, onBack, onPlace }) => {
  const items = (restaurant?.items || RESTAURANTS[0].items).filter(i => cart[i.id]);
  const subtotal = items.reduce((s, it) => s + (cart[it.id] || 0) * it.price, 0);
  const fee = 2.99, service = subtotal * 0.10, tax = subtotal * 0.087;
  const total = subtotal + fee + service + tax;
  return (
    <div style={{ background: '#FFF', minHeight: '100%' }}>
      <div style={{ padding: '54px 16px 12px', display: 'flex', alignItems: 'center', gap: 12,
        borderBottom: '1px solid #EEE' }}>
        <button onClick={onBack} style={{ background: 'transparent', border: 'none',
          padding: 4, cursor: 'pointer' }}><EIcon name="arrow-left" size={22}/></button>
        <div>
          <div style={{ font: '700 18px var(--font-text)' }}>{restaurant?.name || 'Your cart'}</div>
          <div style={{ font: '400 13px var(--font-text)', color: '#757575' }}>
            Delivery to 415 Mission St · {restaurant?.eta || '20 min'}
          </div>
        </div>
      </div>
      <div style={{ padding: '8px 16px' }}>
        {items.map(it => (
          <div key={it.id} style={{ display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 0', borderBottom: '1px solid #EEE' }}>
            <Stepper qty={cart[it.id]}
              onPlus={() => setCart(c => ({ ...c, [it.id]: (c[it.id]||0)+1 }))}
              onMinus={() => setCart(c => {
                const n = (c[it.id]||0)-1; const next = { ...c };
                if (n <= 0) delete next[it.id]; else next[it.id] = n; return next; })} />
            <div style={{ flex: 1 }}>
              <div style={{ font: '500 16px var(--font-text)' }}>{it.name}</div>
            </div>
            <div style={{ font: '500 16px var(--font-text)' }}>${(it.price * cart[it.id]).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '16px 16px 4px' }}>
        <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
        <Row label="Delivery fee" value={`$${fee.toFixed(2)}`} />
        <Row label="Service fee" value={`$${service.toFixed(2)}`} />
        <Row label="Sales tax" value={`$${tax.toFixed(2)}`} />
        <div style={{ height: 1, background: '#EEE', margin: '8px 0' }} />
        <Row label="Total" value={`$${total.toFixed(2)}`} bold />
      </div>
      <div style={{ padding: '16px', position: 'sticky', bottom: 0, background: '#FFF',
        borderTop: '1px solid #EEE' }}>
        <button onClick={onPlace} style={{ width: '100%', background: '#06C167', color: '#FFF',
          border: 'none', borderRadius: 999, padding: '16px 20px', cursor: 'pointer',
          font: '500 17px var(--font-text)' }}>
          Place order · ${total.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

const Row = ({ label, value, bold }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0',
    font: `${bold ? 700 : 400} ${bold ? 16 : 14}px var(--font-text)`,
    color: bold ? '#000' : '#545454' }}>
    <span>{label}</span><span>{value}</span>
  </div>
);

Object.assign(window, { ScreenBrowse, ScreenRestaurant, ScreenCart, RESTAURANTS });
