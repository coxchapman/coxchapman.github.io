// Eats — primitives. Photo cards, category pills, qty stepper.

const eIcon = ({ name, size = 22, stroke = 2, color, style }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    i.setAttribute('width', size);
    i.setAttribute('height', size);
    i.setAttribute('stroke-width', stroke);
    ref.current.appendChild(i);
    window.lucide.createIcons({ attrs: { 'stroke-linecap': 'square', 'stroke-linejoin': 'miter' } });
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: 'inline-flex', color: color || 'currentColor', ...style }} />;
};
const EIcon = eIcon;

const EBtn = ({ kind = 'primary', size = 'md', children, onClick, fullWidth, style }) => {
  const base = {
    fontFamily: 'var(--font-text)', fontWeight: 500, border: 'none', cursor: 'pointer',
    borderRadius: 999, transition: 'opacity 120ms, background 120ms',
    width: fullWidth ? '100%' : undefined,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  };
  const sizes = {
    sm: { fontSize: 14, padding: '8px 16px' },
    md: { fontSize: 16, padding: '14px 22px' },
    lg: { fontSize: 17, padding: '16px 24px' },
  };
  const kinds = {
    primary: { background: '#000', color: '#FFF' },
    green:   { background: '#06C167', color: '#FFF' },
    secondary: { background: '#EEEEEE', color: '#000' },
    ghost: { background: 'transparent', color: '#000', border: '1px solid #E2E2E2' },
  };
  return (
    <button style={{ ...base, ...sizes[size], ...kinds[kind], ...style }} onClick={onClick}>
      {children}
    </button>
  );
};

// Pill row — horizontally scrolling chips
const PillRow = ({ children, style }) => (
  <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '4px 16px',
    scrollbarWidth: 'none', ...style }}>
    {children}
  </div>
);
const Pill = ({ selected, children, icon, onClick }) => (
  <div onClick={onClick} style={{
    display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px',
    borderRadius: 999, whiteSpace: 'nowrap', cursor: 'pointer',
    border: selected ? '1.5px solid #000' : '1px solid #E2E2E2',
    background: selected ? '#000' : '#FFF',
    color: selected ? '#FFF' : '#000',
    font: '500 14px var(--font-text)',
  }}>
    {icon}{children}
  </div>
);

// Category circle (round avatar w/ photo + label below)
const CategoryTile = ({ image, label, bg = '#FFE3A1' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 72 }}>
    <div style={{ width: 64, height: 64, borderRadius: 32, background: bg, overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {image && <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
    </div>
    <div style={{ font: '500 12px var(--font-text)', color: '#000' }}>{label}</div>
  </div>
);

// Restaurant card — full-width photo, title, meta, delivery
const RestaurantCard = ({ name, photo, meta, eta, fee, badge, onClick, big }) => (
  <div onClick={onClick} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ position: 'relative', aspectRatio: big ? '2.1' : '1.7',
      borderRadius: 8, overflow: 'hidden', background: '#EEE' }}>
      <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      {badge && <div style={{ position: 'absolute', top: 10, left: 10, background: '#FFF',
        padding: '4px 8px', borderRadius: 4, font: '700 11px var(--font-text)', letterSpacing: '0.02em',
        textTransform: 'uppercase' }}>{badge}</div>}
      <button style={{ position: 'absolute', top: 10, right: 10, width: 32, height: 32,
        borderRadius: 16, background: '#FFF', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <EIcon name="heart" size={16}/>
      </button>
      {fee !== undefined && (
        <div style={{ position: 'absolute', bottom: 10, left: 10, background: '#FFF',
          padding: '4px 10px', borderRadius: 999, font: '500 12px var(--font-text)',
          display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <EIcon name="package" size={12}/> {fee}
        </div>
      )}
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
      <div style={{ flex: 1, font: '700 16px var(--font-text)', color: '#000' }}>{name}</div>
      <div style={{ font: '500 14px var(--font-text)', color: '#000',
        display: 'inline-flex', alignItems: 'center', gap: 2 }}>
        <EIcon name="star" size={14}/> 4.7
      </div>
    </div>
    <div style={{ font: '400 13px var(--font-text)', color: '#757575' }}>
      {meta} · {eta}
    </div>
  </div>
);

// Quantity stepper
const Stepper = ({ qty, onMinus, onPlus, color = '#000' }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 0,
    background: '#FFF', borderRadius: 999, border: '1px solid #E2E2E2' }}>
    <button onClick={onMinus} style={{ width: 32, height: 32, border: 'none', background: 'transparent',
      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color }}>
      <EIcon name="minus" size={16}/>
    </button>
    <span style={{ font: '700 15px var(--font-text)', minWidth: 16, textAlign: 'center', color }}>{qty}</span>
    <button onClick={onPlus} style={{ width: 32, height: 32, border: 'none', background: 'transparent',
      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color }}>
      <EIcon name="plus" size={16}/>
    </button>
  </div>
);

// Menu item row — text left, image right, stepper or add button
const MenuItem = ({ name, desc, price, image, qty, onAdd, onMinus }) => (
  <div style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: '1px solid #EEEEEE' }}>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ font: '500 16px var(--font-text)', color: '#000' }}>{name}</div>
      {desc && <div style={{ font: '400 13px/18px var(--font-text)', color: '#757575',
        marginTop: 4, overflow: 'hidden', textOverflow: 'ellipsis',
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{desc}</div>}
      <div style={{ font: '500 15px var(--font-text)', color: '#000', marginTop: 6 }}>${price.toFixed(2)}</div>
    </div>
    <div style={{ position: 'relative', flexShrink: 0 }}>
      <div style={{ width: 96, height: 96, borderRadius: 8, overflow: 'hidden', background: '#EEE' }}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ position: 'absolute', bottom: -10, right: -8 }}>
        {qty > 0 ? (
          <Stepper qty={qty} onMinus={onMinus} onPlus={onAdd} />
        ) : (
          <button onClick={onAdd} style={{ width: 32, height: 32, borderRadius: 16, background: '#FFF',
            border: '1px solid #E2E2E2', cursor: 'pointer', display: 'flex', alignItems: 'center',
            justifyContent: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>
            <EIcon name="plus" size={18}/>
          </button>
        )}
      </div>
    </div>
  </div>
);

Object.assign(window, { EIcon, EBtn, PillRow, Pill, CategoryTile, RestaurantCard, Stepper, MenuItem });
