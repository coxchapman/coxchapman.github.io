// Marketing — components for uber.com.

const mIcon = ({ name, size = 18, stroke = 2, color = 'currentColor', style }) => {
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
  return <span ref={ref} style={{ display: 'inline-flex', color, ...style }} />;
};
const MIcon = mIcon;

// Top nav — black bar with wordmark + links
const Nav = () => (
  <nav style={{ background: '#000', color: '#FFF', position: 'sticky', top: 0, zIndex: 50 }}>
    <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', alignItems: 'center',
      gap: 32, padding: '0 32px', height: 64 }}>
      <a href="#" style={{ color: '#FFF', font: '800 26px var(--font-display)',
        letterSpacing: '-0.04em', textDecoration: 'none' }}>Uber</a>
      <div style={{ display: 'flex', gap: 24 }}>
        {['Company','Ride','Drive','Deliver','Eat','Business','Freight'].map(l => (
          <a key={l} href="#" style={{ color: '#FFF', font: '500 14px var(--font-text)',
            textDecoration: 'none', opacity: 0.95 }}>{l}</a>
        ))}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
        <a href="#" style={{ color: '#FFF', font: '500 14px var(--font-text)',
          textDecoration: 'none', padding: '8px 12px' }}>EN</a>
        <a href="#" style={{ color: '#FFF', font: '500 14px var(--font-text)',
          textDecoration: 'none', padding: '8px 12px' }}>Help</a>
        <a href="#" style={{ color: '#FFF', font: '500 14px var(--font-text)',
          textDecoration: 'none', padding: '8px 12px' }}>Log in</a>
        <a href="#" style={{ background: '#FFF', color: '#000', font: '500 14px var(--font-text)',
          textDecoration: 'none', padding: '8px 14px', borderRadius: 999 }}>Sign up</a>
      </div>
    </div>
  </nav>
);

// Hero — two side-by-side cards: "Go anywhere" / "Get anything"
const Hero = () => (
  <section style={{ background: '#FFF', padding: '32px 32px 64px' }}>
    <div style={{ maxWidth: 1440, margin: '0 auto' }}>
      <h1 style={{ font: '800 72px/76px var(--font-display)', letterSpacing: '-0.035em',
        margin: '40px 0 32px', color: '#000', maxWidth: 900 }}>
        Go anywhere, get anything
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <HeroCard
          eyebrow="Ride"
          title="Request a ride now"
          sub="Affordable rides, all to yourself."
          primaryLabel="See prices"
          secondaryLabel="Schedule for later"
          art={
            <div style={{ position: 'absolute', inset: 0, background: "url('../../assets/photo-city-night.svg') center/cover" }}/>
          }
          dark
        />
        <HeroCard
          eyebrow="Eats"
          title="Order delivery with Uber Eats"
          sub="Your favorite restaurants. To your door."
          primaryLabel="Order now"
          secondaryLabel="Find restaurants"
          accent="#06C167"
          art={
            <div style={{ position: 'absolute', inset: 0, background: '#06C167',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="../../assets/photo-food-burger.svg" style={{ width: '90%', height: '90%', objectFit: 'cover', borderRadius: 12 }}/>
            </div>
          }
        />
      </div>
    </div>
  </section>
);

const HeroCard = ({ eyebrow, title, sub, primaryLabel, secondaryLabel, dark, accent, art }) => (
  <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden',
    aspectRatio: '1.55', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    background: dark ? '#000' : '#FFF', color: dark ? '#FFF' : '#000' }}>
    {art}
    <div style={{ position: 'relative', padding: 40, display: 'flex', flexDirection: 'column', gap: 12,
      background: dark
        ? 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0) 70%)'
        : 'linear-gradient(to top, rgba(255,255,255,0.96), rgba(255,255,255,0) 70%)' }}>
      <span style={{ font: '500 13px var(--font-text)', opacity: 0.85, textTransform: 'uppercase',
        letterSpacing: '0.04em' }}>{eyebrow}</span>
      <h3 style={{ font: '700 36px/40px var(--font-display)', letterSpacing: '-0.02em', margin: 0,
        maxWidth: 380 }}>{title}</h3>
      <p style={{ font: '400 16px var(--font-text)', opacity: 0.9, margin: 0, maxWidth: 380 }}>{sub}</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <button style={{
          background: accent || (dark ? '#FFF' : '#000'),
          color: accent ? '#FFF' : (dark ? '#000' : '#FFF'),
          border: 'none', borderRadius: 999, padding: '12px 20px', cursor: 'pointer',
          font: '500 15px var(--font-text)' }}>{primaryLabel}</button>
        <button style={{ background: 'transparent', color: dark ? '#FFF' : '#000',
          border: 'none', cursor: 'pointer', font: '500 15px var(--font-text)',
          textDecoration: 'underline' }}>{secondaryLabel}</button>
      </div>
    </div>
  </div>
);

