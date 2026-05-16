// Rider — app shell. Owns navigation between the 5 screens.

const { Btn, ScreenHome, ScreenSearch, ScreenChoose, ScreenConfirm, ScreenTrip, IOSDevice } = window;

const App = () => {
  const [route, setRoute] = React.useState('home'); // home | search | choose | confirm | trip
  const [destination, setDestination] = React.useState(null);
  const [tier, setTier] = React.useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#F6F6F6', display: 'flex',
      flexDirection: 'column', alignItems: 'center', padding: '32px 16px', gap: 24 }}>
      <div style={{ font: '700 16px var(--font-text)', color: '#757575', alignSelf:'center',
        display:'flex', gap: 8, alignItems:'center' }}>
        <img src="../../assets/uber-app-icon.svg" style={{ width: 32, height: 32, borderRadius: 6 }} />
        Rider · {route}
      </div>

      <IOSDevice>
        {route === 'home' && <ScreenHome onWhereTo={() => setRoute('search')} />}
        {route === 'search' && <ScreenSearch onBack={() => setRoute('home')}
          onPick={(d) => { setDestination(d); setRoute('choose'); }} />}
        {route === 'choose' && <ScreenChoose destination={destination}
          onBack={() => setRoute('search')}
          onConfirm={(t) => { setTier(t); setRoute('confirm'); }} />}
        {route === 'confirm' && <ScreenConfirm tier={tier}
          onBack={() => setRoute('choose')}
          onBook={() => setRoute('trip')} />}
        {route === 'trip' && <ScreenTrip onDone={() => setRoute('home')} />}
      </IOSDevice>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center',
        background:'#FFF', padding:'10px 14px', borderRadius: 999, border:'1px solid #E2E2E2' }}>
        {['home','search','choose','confirm','trip'].map(r => (
          <button key={r} onClick={() => setRoute(r)} style={{
            font: '500 13px var(--font-text)',
            padding: '6px 12px', borderRadius: 999, cursor: 'pointer',
            border: 'none',
            background: route === r ? '#000' : 'transparent',
            color: route === r ? '#FFF' : '#000',
          }}>{r}</button>
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
