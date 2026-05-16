// Rider — five screens. All assume primitives.jsx loaded first.

const { Icon, Btn, FieldRow, SheetHandle, Divider, ListRow, PinFrom, PinTo, MapBG } = window;

// 1) HOME — Where to? sheet
const ScreenHome = ({ onWhereTo }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%', background: '#E2E2E2', overflow: 'hidden' }}>
    <MapBG />
    {/* Top floating header */}
    <div style={{ position: 'absolute', top: 60, left: 16, right: 16, display: 'flex', gap: 8 }}>
      <div style={{ background: '#FFF', borderRadius: 999, padding: '8px 14px',
        display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
        font: '500 14px var(--font-text)' }}>
        <Icon name="zap" size={16} />
        Personal
        <Icon name="chevron-down" size={16} />
      </div>
    </div>
    {/* Sheet */}
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: '#FFF',
      borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '8px 20px 28px',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.10)' }}>
      <SheetHandle />
      <h2 style={{ font: '700 28px/32px var(--font-display)', letterSpacing: '-0.015em',
        margin: '0 0 16px', color: '#000' }}>Plan your ride</h2>
      <FieldRow filled icon={<Icon name="search" size={18} color="#000" />}
        onClick={onWhereTo}
        trailing={<span style={{ font: '500 13px var(--font-text)', color: '#757575',
          display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width:1, height:14, background:'#CBCBCB' }}/>
          <Icon name="clock" size={16} /> Now
        </span>}>
        Where to?
      </FieldRow>
      <div style={{ marginTop: 18, display: 'flex', gap: 12 }}>
        <ShortcutTile icon="home" label="Home" />
        <ShortcutTile icon="briefcase" label="Work" />
        <ShortcutTile icon="plus" label="Saved" />
      </div>
    </div>
  </div>
);