// Section: drive & deliver
const DriveSection = () => (
  <section style={{ background: '#000', color: '#FFF', padding: '120px 32px' }}>
    <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid',
      gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
      <div>
        <div style={{ font: '500 13px var(--font-text)', textTransform: 'uppercase',
          letterSpacing: '0.04em', opacity: 0.7, marginBottom: 16 }}>Drive</div>
        <h2 style={{ font: '800 60px/64px var(--font-display)', letterSpacing: '-0.03em',
          margin: '0 0 24px' }}>Drive when you want, make what you need</h2>
        <p style={{ font: '400 18px/28px var(--font-text)', opacity: 0.85, maxWidth: 480, margin: '0 0 32px' }}>
          Make money on your schedule with deliveries or rides — or both. You can use your own car or choose a rental through Uber.
        </p>
        <button style={{ background: '#FFF', color: '#000', border: 'none', borderRadius: 999,
          padding: '14px 24px', cursor: 'pointer', font: '500 16px var(--font-text)' }}>
          Get started
        </button>
        <a href="#" style={{ color: '#FFF', font: '500 16px var(--font-text)', marginLeft: 16,
          textDecoration: 'underline' }}>Already have an account? Sign in →</a>
      </div>
      <div style={{ aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden',
        background: "url('../../assets/photo-city-night.svg') center/cover" }} />
    </div>
  </section>
);

// Product grid — 6 tiles
const ProductGrid = () => {
  const tiles = [
    { name: 'Ride', desc: 'Get to wherever you need to go.', bg: '#F6F6F6', color: '#000', vehicle: '../../assets/vehicle-uberx.svg' },
    { name: 'Reserve', desc: 'Plan ahead with a guaranteed pickup.', bg: '#EEEEEE', color: '#000', vehicle: '../../assets/vehicle-uberblack.svg' },
    { name: 'Intercity', desc: 'Long-distance rides between cities.', bg: '#FAFAFA', color: '#000', vehicle: '../../assets/vehicle-suv.svg' },
    { name: 'Eats', desc: 'Your favorite restaurants, to your door.', bg: '#06C167', color: '#FFF' },
    { name: 'Business', desc: 'Trips and meals for your company.', bg: '#000', color: '#FFF' },
    { name: 'Freight', desc: 'Move goods reliably across the country.', bg: '#276EF1', color: '#FFF' },
  ];
  return (
    <section style={{ background: '#FFF', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <h2 style={{ font: '800 48px/52px var(--font-display)', letterSpacing: '-0.025em',
          margin: '0 0 32px' }}>A new way to move</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {tiles.map(t => (
            <div key={t.name} style={{ background: t.bg, color: t.color, padding: 28,
              borderRadius: 12, aspectRatio: '1.35', display: 'flex', flexDirection: 'column',
              cursor: 'pointer' }}>
              <div style={{ font: '700 28px/32px var(--font-display)',
                letterSpacing: '-0.015em' }}>{t.name}</div>
              <div style={{ font: '400 15px/22px var(--font-text)', marginTop: 8,
                opacity: 0.85, maxWidth: 280 }}>{t.desc}</div>
              {t.vehicle && (
                <img src={t.vehicle} style={{ marginTop: 'auto', alignSelf: 'flex-end',
                  width: 120, opacity: t.color === '#FFF' ? 0.9 : 1,
                  filter: t.color === '#FFF' ? 'invert(1)' : 'none' }} alt=""/>
              )}
              {!t.vehicle && (
                <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6,
                  font: '500 14px var(--font-text)' }}>
                  Learn more <MIcon name="arrow-right" size={16}/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats strip
const Stats = () => (
  <section style={{ background: '#000', color: '#FFF', padding: '80px 32px' }}>
    <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      {[
        ['10,000+', 'cities served worldwide'],
        ['70+', 'countries on the platform'],
        ['28M+', 'trips per day on average'],
        ['6.5M+', 'active drivers and couriers'],
      ].map(([n, l]) => (
        <div key={l}>
          <div style={{ font: '800 64px/64px var(--font-display)', letterSpacing: '-0.03em' }}>{n}</div>
          <div style={{ font: '400 15px var(--font-text)', opacity: 0.8, marginTop: 8, maxWidth: 220 }}>{l}</div>
        </div>
      ))}
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer style={{ background: '#000', color: '#FFF', padding: '64px 32px 32px' }}>
    <div style={{ maxWidth: 1440, margin: '0 auto' }}>
      <h2 style={{ font: '800 48px var(--font-display)', letterSpacing: '-0.025em',
        margin: '0 0 32px' }}>Uber</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {[
          ['Company', ['About us','Our offerings','Newsroom','Investors','Blog','Careers']],
          ['Products', ['Ride','Drive','Deliver','Eat','Uber for Business','Uber Freight']],
          ['Global citizenship', ['Safety','Sustainability','Diversity & inclusion']],
          ['Travel', ['Reserve','Airports','Cities']],
        ].map(([h, links]) => (
          <div key={h}>
            <div style={{ font: '700 15px var(--font-text)', marginBottom: 16 }}>{h}</div>
            {links.map(l => (
              <a key={l} href="#" style={{ display: 'block', color: '#FFF', opacity: 0.85,
                font: '400 14px/30px var(--font-text)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #333', marginTop: 48, paddingTop: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        font: '400 13px var(--font-text)', opacity: 0.7, flexWrap: 'wrap', gap: 12 }}>
        <div>© 2026 Uber Technologies Inc.</div>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Privacy</a>
          <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Accessibility</a>
          <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { MIcon, Nav, Hero, HeroCard, DriveSection, ProductGrid, Stats, Footer });
