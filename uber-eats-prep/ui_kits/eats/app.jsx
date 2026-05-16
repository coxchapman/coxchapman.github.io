const { IOSDevice, ScreenBrowse, ScreenRestaurant, ScreenCart, RESTAURANTS } = window;

const App = () => {
  const [route, setRoute] = React.useState('browse');
  const [restaurant, setRestaurant] = React.useState(null);
  const [cart, setCart] = React.useState({ a: 1, b: 1 });

  return (
    <div style={{ minHeight: '100vh', background: '#F6F6F6', display: 'flex',
      flexDirection: 'column', alignItems: 'center', padding: '32px 16px', gap: 24 }}>
      <div style={{ font: '700 16px var(--font-text)', color: '#757575',
        display:'flex', gap: 10, alignItems:'center' }}>
        <img src="../../assets/uber-eats-wordmark.svg" style={{ height: 18 }} />
        · {route}
      </div>
      <IOSDevice>
        {route === 'browse' && <ScreenBrowse onOpen={r => { setRestaurant(r); setRoute('restaurant'); }} />}
        {route === 'restaurant' && <ScreenRestaurant
          restaurant={restaurant || RESTAURANTS[0]} cart={cart} setCart={setCart}
          onBack={() => setRoute('browse')} onCart={() => setRoute('cart')} />}
        {route === 'cart' && <ScreenCart restaurant={restaurant || RESTAURANTS[0]}
          cart={cart} setCart={setCart}
          onBack={() => setRoute('restaurant')}
          onPlace={() => { setCart({}); setRoute('browse'); }} />}
      </IOSDevice>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', background:'#FFF',
        padding:'10px 14px', borderRadius: 999, border:'1px solid #E2E2E2' }}>
        {['browse','restaurant','cart'].map(r => (
          <button key={r} onClick={() => setRoute(r)} style={{
            font: '500 13px var(--font-text)', padding: '6px 12px', borderRadius: 999, cursor: 'pointer',
            border: 'none',
            background: route === r ? '#06C167' : 'transparent',
            color: route === r ? '#FFF' : '#000',
          }}>{r}</button>
        ))}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