const ShortcutTile = ({ icon, label }) => (
  <div style={{ flex: 1, background: '#F6F6F6', borderRadius: 12, padding: '14px 12px',
    display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}>
    <Icon name={icon} size={20} />
    <div style={{ font: '500 14px var(--font-text)', color: '#000' }}>{label}</div>
  </div>
);

// 2) SEARCH — destination entry
const ScreenSearch = ({ onPick, onBack }) => {
  const recents = [
    { title: 'San Francisco International Airport', subtitle: 'SFO · Terminal 2', icon: 'plane' },
    { title: 'Tartine Bakery', subtitle: '600 Guerrero St, San Francisco', icon: 'map-pin' },
    { title: 'Salesforce Tower', subtitle: '415 Mission St, San Francisco', icon: 'briefcase' },
    { title: 'Ferry Building', subtitle: '1 Ferry Building, San Francisco', icon: 'map-pin' },
  ];
  return (
    <div style={{ background: '#FFF', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '60px 16px 0', display: 'flex', gap: 12, alignItems: 'center' }}>
        <button onClick={onBack} style={{ background: 'transparent', border: 'none', padding: 4, cursor: 'pointer' }}>
          <Icon name="arrow-left" size={24} />
        </button>
        <span style={{ font: '500 17px var(--font-text)' }}>Plan your ride</span>
      </div>
      <div style={{ padding: '14px 16px 8px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <FieldRow filled icon={<PinFrom />}>Current location</FieldRow>
        <FieldRow style={{ border: '2px solid #000', padding: '13px 15px' }}
          icon={<PinTo />}
          trailing={<button style={{ background:'transparent', border:'none', padding:0, cursor:'pointer' }}>
            <Icon name="plus" size={20} /></button>}>
          <span style={{ color: '#757575' }}>Where to?</span>
        </FieldRow>
      </div>
      <Divider />
      <div style={{ padding: '8px 16px', flex: 1, overflow: 'auto' }}>
        <ListRow icon={<Icon name="map-pin" size={18} />}
          title="Set location on map" subtitle="Drag to pinpoint exactly"
          trailing={<Icon name="chevron-right" size={18} color="#757575" />} />
        <Divider />
        <div style={{ font: '500 13px var(--font-text)', color: '#757575',
          letterSpacing: '0.02em', textTransform: 'uppercase', padding: '14px 0 6px' }}>Recent</div>
        {recents.map((r, i) => (
          <React.Fragment key={i}>
            <ListRow icon={<Icon name={r.icon} size={18} />}
              title={r.title} subtitle={r.subtitle}
              onClick={() => onPick(r)} />
            {i < recents.length - 1 && <Divider inset={54} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// 3) CHOOSE A RIDE — tier picker
const ScreenChoose = ({ onConfirm, onBack, destination }) => {
  const [tier, setTier] = React.useState('UberX');
  const tiers = [
    { name: 'UberX', desc: 'Affordable rides, all to yourself', eta: '3 min', price: 12.50, seats: 4, icon: '../../assets/vehicle-uberx.svg' },
    { name: 'UberXL', desc: 'Affordable rides for groups up to 6', eta: '5 min', price: 18.20, seats: 6, icon: '../../assets/vehicle-suv.svg' },
    { name: 'Comfort', desc: 'Newer cars with extra legroom', eta: '4 min', price: 16.80, seats: 4, icon: '../../assets/vehicle-uberx.svg' },
    { name: 'Uber Black', desc: 'Premium rides in luxury cars', eta: '6 min', price: 28.40, seats: 4, icon: '../../assets/vehicle-uberblack.svg' },
  ];
  const sel = tiers.find(t => t.name === tier);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#E2E2E2', overflow: 'hidden' }}>
      <MapBG style={{ bottom: 380 }} />
      {/* Back button on map */}
      <div style={{ position: 'absolute', top: 60, left: 16 }}>
        <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: 20, background: '#FFF',
          border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', cursor: 'pointer',
          display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Icon name="arrow-left" size={20} />
        </button>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: '#FFF',
        borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '8px 0 20px',
        maxHeight: '68%', boxShadow: '0 -4px 24px rgba(0,0,0,0.12)' }}>
        <SheetHandle />
        <div style={{ padding: '0 20px 8px', font: '700 22px/28px var(--font-display)',
          letterSpacing: '-0.01em' }}>Choose a ride</div>
        <div style={{ padding: '0 8px', maxHeight: 240, overflow: 'auto' }}>
          {tiers.map((t, i) => (
            <div key={t.name} onClick={() => setTier(t.name)}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
                background: tier === t.name ? '#F6F6F6' : 'transparent',
                borderRadius: 12, cursor: 'pointer', margin: '2px 0' }}>
              <img src={t.icon} style={{ width: 56, height: 36, objectFit: 'contain' }} alt="" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                  <span style={{ font: '700 17px var(--font-text)' }}>{t.name}</span>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:3,
                    font: '500 13px var(--font-text)', color: '#000' }}>
                    <Icon name="user" size={12}/>{t.seats}</span>
                </div>
                <div style={{ font: '400 13px var(--font-text)', color: '#757575' }}>
                  <span style={{ color: '#000', fontWeight: 500 }}>{t.eta} away</span> · {t.desc}
                </div>
              </div>
              <div style={{ font: '700 16px var(--font-text)' }}>${t.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '8px 16px', display: 'flex', gap: 8 }}>
          <Btn kind="secondary" size="sm" style={{ borderRadius: 999, padding: '8px 14px',
            display: 'inline-flex', gap: 6 }}>
            <Icon name="credit-card" size={14}/> •••• 4242
          </Btn>
          <Btn kind="secondary" size="sm" style={{ borderRadius: 999, padding: '8px 14px',
            display: 'inline-flex', gap: 6 }}>
            <Icon name="map-pin" size={14}/> Pickup at 415 Mission
          </Btn>
        </div>
        <div style={{ padding: '4px 16px 0' }}>
          <Btn kind="primary" fullWidth onClick={() => onConfirm(sel)}>
            Choose {tier}
          </Btn>
        </div>
      </div>
    </div>
  );
};

// 4) CONFIRM — final review before booking
const ScreenConfirm = ({ tier, onBack, onBook }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%', background: '#E2E2E2', overflow: 'hidden' }}>
    <MapBG style={{ bottom: 320 }}/>
    <div style={{ position: 'absolute', top: 60, left: 16 }}>
      <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: 20, background: '#FFF',
        border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', cursor: 'pointer',
        display:'flex', alignItems:'center', justifyContent:'center' }}>
        <Icon name="arrow-left" size={20}/>
      </button>
    </div>
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: '#FFF',
      borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '8px 20px 24px',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.12)' }}>
      <SheetHandle />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <img src={tier.icon} style={{ width: 64, height: 44, objectFit: 'contain' }} alt=""/>
        <div style={{ flex: 1 }}>
          <div style={{ font: '700 20px var(--font-text)' }}>Confirm {tier.name}</div>
          <div style={{ font: '400 14px var(--font-text)', color: '#757575' }}>
            Arrives in {tier.eta}
          </div>
        </div>
        <div style={{ font: '700 20px var(--font-text)' }}>${tier.price.toFixed(2)}</div>
      </div>
      <Divider />
      <div style={{ padding: '12px 0' }}>
        <ListRow icon={<Icon name="credit-card" size={18}/>}
          title="Personal · •••• 4242"
          trailing={<Icon name="chevron-right" size={18} color="#757575"/>} />
        <Divider inset={54}/>
        <ListRow icon={<Icon name="ticket" size={18}/>}
          title="Add promo code"
          trailing={<Icon name="chevron-right" size={18} color="#757575"/>} />
      </div>
      <Btn kind="primary" fullWidth size="lg" onClick={onBook}>Confirm pickup</Btn>
    </div>
  </div>
);

// 5) TRIP — in-progress
const ScreenTrip = ({ onDone }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%', background: '#E2E2E2', overflow: 'hidden' }}>
    <MapBG />
    {/* Top safety bar */}
    <div style={{ position: 'absolute', top: 60, left: 16, right: 16, display: 'flex', gap: 8 }}>
      <div style={{ flex: 1, background: '#FFF', borderRadius: 999, padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>
        <Icon name="shield" size={18} color="#000"/>
        <span style={{ font: '500 14px var(--font-text)' }}>Safety</span>
        <span style={{ marginLeft: 'auto', font: '400 13px var(--font-text)', color:'#757575' }}>Share trip</span>
      </div>
    </div>

    {/* Sheet */}
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: '#FFF',
      borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '8px 20px 20px',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.12)' }}>
      <SheetHandle />
      <div style={{ font: '700 24px var(--font-display)', letterSpacing: '-0.01em' }}>
        Marco is arriving · 3 min
      </div>
      <div style={{ font: '400 14px var(--font-text)', color: '#757575', marginTop: 4 }}>
        Meet at 415 Mission St
      </div>

      <div style={{ marginTop: 14, padding: '14px 14px', background: '#F6F6F6', borderRadius: 12,
        display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 48, height: 48, borderRadius: 24, background: '#000', color: '#FFF',
          display:'flex', alignItems:'center', justifyContent:'center', font: '700 17px var(--font-text)' }}>MR</div>
        <div style={{ flex: 1 }}>
          <div style={{ font: '700 16px var(--font-text)' }}>Marco</div>
          <div style={{ font: '400 13px var(--font-text)', color: '#757575',
            display:'inline-flex', alignItems:'center', gap: 4 }}>
            <Icon name="star" size={12}/> 4.92 · Honda Civic · <strong style={{color:'#000'}}>7XYZ123</strong>
          </div>
        </div>
        <button style={{ width: 40, height: 40, borderRadius: 20, background: '#FFF', border:'1px solid #E2E2E2',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
          <Icon name="message-square" size={18}/>
        </button>
        <button style={{ width: 40, height: 40, borderRadius: 20, background: '#FFF', border:'1px solid #E2E2E2',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
          <Icon name="phone" size={18}/>
        </button>
      </div>

      <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
        <Btn kind="ghost" size="sm" fullWidth>Add a stop</Btn>
        <Btn kind="ghost" size="sm" fullWidth onClick={onDone}>Cancel trip</Btn>
      </div>
    </div>
  </div>
);

Object.assign(window, { ScreenHome, ScreenSearch, ScreenChoose, ScreenConfirm, ScreenTrip });
