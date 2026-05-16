// Rider — primitives. Buttons, list rows, inputs, sheet chrome.
// Depends on Lucide loaded globally (`lucide`) and Base color/type CSS.

const Icon = ({ name, size = 24, color, stroke = 2, style }) => {
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

const Btn = ({ kind = 'primary', size = 'md', children, onClick, fullWidth, style }) => {
  const base = {
    fontFamily: 'var(--font-text)',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    borderRadius: 8,
    transition: 'opacity 120ms, background 120ms, transform 100ms',
    width: fullWidth ? '100%' : undefined,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  };
  const sizes = {
    sm: { fontSize: 14, padding: '8px 14px' },
    md: { fontSize: 16, padding: '14px 22px' },
    lg: { fontSize: 17, padding: '16px 24px' },
  };
  const kinds = {
    primary:   { background: '#000', color: '#FFF' },
    secondary: { background: '#EEEEEE', color: '#000' },
    ghost:     { background: 'transparent', color: '#000', border: '1px solid #E2E2E2' },
    inverse:   { background: '#FFF', color: '#000' },
    green:     { background: '#06C167', color: '#FFF' },
  };
  return (
    <button style={{ ...base, ...sizes[size], ...kinds[kind], ...style }}
      onClick={onClick}
      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
      onMouseUp={e => e.currentTarget.style.transform = ''}
      onMouseLeave={e => e.currentTarget.style.transform = ''}>
      {children}
    </button>
  );
};

const FieldRow = ({ icon, children, onClick, trailing, filled, style }) => (
  <div onClick={onClick} style={{
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '14px 16px', borderRadius: 8,
    background: filled ? '#EEEEEE' : '#FFF',
    border: filled ? 'none' : '1px solid #E2E2E2',
    cursor: onClick ? 'pointer' : 'default',
    fontFamily: 'var(--font-text)',
    ...style,
  }}>
    {icon}
    <div style={{ flex: 1, fontSize: 16, fontWeight: 500, color: '#000', minWidth: 0 }}>{children}</div>
    {trailing}
  </div>
);

const SheetHandle = () => (
  <div style={{ width: 36, height: 4, background: '#CBCBCB', borderRadius: 2, margin: '8px auto 14px' }} />
);

const Divider = ({ inset = 0 }) => (
  <div style={{ height: 1, background: '#EEEEEE', marginLeft: inset }} />
);

const ListRow = ({ icon, title, subtitle, trailing, onClick, selected }) => (
  <div onClick={onClick} style={{
    display: 'flex', alignItems: 'center', gap: 14, padding: '12px 4px',
    cursor: onClick ? 'pointer' : 'default',
    background: selected ? '#F6F6F6' : 'transparent',
    borderRadius: selected ? 8 : 0,
    paddingLeft: selected ? 12 : 4, paddingRight: selected ? 12 : 4,
  }}>
    {icon && (
      <div style={{ width: 40, height: 40, background: '#F6F6F6', borderRadius: 20,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
    )}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ font: '500 16px/20px var(--font-text)', color: '#000',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
      {subtitle && <div style={{ font: '400 13px/16px var(--font-text)', color: '#757575', marginTop: 2 }}>{subtitle}</div>}
    </div>
    {trailing}
  </div>
);

// "Pin to" dot for the route compose row: solid square = destination
const PinFrom = () => <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#000', display: 'inline-block', flexShrink: 0 }} />;
const PinTo = () => <span style={{ width: 10, height: 10, background: '#000', display: 'inline-block', flexShrink: 0 }} />;

// Map background — uses the placeholder SVG; can be slid via translateY for parallax
const MapBG = ({ style }) => (
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: "url('../../assets/map-placeholder.svg')",
    backgroundSize: 'cover', backgroundPosition: 'center',
    ...style,
  }} />
);

Object.assign(window, { Icon, Btn, FieldRow, SheetHandle, Divider, ListRow, PinFrom, PinTo, MapBG });
